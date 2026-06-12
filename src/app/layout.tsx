// Root layout — redirects are handled by middleware to /[locale]
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
