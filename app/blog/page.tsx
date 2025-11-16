import Container from '@/components/layout/Container';

export default function BlogPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <article 
            key={i} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-blue-500"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Sample Post {i}</h2>
              <p className="text-gray-600 mb-4">
                This is a sample blog post. Real content will be loaded from the API in future labs.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>5 min read</span>
                <span>Nov 16, 2025</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}