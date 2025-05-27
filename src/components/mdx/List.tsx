type ListProps = {
  children: React.ReactNode;
  className?: string;
};

export function UnorderedList({ children, className = '' }: ListProps) {
  return (
    <ul className={`list-disc list-outside mr-6 mb-6 space-y-2 ${className}`}>
      {children}
    </ul>
  );
}

export function OrderedList({ children, className = '' }: ListProps) {
  return (
    <ol className={`list-decimal list-outside mr-6 mb-6 space-y-2 ${className}`}>
      {children}
    </ol>
  );
}

export function ListItem({ children, className = '' }: ListProps) {
  return (
    <li className={`${className}`}>
      {children}
    </li>
  );
} 