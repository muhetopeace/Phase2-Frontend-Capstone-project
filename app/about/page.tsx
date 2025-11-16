import Container from '@/components/layout/Container';

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About PublishHub</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-4">
            PublishHub is a modern publishing platform designed to empower writers 
            and creators to share their stories with the world.
          </p>
          <p className="text-gray-600 mb-4">
            Built with the latest web technologies, we provide a seamless writing 
            and reading experience that puts content first.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To democratize publishing and give every voice a platform to be heard.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Empower creators with intuitive tools</li>
            <li>Build a supportive community</li>
            <li>Prioritize user privacy and data security</li>
            <li>Foster diverse voices and perspectives</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}