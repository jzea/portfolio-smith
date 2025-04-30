import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of UX Design in 2025',
    excerpt: 'Explore upcoming trends in user experience design and how they will shape the digital landscape.',
    date: 'June 15, 2025',
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'How to Create Effective Design Systems',
    excerpt: 'Learn the key components of a successful design system and how to implement it in your organization.',
    date: 'May 22, 2025',
    imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Balancing Design and Development Skills',
    excerpt: 'Tips for designers looking to expand their coding knowledge and developers wanting to improve their design capabilities.',
    date: 'April 10, 2025',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'My Journey as an Entrepreneur',
    excerpt: 'Personal insights and lessons learned from founding multiple startups and investing in tech companies.',
    date: 'March 5, 2025',
    imageUrl: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-block text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;