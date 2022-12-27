export const sidebarTree = [
  {
    key: 1,
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    link: 'dashboard',
  },
  {
    key: 2,
    label: 'Products',
    icon: 'fas fa-shopping-cart',
    link: '#',
    children: [
      {
        key: 2.1,
        label: 'All Products',
        link: 'all_products',
      },
      {
        key: 2.2,
        label: 'Add Products',
        link: 'add_products',
      },
    ],
  },
  {
    key: 3,
    label: 'Orders',
    icon: 'fas fa-gift',
    link: '#',
    children: [
      {
        key: 3.1,
        label: 'All Orders',
        link: 'all_orders',
      },
      {
        key: 3.2,
        label: 'Cancelled Orders',
        link: 'cancelled_orders',
      },
      {
        key: 3.3,
        label: 'Pending Orders',
        link: 'pending_orders',
      },
    ],
  },
  {
    key: 4,
    label: 'Users',
    icon: 'fas fa-user-tie',
    link: '#',
    children: [
      {
        key: 4.1,
        label: 'All Users',
        link: 'all_users',
      },
      {
        key: 4.2,
        label: 'Add User',
        link: 'add_user',
      },
    ],
  },
  {
    key: 5,
    label: 'Customers',
    icon: 'fas fa-users',
    link: '#',
    children: [
      {
        key: 5.1,
        label: 'All Customers',
        link: 'all_customers',
      },
      {
        key: 5.2,
        label: 'Customers Reviews',
        link: 'customers_review',
      },
    ],
  },
  {
    key: 6,
    label: 'Profile',
    icon: 'fas fa-user-tie',
    link: 'profile',
    children: [
      {
        key: 6.1,
        label: 'Update Profile',
        icon: 'fa-regular fa-user',
        link: 'update_profile',
      },
      {
        key: 6.2,
        label: 'Change Password',
        icon: 'fas fa-key',
        link: 'update_password',
      },
      {
        key: 6.3,
        label: 'Linked Devices',
        icon: 'fas fa-desktop',
        link: 'linked_devices',
      },
    ],
  },
  {
    key: 7,
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
export const statusColor = {
  paid: 'success',
  pending: 'warning',
  failed: 'error',
}
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
