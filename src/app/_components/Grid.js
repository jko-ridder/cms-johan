// src/app/_components/Grid.js

import ImageWithText from './ImageWithText';

const Grid = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {data.map((item) => (
            <ImageWithText
              key={item._uid}
              headline={item.title}
              text={item.description}
              imageUrl={item.picture.filename} // Pass the image URL
              altText={item.picture.alt || 'Image'} // Pass the alt text
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;