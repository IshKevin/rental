import React from 'react';
import { MapPin, Calendar, Star, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedDates, setSelectedDates] = React.useState({ start: '', end: '' });

  // Sample featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Malibu, CA",
      price: 299,
      rating: 4.8,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Downtown Loft",
      location: "New York, NY",
      price: 199,
      rating: 4.6,
      image: "/api/placeholder/400/300"
    },
    // More properties...
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Book unique homes and experiences all around the world
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-center border rounded-lg p-3">
                    <MapPin className="text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      className="ml-2 w-full outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center border rounded-lg p-3">
                    <Calendar className="text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      className="ml-2 w-full outline-none"
                      value={selectedDates.start}
                      onChange={(e) => setSelectedDates(prev => ({ ...prev, start: e.target.value }))}
                    />
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${property.price}</span>
                  <span className="text-gray-600">per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco', 'Seattle', 'Boston', 'Denver'].map((city) => (
              <div key={city} className="relative h-40 rounded-lg overflow-hidden cursor-pointer group">
                <img 
                  src="/api/placeholder/300/200" 
                  alt={city}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Price Guarantee",
              description: "Find a lower price? We'll match it plus give you 10% off."
            },
            {
              title: "Easy Booking",
              description: "Book your stay with just a few clicks. No hidden fees."
            },
            {
              title: "24/7 Support",
              description: "Our support team is always here to help you."
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;