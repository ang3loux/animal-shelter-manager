import { cn } from '@/lib/utils';

interface LoginLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const LoginLayout = ({ children, className }: LoginLayoutProps) => {
  const wrapperStyles = cn('', className);

  return <main className={wrapperStyles}>{children}</main>;
};
