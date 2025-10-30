import Image from 'next/image';
import { FaHeart, FaHandshake, FaLightbulb, FaUsers, FaGlobeAfrica, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { getContent } from '@/lib/data';

export default function AboutPage() {
  const content = getContent();
  const { about } = content;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{about.hero.title}</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-6">{about.story.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaGlobeAfrica className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{about.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {about.mission.content}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaLightbulb className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{about.vision.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {about.vision.content}
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{about.purpose.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {about.purpose.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{about.values.title}</h2>
            <p className="section-subtitle mx-auto mt-4">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {about.values.items.map((value, index) => {
              const icons = [FaHeart, FaHandshake, FaLightbulb, FaUsers, FaGlobeAfrica];
              const Icon = icons[index % icons.length];
              const colors = [
                'from-red-500 to-pink-500',
                'from-blue-500 to-cyan-500',
                'from-yellow-500 to-orange-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-indigo-500',
              ];

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${colors[index % colors.length]} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{about.team.title}</h2>
            <p className="section-subtitle mx-auto mt-4">
              {about.team.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {about.team.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Team Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-400 to-primary-600">
                  {/* Uncomment below to use actual team member images */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  /> */}
                  {/* Placeholder with initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links (optional) */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Together, we can create lasting change and bring hope to communities across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/give"
              className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Make a Donation
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
