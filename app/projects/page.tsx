import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaTag, FaHeart } from 'react-icons/fa';
import { getProjects } from '@/lib/data';

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            Discover the transformative work we're doing to bring hope and create opportunities across African communities
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Project Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaHeart className="text-white text-7xl opacity-50" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="flex items-center gap-1 text-primary-600 font-semibold">
                      <FaTag className="text-xs" />
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <FaCalendar className="text-xs" />
                      {new Date(project.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.short_description}
                  </p>

                  {/* View Project Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                  >
                    View Project
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Work
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Your donation helps us continue these vital projects and expand our reach to more communities
          </p>
          <Link
            href="/give"
            className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Make a Donation
            <FaHeart />
          </Link>
        </div>
      </section>
    </div>
  );
}
