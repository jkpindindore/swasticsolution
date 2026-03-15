import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const articles = [
    {
      title: 'Material Testing Guide: Understanding Key Testing Methods',
      excerpt: 'A comprehensive guide to material testing methods including tensile, compression, and hardness testing for quality control.',
      date: '2024-03-10',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/8327945/pexels-photo-8327945.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Testing Guide',
    },
    {
      title: 'Hardness Testing Methods: Rockwell, Brinell, and Vickers Explained',
      excerpt: 'Learn about the different hardness testing methods, their applications, and how to choose the right method for your needs.',
      date: '2024-03-08',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technical',
    },
    {
      title: 'Quality Control in Manufacturing: Best Practices',
      excerpt: 'Implementing effective quality control processes using modern testing equipment and methodologies.',
      date: '2024-03-05',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Quality Control',
    },
    {
      title: 'Metallurgical Microscopy: Applications in Industry',
      excerpt: 'How metallurgical microscopes are used for microstructure analysis and quality assurance in metal industries.',
      date: '2024-03-02',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Metallurgy',
    },
    {
      title: 'Universal Testing Machines: Features and Applications',
      excerpt: 'Understanding the capabilities and applications of UTM in material testing and research.',
      date: '2024-02-28',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Equipment',
    },
    {
      title: 'Environmental Testing: Salt Spray Chamber Guide',
      excerpt: 'Best practices for corrosion testing using salt spray chambers in automotive and aerospace industries.',
      date: '2024-02-25',
      author: 'Technical Team',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Environmental',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Technical Blog</h1>
          <p className="text-xl text-blue-100">
            Insights, Guides, and Best Practices in Material Testing
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <button className="mt-4 text-orange-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
