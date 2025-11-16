import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Container({ 
  children, 
  className,
  size = 'lg' 
}: ContainerProps) {
  const maxWidth = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
  };

  return (
    <div className={clsx(
      'mx-auto px-4 sm:px-6 lg:px-8',
      maxWidth[size],
      className
    )}>
      {children}
    </div>
  );
}