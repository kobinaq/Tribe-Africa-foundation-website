'use client';

import Link from 'next/link';
import { FaArrowRight, FaHeart, FaGraduationCap, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getContent, getFeaturedProjects } from '@/lib/data';
import HeroCarousel from '@/components/HeroCarousel';
import CountUpStats from '@/components/CountUpStats';
import FadeInSection from '@/components/FadeInSection';
import ProjectImage from '@/components/ProjectImage';

export default function Home() {
  const content = getContent();
  const { home } = content;
  const featuredProjects = getFeaturedProjects(3);

  const heroImages = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.png',
    '/images/hero/hero3.png',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Hero Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel images={heroImages} interval={5000} />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white py-20 pb-32 md:pb-40">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {home.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              {home.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href={home.hero.ctaLink} className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 hover:scale-105 font-semibold py-4 px-8 rounded-lg transition-all text-lg shadow-lg">
                {home.hero.ctaText}
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V150H1380C1320 150 1200 150 1080 150C960 150 840 150 720 150C600 150 480 150 360 150C240 150 120 150 60 150H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
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
              <Link href={home.whoWeAre.ctaLink} className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
                {home.whoWeAre.ctaText}
                <FaArrowRight />
              </Link>
            </FadeInSection>
            <div className="grid grid-cols-2 gap-4">
              <FadeInSection delay={0.1} direction="left">
                <div className="bg-primary-100 p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                  <FaGraduationCap className="text-primary-600 text-4xl mb-3" />
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-sm text-gray-600">Quality learning for all</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.2} direction="left">
                <div className="bg-green-100 p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                  <FaHandsHelping className="text-green-600 text-4xl mb-3" />
                  <h3 className="font-semibold text-lg">Skills Training</h3>
                  <p className="text-sm text-gray-600">Empowering youth</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.3} direction="left">
                <div className="bg-blue-100 p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                  <FaHeart className="text-blue-600 text-4xl mb-3" />
                  <h3 className="font-semibold text-lg">Community Care</h3>
                  <p className="text-sm text-gray-600">Supporting families</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.4} direction="left">
                <div className="bg-yellow-100 p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                  <FaUsers className="text-yellow-600 text-4xl mb-3" />
                  <h3 className="font-semibold text-lg">Empowerment</h3>
                  <p className="text-sm text-gray-600">Building futures</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <FadeInSection>
            <h2 className="section-title mt-2 mb-12">{home.impact.title}</h2>
          </FadeInSection>
          <CountUpStats stats={home.impact.stats} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mt-2">Featured Projects</h2>
            <p className="section-subtitle mx-auto mt-4">
              Discover the transformative work we're doing across African communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeInSection delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all">
                  <ProjectImage
                    src={project.featured_image}
                    alt={project.title}
                    className="h-48"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary-600 uppercase">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.short_description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Project
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/projects" className="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform">
                View All Projects
                <FaArrowRight />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{home.getInvolved.title}</h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              {home.getInvolved.description}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/give" className="bg-white text-primary-700 hover:bg-gray-100 hover:scale-105 font-semibold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center gap-2">
                {home.getInvolved.donateText}
                <FaHeart />
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 hover:scale-105 font-semibold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center gap-2">
                {home.getInvolved.contactText}
                <FaArrowRight />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
