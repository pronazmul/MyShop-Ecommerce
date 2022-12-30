export const sidebarTree = [
  {
    key: 1,
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    link: 'dashboard',
  },

  {
    key: 3,
    label: 'Products',
    icon: 'fas fa-shopping-cart',
    link: '#',
    children: [
      {
        key: 3.1,
        label: 'All Products',
        link: 'all_products',
      },
      {
        key: 3.2,
        label: 'Add Products',
        link: 'add_products',
      },
    ],
  },
  {
    key: 2,
    label: 'Categories',
    icon: 'fas fa-list',
    link: '#',
    children: [
      {
        key: 2.1,
        label: 'All Categories',
        link: 'all_categories',
      },
      {
        key: 2.2,
        label: 'Add Category',
        link: 'add_categories',
      },
    ],
  },
  {
    key: 4,
    label: 'Orders',
    icon: 'fas fa-gift',
    link: '#',
    children: [
      {
        key: 4.1,
        label: 'All Orders',
        link: 'all_orders',
      },
      {
        key: 4.2,
        label: 'Cancelled Orders',
        link: 'cancelled_orders',
      },
      {
        key: 4.3,
        label: 'Pending Orders',
        link: 'pending_orders',
      },
    ],
  },
  {
    key: 5,
    label: 'Users',
    icon: 'fas fa-user-tie',
    link: '#',
    children: [
      {
        key: 5.1,
        label: 'All Users',
        link: 'all_users',
      },
      {
        key: 5.2,
        label: 'Add User',
        link: 'add_user',
      },
    ],
  },
  {
    key: 6,
    label: 'Customers',
    icon: 'fas fa-users',
    link: '#',
    children: [
      {
        key: 6.1,
        label: 'All Customers',
        link: 'all_customers',
      },
      {
        key: 6.2,
        label: 'Customers Reviews',
        link: 'customers_review',
      },
    ],
  },
  {
    key: 7,
    label: 'Profile',
    icon: 'fas fa-user-tie',
    link: 'profile',
    children: [
      {
        key: 7.1,
        label: 'Update Profile',
        icon: 'fa-regular fa-user',
        link: 'update_profile',
      },
      {
        key: 7.2,
        label: 'Change Password',
        icon: 'fas fa-key',
        link: 'update_password',
      },
      {
        key: 7.3,
        label: 'Linked Devices',
        icon: 'fas fa-desktop',
        link: 'linked_devices',
      },
    ],
  },
  {
    key: 8,
    label: 'Logout',
    icon: 'fas fa-power-off',
    link: 'logout',
  },
]
export const profileTree = [
  {
    key: 1,
    label: 'Update Profile',
    icon: 'fa-regular fa-user',
    link: 'update_profile',
  },
  {
    key: 2,
    label: 'Change Password',
    icon: 'fas fa-key',
    link: 'update_password',
  },
  {
    key: 3,
    label: 'Linked Devices',
    icon: 'fas fa-desktop',
    link: 'linked_devices',
  },
  {
    key: 4,
    label: 'Logout',
    icon: 'fas fa-power-off',
    link: 'logout',
  },
]
export const demoUsers = [
  {
    _id: '634adf6dca4c597f21539ef4',
    name: 'Jhanker Mahabub',
    email: 'jhankar-mahabub@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/53802153?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee8',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef7',
    name: 'Sunny Sungha',
    email: 'sunny@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/24712956?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee8',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef5',
    name: 'Brad Traversy',
    email: 'traversy@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee9',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef3',
    name: 'Sumit Saha',
    email: 'sumit-saha@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee9',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539efa',
    name: 'Hasin Hayder',
    email: 'hasin@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/490779?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee6',
        addressLine: 'Gulshan 2',
        postCode: '1307',
        city: 'Gulshan',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef6',
    name: 'Fayzul Karim',
    email: 'fayzul@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/497812?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee6',
        addressLine: 'Gulshan 2',
        postCode: '1307',
        city: 'Gulshan',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef2',
    name: 'Nazmul Huda',
    email: 'nazmul@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/58470993',
    address: [
      {
        _id: '634adf6dca4c597f21539ee7',
        addressLine: 'Banani',
        postCode: '1203',
        city: 'Mohakhali',
        country: 'Bangladesh',
      },
    ],
    roles: ['admin'],
  },
  {
    _id: '634adf6eca4c597f21539f0c',
    name: 'Jhanker Mahabub',
    email: 'jhankar-mahabub@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/53802153?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eef',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f0b',
    name: 'Sumit Saha',
    email: 'sumit-saha@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eef',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef8',
    name: 'Adrian Twrag',
    email: 'adrian@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/22957728?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee8',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f0d',
    name: 'Brad Traversy',
    email: 'traversy@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eee',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6dca4c597f21539ef9',
    name: 'Tanvir Hasan',
    email: 'tanvir@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/2250509?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539ee9',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f0a',
    name: 'Nazmul Huda',
    email: 'nazmul@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/58470993',
    address: [
      {
        _id: '634adf6dca4c597f21539eef',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f0e',
    name: 'Fayzul Karim',
    email: 'fayzul@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/497812?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eef',
        addressLine: 'BCS Computer City',
        postCode: '1207',
        city: 'Agargaon',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f10',
    name: 'Adrian Twrag',
    email: 'adrian@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/22957728?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eee',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f0f',
    name: 'Sunny Sungha',
    email: 'sunny@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/24712956?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eed',
        addressLine: 'Banani',
        postCode: '1203',
        city: 'Mohakhali',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f12',
    name: 'Hasin Hayder',
    email: 'hasin@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/490779?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eec',
        addressLine: 'Gulshan 2',
        postCode: '1307',
        city: 'Gulshan',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
  {
    _id: '634adf6eca4c597f21539f11',
    name: 'Tanvir Hasan',
    email: 'tanvir@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/2250509?v=4',
    address: [
      {
        _id: '634adf6dca4c597f21539eee',
        addressLine: 'Taltola, Mirpur Road',
        postCode: '1204',
        city: 'Mirpur',
        country: 'Bangladesh',
      },
    ],
    roles: ['user'],
  },
]
export const dashboardDemoAmounts = [
  {
    title: 'Revenue',
    amount: '$21827.13',
    range: 'vs 3 months prior to 26 sep',
    percentage: 11.4,
  },
  {
    title: 'Orders',
    amount: '1,758',
    range: 'vs 3 months prior to 26 sep',
    percentage: -3.2,
  },
  {
    title: 'Purchases',
    amount: '$7,249.31',
    range: 'vs 3 months prior to 26 sep',
    percentage: 5.7,
  },
]
export const latestOrdersDemo = [
  {
    order: '#123',
    status: 'paid',
    date: Date.now() - 10000,
    customer: 'Habibur Rahman',
    total: '$400.00',
  },
  {
    order: '#345',
    status: 'paid',
    date: Date.now() - 30000,
    customer: 'Moshiur Rahman',
    total: '$60.00',
  },
  {
    order: '#986',
    status: 'pending',
    date: Date.now() - 90000,
    customer: 'Ahmed Jubayer',
    total: '$90.00',
  },
  {
    order: '#124',
    status: 'failed',
    date: Date.now() - 40000,
    customer: 'Fayez Ahmed',
    total: '$80.00',
  },
  {
    order: '#431',
    status: 'paid',
    date: Date.now() - 50000,
    customer: 'Abdulla Mamun',
    total: '$180.00',
  },
  {
    order: '#845',
    status: 'failed',
    date: Date.now() - 60000,
    customer: 'Hasin Hyder',
    total: '$18.00',
  },
  {
    order: '#423',
    status: 'paid',
    date: Date.now() - 70000,
    customer: 'Hafizul Islam',
    total: '$88.00',
  },
]
export const topSellingDemo = [
  {
    image: 'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    product: 'Polo Shirt',
    quantity: '120',
  },
  {
    image: 'https://i.ibb.co/vvCq2zS/IMG-5202-3-768x768.webp',
    product: 'Full Sleve Shirt',
    quantity: '110',
  },
  {
    image: 'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    product: 'Grammen Full Shirt',
    quantity: '97',
  },
  {
    image: 'https://i.ibb.co/vvCq2zS/IMG-5202-3-768x768.webp',
    product: 'Casual Shirt',
    quantity: '70',
  },
  {
    image: 'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    product: 'Denim Shirt',
    quantity: '30',
  },
  {
    image: 'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    product: 'Black T Shirt',
    quantity: '5',
  },
]
export const ProductListDemo = [
  {
    name: 'Men’s Polo Shirt',
    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 499.0,
    discount: 20,
    taxRate: 5,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/yh23SQ0/Cotton-Polo-Shirt-2-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Tipping Collar Polo shirt',
    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 399.0,
    discount: 20,
    taxRate: 2,
    countInStock: 5,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/KxHMZJV/Cotton-Polo-Shirt-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Casual Full Sleve Shirt',

    description:
      'Men’s Cotton Casual Full-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 499.0,
    discount: 60,
    taxRate: 4,
    countInStock: 50,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/vvCq2zS/IMG-5202-3-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },

  // Ladies
  {
    name: 'Ladies Jeans Pant',
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 499.0,
    discount: 40,
    taxRate: 2,
    countInStock: 0,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/zN7wkVL/IMG-5192-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladies Kurti',
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 399.0,
    discount: 30,
    taxRate: 5,
    countInStock: 5,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/fvH9R4Z/IMG-5366-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladies Mid Length Tops',
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 599.0,
    discount: 50,
    taxRate: 5,
    countInStock: 48,
    rating: 0,
    reviewsCount: 0,
    images: ['https://i.ibb.co/sKX8Xd2/IMG-5457-scaled.jpg'],
  },
  {
    name: 'Ladies Western Length Tops',
    description:
      'Ladies Cotton Casual Full-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 499.0,
    discount: 40,
    taxRate: 6,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/f1kpH0M/IMG-5529-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladies Mid Length Set',
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 799.0,
    discount: 50,
    taxRate: 2,
    countInStock: 3,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
      'https://i.ibb.co/0VS1P18/IMG-5639-768x768.webp',
    ],
  },
]

//
export const categoriesDemo = [
  {
    children: ['Cakes', 'Biscuits'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022839',
    parent: 'Biscuits & Cakes',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/0jVF5Cmc/cookie.png',
  },
  {
    children: [
      'Cleaner',
      'Laundry',
      'Air Freshener',
      'Water Filter',
      'Pest Control',
      'Cleaning Tools',
    ],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022838',
    parent: 'Household Tools',
    type: 'Home Accessories',
    icon: 'https://i.ibb.co/rdY6zL0/cleaner.png',
  },
  {
    children: ['Baby Food', 'Baby Accessories'],
    status: 'Hide',
    _id: '6330a9cb0c00bd8a2c022837',
    parent: 'Baby Care',
    type: 'Health Care',
    icon: 'https://i.postimg.cc/QNqrnQBB/baby.png',
  },
  {
    children: ['Cat Care', 'Dog Care', 'Bird Care'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022836',
    parent: 'Pet Care',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/RVVzrWfg/cat.png',
  },
  {
    children: [
      'Bath',
      'Cosmetics',
      'Oral Care',
      'Skin Care',
      'Body Care',
      'Shaving Needs',
    ],
    status: 'Hide',
    _id: '6330a9cb0c00bd8a2c022835',
    parent: 'Beauty & Health',
    type: 'Health Care',
    icon: 'https://i.postimg.cc/gjz1P7wx/beauty.png',
  },
  {
    children: ['Sports', 'Fitness'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022834',
    parent: 'Sports & Fitness',
    type: 'Sports & Fitness',
    icon: 'https://i.ibb.co/qNCvxT0/dumbbell.png',
  },
  {
    children: ['Fish', 'Meat'],
    status: 'Hide',
    _id: '6330a9cb0c00bd8a2c022845',
    parent: 'Fish & Meat',
    type: 'Grocery',
    icon: 'https://i.ibb.co/y0zXYj5/carp-fish.png',
  },
  {
    children: ['Tea', 'Water', 'Juice', 'Coffee', 'Energy Drinks'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022840',
    parent: 'Drinks',
    type: 'Grocery',
    icon: 'https://i.ibb.co/Dz8LKDX/soft-drink.png',
  },
  {
    children: ['Dairy', 'Ice Cream', 'Butter & Ghee'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283f',
    parent: 'Milk & Dairy',
    type: 'Grocery',
    icon: 'https://i.ibb.co/181Qpm8/milk.png',
  },
  {
    children: ['Organic Food'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283e',
    parent: 'Organic Food',
    type: 'Grocery',
    icon: 'https://i.ibb.co/xmGhNRF/apple.png',
  },
  {
    children: ['Honey'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283d',
    parent: 'Honey',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/65JSfy6H/honey-1.png',
  },
  {
    children: ['Sauces', 'Pickles & Condiments'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283c',
    parent: 'Sauces & Pickles',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/mk09xvk4/chili-sauce.png',
  },
  {
    children: ['Jam & Jelly'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283b',
    parent: 'Jam & Jelly',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png',
  },
  {
    children: ['Chocolate', 'Chips & Nuts', 'Canned Food'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c02283a',
    parent: 'Snacks & Instant',
    type: 'Grocery',
    icon: 'https://i.ibb.co/HT7c6VT/chips.png',
  },
  {
    children: ['Dry Fruits', 'Fresh Fruits', 'Fresh Vegetable'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022844',
    parent: 'Fruits & Vegetable',
    type: 'Grocery',
    icon: 'https://i.postimg.cc/RZ275n3f/cabbage.png',
  },
  {
    children: ['Fresh Seafood'],
    status: 'Hide',
    _id: '6330a9cb0c00bd8a2c022843',
    parent: 'Fresh Seafood',
    type: 'Grocery',
    icon: 'https://i.ibb.co/pfscwF4/shrimp.png',
  },
  {
    children: ['Oil', 'Rice', 'Flour', 'Dry Vegetable', 'Spices & Mixes'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022842',
    parent: 'Cooking Essentials',
    type: 'Grocery',
    icon: 'https://i.ibb.co/hBv30Rt/frying-pan.png',
  },
  {
    children: ['Bread', 'Cereal'],
    status: 'Show',
    _id: '6330a9cb0c00bd8a2c022841',
    parent: 'Breakfast',
    type: 'Grocery',
    icon: 'https://i.ibb.co/dgPzSt7/bagel.png',
  },
]

//
export const statusColor = {
  paid: 'success',
  pending: 'warning',
  failed: 'error',
}
// Product Image Upload Configuration file
export const productImageConfig = {
  title: 'Drop files here or Click to browse',
  accept: 'image/png, image/jpg, image/jpeg',
  maxFiles: 4,
  maxFileSize: 2048000,
}
