import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! The page does not exist.</p>
      <Link
        href="/home"
        className="inline-block px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}