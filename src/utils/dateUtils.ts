/**
 * Utility functions for consistent date formatting across the application
 * to prevent hydration mismatches between server and client
 */

/**
 * Format date consistently using Gregorian calendar for Arabic locale
 * This prevents hydration errors caused by calendar system differences
 */
export function formatDateArabic(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('ar-SA', {
    calendar: 'gregory',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
}

/**
 * Format date with time for Arabic locale using Gregorian calendar
 */
export function formatDateTimeArabic(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('ar-SA', {
    calendar: 'gregory',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Format date for ISO string (for datetime attributes)
 */
export function formatDateISO(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
}