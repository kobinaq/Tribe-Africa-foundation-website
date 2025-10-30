import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHeart, FaGraduationCap, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { getContent, getFeaturedProjects } from '@/lib/data';

export default function Home() {
  const content = getContent();
  const { home } = content;
  const featuredProjects = getFeaturedProjects(3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          {/* You can replace this with an actual image */}
          <div className="relative w-full h-full bg-gradient-to-br from-primary-700 to-primary-900">
            {/* Uncomment below to use an actual hero image */}
            {/* <Image
              src="/images/hero/main-hero.jpg"
              alt="Tribe Africa Foundation"
              fill
              className="object-cover"
              priority
            /> */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {home.hero.subtitle}
            </p>
            <Link href={home.hero.ctaLink} className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg">
              {home.hero.ctaText}
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
              <h2 className="section-title mt-2">{home.whoWeAre.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {home.whoWeAre.description}
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-6">
                <p className="text-gray-700 italic">
                  "{home.whoWeAre.mission}"
                </p>
              </div>
              <Link href={home.whoWeAre.ctaLink} className="btn-primary inline-flex items-center gap-2">
                {home.whoWeAre.ctaText}
                <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-100 p-6 rounded-lg">
                <FaGraduationCap className="text-primary-600 text-4xl mb-3" />
                <h3 className="font-semibold text-lg">Education</h3>
                <p className="text-sm text-gray-600">Quality learning for all</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <FaHandsHelping className="text-green-600 text-4xl mb-3" />
                <h3 className="font-semibold text-lg">Skills Training</h3>
                <p className="text-sm text-gray-600">Empowering youth</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <FaHeart className="text-blue-600 text-4xl mb-3" />
                <h3 className="font-semibold text-lg">Community Care</h3>
                <p className="text-sm text-gray-600">Supporting families</p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg">
                <FaUsers className="text-yellow-600 text-4xl mb-3" />
                <h3 className="font-semibold text-lg">Empowerment</h3>
                <p className="text-sm text-gray-600">Building futures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Impact</span>
          <h2 className="section-title mt-2 mb-12">{home.impact.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {home.impact.stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Work</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
            <p className="section-subtitle mx-auto mt-4">
              Discover the transformative work we're doing across African communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    <FaHeart />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 uppercase">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.short_description}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                  >
                    View Project
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary inline-flex items-center gap-2">
              View All Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{home.getInvolved.title}</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            {home.getInvolved.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/give" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              {home.getInvolved.donateText}
              <FaHeart />
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              {home.getInvolved.contactText}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
