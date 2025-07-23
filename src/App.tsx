import React, { useState } from 'react';
import { Menu, X, ArrowRight, TreePine, Heart, Sprout, Users, Github, Twitter, Linkedin, Leaf, HandHeart, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="relative bg-white/90 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Quantum Pulse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#mission" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Our Mission
              </a>
              <a href="#impact" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Our Impact
              </a>
              <a href="#donate" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Get Involved
              </a>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-green-200/50 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#mission" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                  Our Mission
                </a>
                <a href="#impact" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                  Our Impact
                </a>
                <a href="#donate" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                  Get Involved
                </a>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-medium w-full">
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Growing Trees,
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Changing Lives
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Quantum Pulse Foundation, we believe in the power of nature and compassion. 
            Together, we plant trees to heal our planet and support communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center">
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-slate-300 text-slate-700 hover:border-green-600 hover:text-green-600 transition-all duration-200 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Creating a sustainable future through environmental restoration and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Tree Plantation",
                description: "We plant native trees to restore ecosystems, combat climate change, and create green spaces for future generations."
              },
              {
                icon: Heart,
                title: "Community Support",
                description: "Providing essential resources, education, and opportunities to uplift underprivileged communities worldwide."
              },
              {
                icon: Globe,
                title: "Environmental Impact",
                description: "Creating measurable positive change through sustainable practices and environmental conservation initiatives."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Together, we're making a real difference in communities and environments around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                number: "50,000+",
                label: "Trees Planted",
                description: "Native trees planted across 15 countries"
              },
              {
                icon: HandHeart,
                number: "25,000+",
                label: "Lives Impacted",
                description: "Families supported with essential resources"
              },
              {
                icon: Leaf,
                number: "1,200+",
                label: "Tons CO₂ Offset",
                description: "Carbon dioxide removed from atmosphere"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-slate-900 mb-2">{stat.label}</div>
                <p className="text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="donate" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every donation helps us plant more trees and support more families. Together, we can create a better world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg">
              Donate Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              There are many ways you can help us grow trees and support communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Plant a Tree",
                amount: "$5",
                description: "Fund the planting and care of one native tree"
              },
              {
                title: "Feed a Family",
                amount: "$25",
                description: "Provide nutritious meals for a family for one week"
              },
              {
                title: "Education Support",
                amount: "$50",
                description: "Support a child's education for one month"
              },
              {
                title: "Community Garden",
                amount: "$100",
                description: "Help establish a sustainable community garden"
              }
            ].map((option, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">{option.amount}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{option.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{option.description}</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Choose This
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get the latest updates on our tree planting initiatives and community impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Quantum Pulse</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Growing trees and supporting communities to create a sustainable and compassionate world for all.
              </p>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Our Work</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Tree Planting</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Community Aid</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Foundation</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Impact Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Quantum Pulse Foundation. All rights reserved. | Registered Charity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;