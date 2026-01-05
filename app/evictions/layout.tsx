import React from 'react';

export default function EvictionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
