// import { Menu, X, Phone, Mail } from 'lucide-react';
// import { useState } from 'react';
// import { useRouter } from '../../context/RouterContext';
// import { Page } from '../../types';

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { currentPage, navigate } = useRouter();

//   const navItems: { label: string; page: Page }[] = [
//     { label: 'Home', page: 'home' },
//     { label: 'About Us', page: 'about' },
//     { label: 'Products', page: 'products' },
//     { label: 'Industries', page: 'industries' },
//     { label: 'Blog', page: 'blog' },
//     { label: 'Contact', page: 'contact' },
//   ];

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
//           <div className="flex items-center gap-4">
//             <a href="tel:+917987485024" className="flex items-center gap-1 hover:text-orange-400">
//               <Phone size={14} />
//               <span>+91 7987485024</span>
//             </a>
//             <a href="mailto:enquiry@swasticsolutions.in" className="flex items-center gap-1 hover:text-orange-400">
//               <Mail size={14} />
//               <span>enquiry@swasticsolutions.in</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//               SS
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-blue-900">Swastic Solutions</h1>
//               <p className="text-xs text-gray-600">Industrial Testing Equipment</p>
//             </div>
//           </div>

//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.page}
//                 onClick={() => navigate(item.page)}
//                 className={`font-medium transition-colors ${
//                   currentPage === item.page
//                     ? 'text-orange-500'
//                     : 'text-gray-700 hover:text-orange-500'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           <button
//             className="lg:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <nav className="lg:hidden pb-4 border-t">
//             {navItems.map((item) => (
//               <button
//                 key={item.page}
//                 onClick={() => {
//                   navigate(item.page);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`block w-full text-left py-3 px-4 ${
//                   currentPage === item.page
//                     ? 'text-orange-500 bg-orange-50'
//                     : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }


import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import { Page } from "../../types";

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Plastic Testing Equipment");

  const { currentPage, navigate } = useRouter();

  const navItems: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Products", page: "products" },
    { label: "Industries", page: "industries" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" },
  ];

  const megaMenu: Record<string, string[]> = {
    "Plastic Testing Equipment": [
      "Electromechanical Universal Testing Machines",
      "Fruit Firmness Tester",
      "Automatic Capsule Hardness Tester",
      "Ball Rebound Tester",
      "Pendulum Rebound Resilience Tester",
      "Pusey & Jones Tester",
      "Portable Shore Durometer System",
      "Automatic Shore IRHD Hardness System",
      "Analogue Shore Durometer",
      "HDT/VICAT Testing Machine",
    ],
    "Metal Testing Equipment": [
      "Universal Testing Machine",
      "Rockwell Hardness Tester",
      "Brinell Hardness Tester",
      "Vickers Hardness Tester",
      "Impact Testing Machine",
    ],
    "Rubber Testing Equipment": [
      "Rubber Hardness Tester",
      "Rubber Tensile Tester",
      "Rebound Resilience Tester",
    ],
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm">

          <div className="flex gap-4">

            <a href="tel:+917987485024" className="flex items-center gap-1 hover:text-orange-400">
              <Phone size={14} />
              +91 7987485024
            </a>

            <a href="mailto:enquiry@swasticsolutions.in" className="flex items-center gap-1 hover:text-orange-400">
              <Mail size={14} />
              enquiry@swasticsolutions.in
            </a>

          </div>

        </div>
      </div>


      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 relative">

        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("home")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              SS
            </div>

            <div>
              <h1 className="text-2xl font-bold text-blue-900">Swastic Solutions</h1>
              <p className="text-xs text-gray-600">Industrial Testing Equipment</p>
            </div>
          </div>


          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => {

              if (item.label === "Products") {

                return (

                  <div key={item.page} className="group">

                    <button className="font-medium text-gray-700 hover:text-orange-500">
                      Products
                    </button>


                    {/* FULL WIDTH MEGA MENU */}
                    <div className="absolute left-0 right-0 top-full bg-white shadow-xl border
                                    opacity-0 invisible
                                    group-hover:visible group-hover:opacity-100
                                    transition-all duration-200">

                      <div className="max-w-7xl mx-auto grid grid-cols-3">

                        {/* CATEGORY COLUMN */}
                        <div className="bg-gray-100 border-r">

                          {Object.keys(megaMenu).map((cat) => (

                            <div
                              key={cat}
                              onMouseEnter={() => setActiveCategory(cat)}
                              className={`px-5 py-3 text-sm cursor-pointer ${
                                activeCategory === cat
                                  ? "bg-orange-500 text-white"
                                  : "hover:bg-gray-200"
                              }`}
                            >
                              {cat}
                            </div>

                          ))}

                        </div>


                        {/* PRODUCT LIST */}
                        <div className="p-5 border-r">

                          {megaMenu[activeCategory].map((product) => (

                            <div
                              key={product}
                              className="py-2 text-sm hover:text-orange-500 cursor-pointer"
                            >
                              {product}
                            </div>

                          ))}

                        </div>


                        {/* IMAGE PREVIEW */}
                        <div className="p-5 flex flex-col items-center text-center">

                          <img
                            src="/images/testing-machine.jpg"
                            className="h-40 object-contain mb-3"
                          />

                          <p className="text-sm text-gray-600">
                            Automatic hardness testing system for plastic
                            and rubber materials.
                          </p>

                          <button className="mt-3 text-orange-500 font-semibold">
                            Read More →
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  className={`font-medium ${
                    currentPage === item.page
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </button>
              );

            })}

          </nav>


          {/* MOBILE MENU */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>


        {/* MOBILE NAV */}
        {isMenuOpen && (

          <nav className="lg:hidden border-t pb-4">

            {navItems.map((item) => (

              <button
                key={item.page}
                onClick={() => {
                  navigate(item.page);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </button>

            ))}

          </nav>

        )}

      </div>

    </header>
  );
}