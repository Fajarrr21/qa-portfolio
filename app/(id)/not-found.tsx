import { NotFoundPage } from '@/components/pages/NotFoundPage';

// Dipakai ketika notFound() dipanggil dari rute /id/* (mis. slug tak dikenal).
export default function NotFound() {
  return <NotFoundPage lang="id" />;
}
