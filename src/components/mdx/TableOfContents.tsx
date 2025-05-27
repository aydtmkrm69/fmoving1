'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Heading = {
  id: string;
  title: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get all heading elements in the article content
    const article = document.querySelector('.prose');
    if (!article) return;

    const headingElements = article.querySelectorAll('h2, h3, h4');
    
    // Process headings
    const headingsArray: Heading[] = [];
    headingElements.forEach((heading, index) => {
      // Generate an ID if it doesn't exist
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      
      headingsArray.push({
        id: heading.id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1)) // Get level from h2, h3, etc.
      });
    });
    
    setHeadings(headingsArray);

    // Update Table of Contents div
    const tocDiv = document.getElementById('table-of-contents');
    if (tocDiv && headingsArray.length > 0) {
      tocDiv.innerHTML = '';
      tocDiv.appendChild(createTOC(headingsArray));
    }
    
    // Set up intersection observer for scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.2
      }
    );
    
    headingElements.forEach(heading => {
      observer.observe(heading);
    });
    
    return () => {
      headingElements.forEach(heading => {
        observer.unobserve(heading);
      });
    };
  }, []);

  // Create TOC DOM structure
  const createTOC = (headings: Heading[]) => {
    const ul = document.createElement('ul');
    ul.className = 'space-y-2 text-right';
    
    headings.forEach(heading => {
      const li = document.createElement('li');
      
      // Add indentation based on heading level
      if (heading.level === 2) {
        li.className = 'text-gray-800 hover:text-blue-600 transition-colors';
      } else if (heading.level === 3) {
        li.className = 'mr-4 text-gray-600 hover:text-blue-600 transition-colors';
      } else {
        li.className = 'mr-6 text-gray-500 hover:text-blue-600 transition-colors text-sm';
      }
      
      const a = document.createElement('a');
      a.href = `#${heading.id}`;
      a.textContent = heading.title;
      a.className = 'block py-1';
      
      a.onclick = (e) => {
        e.preventDefault();
        document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
      };
      
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    return ul;
  };

  return null; // This component doesn't render anything, it just populates the TOC div
} 