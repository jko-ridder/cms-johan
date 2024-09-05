import { notFound } from 'next/navigation';

export default async function DynamicPage({ params }) {
  const { slug } = params;

  // Fetch from Storyblok API
  const res = await fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?version=draft&token=Y5rjWFqkixRS5sz0n4jM1gtt`);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  // Access the page content from the API response
  const pageData = data?.story;

  // Return 404 if page data is not found
  if (!pageData) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16">
      {/* Display the name of the page */}
      <h1 className="text-4xl font-bold mb-4">{pageData.name}</h1>

      {/* Loop through the body array to render components dynamically */}
      {pageData.content.body.map((block) => {
        if (block.component === 'Hero') {
          return (
            <div key={block._uid} className="hero">
              <h2 className="text-3xl font-semibold">{block.title}</h2>
              <p>{block.description}</p>
              {block.picture?.filename && (
                <img src={block.picture.filename} alt={block.picture.alt || 'Hero Image'} />
              )}
            </div>
          );
        }
        // Add handling for other components here as needed
        return null;
      })}
    </div>
  );
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  // You can fetch slugs dynamically from Storyblok here if needed
  return [
    { slug: 'about' },
    { slug: 'contact' },
    { slug: 'team' },
    { slug: 'portfolio' },
    { slug: 'product' },
  ];
}
