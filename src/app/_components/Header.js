import Link from 'next/link';
import Image from 'next/image';

const Header = ({ data }) => {
    const { picture, nav_link1, nav_link2, nav_link3, nav_link4, nav_link5 } = data;

    const logoUrl = picture.startsWith('//') ? `https:${picture}` : picture;

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex-shrink-0">
        <Image 
          src={logoUrl} // Change to your logo image path
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <nav className="space-x-6">
        <Link href="/product" className="text-gray-700 hover:text-gray-900">
          {nav_link1}
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900">
          {nav_link2}
        </Link>
        <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">
          {nav_link3}
        </Link>
        <Link href="/team" className="text-gray-700 hover:text-gray-900">
          {nav_link4}
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
          {nav_link5}
        </Link>
      </nav>
    </header>
  );
};


export default Header;