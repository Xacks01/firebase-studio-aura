
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aura Admin',
  description: 'Admin dashboard for Aura',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/40">
      {/* We can add a sidebar or specific admin navbar here later */}
      <main className="p-4 sm:p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
