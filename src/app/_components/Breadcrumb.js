"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-lg mb-6">
      <ul className="flex space-x-2 text-gray-600">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              ) : (
                <Link href={routeTo} className="text-blue-600 hover:underline">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;