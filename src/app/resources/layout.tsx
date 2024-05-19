import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Photup',
  description: 'Image library',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-screen bg-black overflow-hidden">
      { children }
    </main>
  )
}