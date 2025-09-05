// Comprehensive menu structure for Dr. Jan Duffy Real Estate website

export const menuStructure = {
  main: [
    {
      name: 'Home',
      href: '/',
      description: 'Welcome to Dr. Jan Duffy Real Estate',
      icon: '🏠'
    },
    {
      name: 'Properties',
      href: '/properties',
      description: 'Browse all properties',
      icon: '🏘️',
      hasDropdown: true
    },
    {
      name: 'Home Value',
      href: '/home-value',
      description: 'Get your home valuation',
      icon: '💰'
    },
    {
      name: 'Rentals',
      href: '/rentals',
      description: 'Find rental properties',
      icon: '🔑'
    },
    {
      name: 'About',
      href: '/about',
      description: 'Learn about Dr. Jan Duffy',
      icon: '👩‍💼'
    },
    {
      name: 'Contact',
      href: '/contact',
      description: 'Get in touch with us',
      icon: '📞'
    }
  ],
  
  properties: {
    title: 'Property Search',
    description: 'Find your perfect home',
    sections: [
      {
        title: 'Browse Properties',
        items: [
          {
            name: 'All Properties',
            href: '/properties',
            description: 'View all available properties',
            icon: '🏘️'
          },
          {
            name: 'Grid View',
            href: '/listings-embedded',
            description: 'Properties in grid layout',
            icon: '⊞'
          },
          {
            name: 'List View',
            href: '/listings-list',
            description: 'Properties in list format',
            icon: '☰'
          },
          {
            name: 'Past Sales',
            href: '/past-sales',
            description: 'Recently sold properties',
            icon: '📈'
          }
        ]
      },
      {
        title: 'Property Types',
        items: [
          {
            name: 'Single Family',
            href: '/properties?type=single-family',
            description: 'Detached homes',
            icon: '🏡'
          },
          {
            name: 'Condos',
            href: '/properties?type=condo',
            description: 'Condominiums',
            icon: '🏢'
          },
          {
            name: 'Townhomes',
            href: '/properties?type=townhome',
            description: 'Attached homes',
            icon: '🏘️'
          },
          {
            name: 'Luxury Homes',
            href: '/properties?type=luxury',
            description: 'High-end properties',
            icon: '🏰'
          }
        ]
      }
    ]
  },
  
  quickLinks: [
    {
      name: 'Market Analysis',
      href: '/home-value',
      description: 'Get your home valued',
      icon: '📊',
      category: 'Tools'
    },
    {
      name: 'Investment Properties',
      href: '/properties?type=investment',
      description: 'Real estate investments',
      icon: '🏢',
      category: 'Properties'
    },
    {
      name: 'First Time Buyers',
      href: '/about#first-time-buyers',
      description: 'Buying your first home',
      icon: '🔑',
      category: 'Services'
    },
    {
      name: 'Relocation Services',
      href: '/about#relocation',
      description: 'Moving to Las Vegas',
      icon: '✈️',
      category: 'Services'
    },
    {
      name: 'Market Reports',
      href: '/about#market-reports',
      description: 'Las Vegas market data',
      icon: '📈',
      category: 'Resources'
    },
    {
      name: 'Testimonials',
      href: '/about#testimonials',
      description: 'Client success stories',
      icon: '⭐',
      category: 'About'
    }
  ],
  
  neighborhoods: [
    {
      name: 'Summerlin',
      href: '/properties?neighborhood=summerlin',
      description: 'Master-planned community',
      icon: '🌴'
    },
    {
      name: 'Henderson',
      href: '/properties?neighborhood=henderson',
      description: 'Family-friendly area',
      icon: '🏞️'
    },
    {
      name: 'Green Valley',
      href: '/properties?neighborhood=green-valley',
      description: 'Established neighborhood',
      icon: '🌳'
    },
    {
      name: 'Anthem',
      href: '/properties?neighborhood=anthem',
      description: 'Gated community',
      icon: '🏰'
    },
    {
      name: 'Centennial Hills',
      href: '/properties?neighborhood=centennial-hills',
      description: 'Northwest Las Vegas',
      icon: '⛰️'
    },
    {
      name: 'Spring Valley',
      href: '/properties?neighborhood=spring-valley',
      description: 'Convenient location',
      icon: '🌸'
    }
  ],
  
  services: [
    {
      name: 'Home Buying',
      href: '/about#home-buying',
      description: 'Expert guidance for buyers',
      icon: '🏠'
    },
    {
      name: 'Home Selling',
      href: '/about#home-selling',
      description: 'Maximize your home value',
      icon: '💼'
    },
    {
      name: 'Market Analysis',
      href: '/home-value',
      description: 'Professional home valuation',
      icon: '📊'
    },
    {
      name: 'Investment Consulting',
      href: '/about#investment',
      description: 'Real estate investment advice',
      icon: '📈'
    }
  ],
  
  contact: [
    {
      name: 'Call Now',
      href: 'tel:+17025551234',
      description: '(702) 555-1234',
      icon: '📞',
      isPrimary: true
    },
    {
      name: 'Email',
      href: 'mailto:jan@drjanduffy.com',
      description: 'jan@drjanduffy.com',
      icon: '✉️'
    },
    {
      name: 'Schedule Consultation',
      href: '/contact',
      description: 'Free consultation',
      icon: '📅'
    }
  ]
};

// Search suggestions for the search functionality
export const searchSuggestions = [
  'Summerlin homes',
  'Henderson condos',
  '3 bedroom house',
  'Pool home',
  'Investment property',
  'Luxury home',
  'First time buyer',
  'Market analysis',
  'Home value',
  'Rental property'
];

// Price ranges for property search
export const priceRanges = [
  { label: 'Under $300K', value: '0-300000' },
  { label: '$300K - $500K', value: '300000-500000' },
  { label: '$500K - $750K', value: '500000-750000' },
  { label: '$750K - $1M', value: '750000-1000000' },
  { label: 'Over $1M', value: '1000000-999999999' }
];

// Property features for search
export const propertyFeatures = [
  'Pool',
  'Garage',
  'Fireplace',
  'Updated Kitchen',
  'Hardwood Floors',
  'Granite Countertops',
  'Stainless Appliances',
  'Walk-in Closet',
  'Master Suite',
  'Open Floor Plan'
];
