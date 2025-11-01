import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaCalendar, FaTag, FaHeart } from 'react-icons/fa';
import { getProjectBySlug, getProjects } from '@/lib/data';
import ProjectImage from '@/components/ProjectImage';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>

          {/* Project Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-primary-100">
            <span className="flex items-center gap-2">
              <FaTag />
              {project.category}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendar />
              {new Date(project.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <ProjectImage
              src={project.featured_image}
              alt={project.title}
              className="aspect-video rounded-lg shadow-xl"
              iconSize="xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Short Description */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
              <p className="text-lg text-gray-700 italic">{project.short_description}</p>
            </div>

            {/* Long Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.long_description}
              </p>
            </div>

            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <ProjectImage
                      key={index}
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="aspect-video rounded-lg shadow-md"
                      iconSize="md"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {project.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Project Videos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.videos.map((video, index) => (
                    <div key={index} className="aspect-video">
                      <iframe
                        src={video}
                        className="w-full h-full rounded-lg shadow-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Help Us Make a Difference
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Your support enables us to continue projects like this and reach even more communities in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/give"
              className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Donate Now
              <FaHeart />
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
