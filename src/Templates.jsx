
import { useState, useEffect } from 'react';
import './Templates.css';

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'business', name: 'Business' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'blog', name: 'Blog' },
    { id: 'landing', name: 'Landing Page' },
    { id: 'restaurant', name: 'Restaurant' }
  ];

  const templates = [
    {
      id: 1,
      name: 'Business Pro',
      category: 'business',
      image: '/assets/templates/business-pro.jpg',
      color: '#3b82f6',
      description: 'Professional business website template with modern design',
      features: ['Responsive', 'Contact form', 'About page', 'Services section'],
      popular: true
    },
    {
      id: 2,
      name: 'E-Shop',
      category: 'ecommerce',
      image: '/assets/templates/e-shop.jpg',
      color: '#10b981',
      description: 'Complete e-commerce solution with shopping cart',
      features: ['Product catalog', 'Shopping cart', 'Checkout process', 'User accounts'],
      popular: true
    },
    {
      id: 3,
      name: 'Creative Portfolio',
      category: 'portfolio',
      image: '/assets/templates/creative-portfolio.jpg',
      color: '#f59e0b',
      description: 'Showcase your work with this stunning portfolio template',
      features: ['Gallery', 'Project pages', 'Filterable works', 'About section'],
      popular: false
    },
    {
      id: 4,
      name: 'Blog Standard',
      category: 'blog',
      image: '/assets/templates/blog-standard.jpg',
      color: '#8b5cf6',
      description: 'Clean and minimal blog template',
      features: ['Categories', 'Comments', 'Search function', 'Related posts'],
      popular: false
    },
    {
      id: 5,
      name: 'Launch Pad',
      category: 'landing',
      image: '/assets/templates/launch-pad.jpg',
      color: '#ec4899',
      description: 'High-converting landing page template',
      features: ['Call to action', 'Testimonials', 'Feature showcase', 'Lead form'],
      popular: true
    },
    {
      id: 6,
      name: 'Restaurant Deluxe',
      category: 'restaurant',
      image: '/assets/templates/restaurant-deluxe.jpg',
      color: '#ef4444',
      description: 'Elegant template for restaurants and cafes',
      features: ['Menu display', 'Reservation form', 'Gallery', 'Contact info'],
      popular: false
    },
    {
      id: 7,
      name: 'Corporate Edge',
      category: 'business',
      image: '/assets/templates/corporate-edge.jpg',
      color: '#3b82f6',
      description: 'Enterprise-level business template with advanced features',
      features: ['Team section', 'Services', 'Testimonials', 'News section'],
      popular: false
    },
    {
      id: 8,
      name: 'Photo Portfolio',
      category: 'portfolio',
      image: '/assets/templates/photo-portfolio.jpg',
      color: '#f59e0b',
      description: 'Perfect template for photographers',
      features: ['Full-screen gallery', 'Masonry layout', 'Category filtering', 'Contact form'],
      popular: false
    },
    {
      id: 9,
      name: 'Market Plus',
      category: 'ecommerce',
      image: '/assets/templates/market-plus.jpg',
      color: '#10b981',
      description: 'Advanced e-commerce template with all the bells and whistles',
      features: ['Product filtering', 'Wishlist', 'User reviews', 'Order tracking'],
      popular: false
    },
    {
      id: 10,
      name: 'Digital Agency',
      category: 'business',
      image: '/assets/templates/digital-agency.jpg',
      color: '#3b82f6',
      description: 'Modern template for digital agencies and startups',
      features: ['Case studies', 'Service showcase', 'Team profiles', 'Blog section'],
      popular: false
    },
    {
      id: 11,
      name: 'Food Blog',
      category: 'blog',
      image: '/assets/templates/food-blog.jpg',
      color: '#8b5cf6',
      description: 'Delicious template for food bloggers',
      features: ['Recipe format', 'Ingredient lists', 'Category pages', 'Print functionality'],
      popular: false
    },
    {
      id: 12,
      name: 'App Landing',
      category: 'landing',
      image: '/assets/templates/app-landing.jpg',
      color: '#ec4899',
      description: 'Perfect for showcasing mobile apps',
      features: ['Feature showcase', 'App screenshots', 'Download buttons', 'Pricing table'],
      popular: false
    },
    {
      id: 13,
      name: 'Cafe Corner',
      category: 'restaurant',
      image: '/assets/templates/cafe-corner.jpg',
      color: '#ef4444',
      description: 'Cozy template for cafes and coffee shops',
      features: ['Menu cards', 'Location map', 'Opening hours', 'About section'],
      popular: false
    },
    {
      id: 14,
      name: 'Creative Blog',
      category: 'blog',
      image: '/assets/templates/creative-blog.jpg',
      color: '#8b5cf6',
      description: 'Unique blog layout for creative writers',
      features: ['Unique post layouts', 'Author profiles', 'Newsletter signup', 'Social sharing'],
      popular: true
    },
    {
      id: 15,
      name: 'Fitness Pro',
      category: 'business',
      image: '/assets/templates/fitness-pro.jpg',
      color: '#3b82f6',
      description: 'Dynamic template for fitness businesses',
      features: ['Class schedules', 'Trainer profiles', 'Membership info', 'Testimonials'],
      popular: false
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    
  
    setTimeout(() => {
      let filtered = templates;
      
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(template => template.category === selectedCategory);
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(template => 
          template.name.toLowerCase().includes(query) || 
          template.description.toLowerCase().includes(query) ||
          template.features.some(feature => feature.toLowerCase().includes(query))
        );
      }
      
      setFilteredTemplates(filtered);
      setIsLoading(false);
    
      setVisibleCount(9);
    }, 300);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="templates-page">
      <div className="templates-hero">
        <h1>Website Templates</h1>
        <p>Professionally designed, fully responsive website templates to jumpstart your online presence</p>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      <div className="filter-container">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="templates-container">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading templates...</p>
          </div>
        ) : filteredTemplates.length === 0 ? (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3>No templates found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
            <button className="reset-button" onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}>Reset filters</button>
          </div>
        ) : (
          <>
            <div className="templates-grid">
              {filteredTemplates.slice(0, visibleCount).map(template => (
                <div key={template.id} className="template-card">
                  <div className="template-image" style={{ backgroundColor: `${template.color}20` }}>
                    <div className="image-placeholder" style={{ backgroundColor: template.color }}>
                      {template.name.substring(0, 1)}
                    </div>
                    {template.popular && <span className="popular-tag">Popular</span>}
                  </div>
                  <div className="template-content">
                    <h3>{template.name}</h3>
                    <p className="template-description">{template.description}</p>
                    <div className="template-features">
                      {template.features.map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    <div className="template-actions">
                      {/* <button className="preview-button">Live Preview</button>
                      <button className="use-template-button">Use This Template</button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredTemplates.length > visibleCount && (
              <div className="load-more">
                <button onClick={loadMore} className="load-more-button">
                  Load More Templates
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="template-cta">
        <div className="cta-content">
          <h2>Need something custom?</h2>
          <p>Our team of designers and developers can create a unique website tailored to your specific requirements.</p>
          <div className="cta-buttons">
            <a className="primary-button" href="https://forms.gle/f2RVAPVhSauupu4G9">Request Custom Design</a>
            <a className="secondary-button" href="https://forms.gle/pznKCvowiQBD6fAj9" >Contact Our Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;