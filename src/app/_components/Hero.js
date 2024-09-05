import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ data }) => {

const { title, description, hero_button_txt, picture } = data;

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image 
            src={picture.filename} // Replace with your image path
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Title, Text, Button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {title}
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            {description}
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">
              {hero_button_txt}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;