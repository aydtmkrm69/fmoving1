type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
};

const styles = {
  h1: 'text-4xl font-bold mb-6',
  h2: 'text-3xl font-bold mb-5',
  h3: 'text-2xl font-bold mb-4',
  h4: 'text-xl font-bold mb-3',
  h5: 'text-lg font-bold mb-2',
  h6: 'text-base font-bold mb-2',
};

export default function Heading({ as = 'h2', children, className = '' }: HeadingProps) {
  const Component = as;
  return (
    <Component className={`${styles[as]} ${className}`}>
      {children}
    </Component>
  );
} 