import React from 'react';

const ZpedidosPage: React.FC = () => {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2978755/pexels-photo-2978755.jpeg",
      alt: "Delivery Team"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg",
      alt: "Delivery App Design"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/4393432/pexels-photo-4393432.jpeg",
      alt: "Delivery Process"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/4393433/pexels-photo-4393433.jpeg",
      alt: "Delivery Service"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/6169467/pexels-photo-6169467.jpeg",
      alt: "Delivery Illustration"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg",
      alt: "Delivery App Interface"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg",
      alt: "Delivery Process Flow"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/6169861/pexels-photo-6169861.jpeg",
      alt: "Delivery Experience"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6169862/pexels-photo-6169862.jpeg",
      alt: "Team Photo"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/6169669/pexels-photo-6169669.jpeg",
      alt: "Night Delivery"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/6169666/pexels-photo-6169666.jpeg",
      alt: "Delivery Instructions"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/6169667/pexels-photo-6169667.jpeg",
      alt: "Service Areas"
    },
    {
      id: 13,
      src: "https://images.pexels.com/photos/6169671/pexels-photo-6169671.jpeg",
      alt: "Delivery Partners"
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/6169672/pexels-photo-6169672.jpeg",
      alt: "Customer Experience"
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/6169673/pexels-photo-6169673.jpeg",
      alt: "App Features"
    },
    {
      id: 16,
      src: "https://images.pexels.com/photos/6169674/pexels-photo-6169674.jpeg",
      alt: "Service Coverage"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2978755/pexels-photo-2978755.jpeg"
          alt="Zpedidos Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZpedidosPage;