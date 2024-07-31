import { MainLayout } from '@/components/templates/MainLayout';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default DashboardLayout;
