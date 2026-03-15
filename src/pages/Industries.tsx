import { Factory, Car, Hammer, FlaskConical, GraduationCap, Microscope } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      icon: Car,
      name: 'Automobile',
      description: 'Comprehensive testing solutions for automotive component manufacturers',
      applications: [
        'Component strength testing',
        'Material hardness verification',
        'Quality control testing',
        'Failure analysis',
      ],
    },
    {
      icon: Factory,
      name: 'Steel & Metal Industry',
      description: 'Material testing and metallurgical analysis for steel production',
      applications: [
        'Tensile strength testing',
        'Hardness testing',
        'Microstructure analysis',
        'Quality assurance',
      ],
    },
    {
      icon: Hammer,
      name: 'Forging Plants',
      description: 'Testing equipment for forged component quality control',
      applications: [
        'Post-forging hardness testing',
        'Structural integrity analysis',
        'Heat treatment verification',
        'Dimensional inspection',
      ],
    },
    {
      icon: FlaskConical,
      name: 'Quality Testing Labs',
      description: 'Complete range of testing equipment for independent laboratories',
      applications: [
        'Material characterization',
        'Certification testing',
        'Third-party inspection',
        'Standards compliance',
      ],
    },
    {
      icon: GraduationCap,
      name: 'Engineering Colleges',
      description: 'Educational testing equipment for material science education',
      applications: [
        'Student practical training',
        'Research projects',
        'Material science labs',
        'Demonstration equipment',
      ],
    },
    {
      icon: Microscope,
      name: 'Research Institutes',
      description: 'Advanced testing equipment for R&D facilities',
      applications: [
        'Material development',
        'Advanced characterization',
        'Failure investigation',
        'Innovation projects',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100">
            Trusted Testing Solutions Across Multiple Sectors
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide testing solutions for a wide range of industries. Contact us to discuss your specific requirements.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}
