import { Factory, Award, Users, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { productCategories } from '../data/products';

export function Home() {
  const { navigate } = useRouter();

  const industries = [
    { name: 'Automobile', icon: '🚗' },
    { name: 'Steel Plants', icon: '🏭' },
    { name: 'Forging Industry', icon: '⚙️' },
    { name: 'Testing Labs', icon: '🔬' },
    { name: 'Engineering Colleges', icon: '🎓' },
    { name: 'Research Institutes', icon: '🔬' },
  ];

  const features = [
    {
      icon: Award,
      title: 'High Precision',
      description: 'Industry-leading accuracy and reliability in all measurements',
    },
    {
      icon: Wrench,
      title: 'Expert Support',
      description: 'Technical support and training for all equipment',
    },
    {
      icon: Factory,
      title: 'Wide Range',
      description: 'Comprehensive range of testing and analysis equipment',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Serving industries across India with quality solutions',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Industrial Material Testing Machines & Metallurgical Equipment Supplier consumable item
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Providing high-precision testing machines for automobile, steel, forging, laboratories, and research institutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('products')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  View Products
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://cpimg.tistatic.com//150059/6/template_photo_5.jpg"
                alt="Testing Equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Product Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate('products')}
                className="bg-white border-2 border-gray-200 hover:border-orange-500 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                  <Factory className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4 flex items-center text-orange-500 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by leading organizations across multiple sectors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-500 rounded-lg p-6 text-center transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find the Perfect Testing Solution?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our experts for personalized recommendations
          </p>
          <button
            onClick={() => navigate('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
