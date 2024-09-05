// src/app/_components/ImageWithText.js

import Image from 'next/image';

const ImageWithText = ({ headline, text, imageUrl, altText }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      {/* Image Container */}
      <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden relative">
        <Image
          src={imageUrl} // Use the dynamic image URL
          alt={altText}
          layout="responsive" // Change to responsive layout
          width={336} // Set a width for the image (same as the actual image width)
          height={253} // Set a height for the image (same as the actual image height)
          objectFit="cover" // Ensure the image covers its container properly
        />
      </div>
      <h2 className="mt-4 text-lg font-bold">{headline}</h2>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default ImageWithText;