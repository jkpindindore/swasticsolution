import { Target, Award, Users, TrendingUp } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We supply only the highest quality testing equipment from trusted manufacturers',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated support and service to ensure your complete satisfaction',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate and reliable testing solutions for critical applications',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Latest technology and advanced testing methodologies',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Swastic Solutions</h1>
          <p className="text-xl text-blue-100">
            Your Trusted Partner in Industrial Testing Equipment
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Swastic Solutions is a leading supplier of material testing machines, hardness testers,
                  metallurgical microscopes, and laboratory testing equipment for industrial and research applications.
                </p>
                <p>
                  We specialize in providing high-precision testing instruments that meet the demanding requirements
                  of modern manufacturing, quality control, and research laboratories.
                </p>
                <p>
                  Our commitment to quality, accuracy, and customer satisfaction has made us a trusted partner
                  for organizations across India seeking reliable testing solutions.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Testing Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Automobile',
                description: 'Testing equipment for automotive component manufacturers and quality labs',
              },
              {
                name: 'Steel Plants',
                description: 'Material testing and metallurgical analysis for steel production',
              },
              {
                name: 'Forging Industry',
                description: 'Hardness testing and quality control for forged components',
              },
              {
                name: 'Testing Laboratories',
                description: 'Comprehensive range of testing equipment for independent labs',
              },
              {
                name: 'Engineering Colleges',
                description: 'Educational testing equipment for material science departments',
              },
              {
                name: 'Research Institutes',
                description: 'Advanced testing and analysis equipment for R&D facilities',
              },
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
