import { layout } from '@/components/Layout/Layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => <main className={layout}>{children}</main>;
