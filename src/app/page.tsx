import { redirect } from 'next/navigation';

// Root "/" redirects to the default locale — middleware handles locale detection,
// but this catches direct server-side hits before middleware can redirect.
export default function RootPage() {
  redirect('/en');
}
