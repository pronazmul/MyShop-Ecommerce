const Users = [
  {
    name: 'Nazmul Huda',
    password: 'Password@1234',
    email: 'nazmul@gmail.com',
    mobile: '01746000000',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/58470993',
  },
  {
    name: 'Sumit Saha',
    password: 'Password@1234',
    email: 'sumit@gmail.com',
    mobile: '01746000001',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
  },
  {
    name: 'Jhanker Mahabub',
    password: 'Password@1234',
    email: 'jhankar@gmail.com',
    mobile: '01746000002',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/53802153?v=4',
  },
  {
    name: 'Brad Traversy',
    password: 'Password@1234',
    email: 'traversy@gmail.com',
    mobile: '01746000003',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
  },
  {
    name: 'Fayzul Karim',
    password: 'Password@1234',
    email: 'fayzul@gmail.com',
    mobile: '01746000004',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/497812?v=4',
  },
  {
    name: 'Sunny Sungha',
    password: 'Password@1234',
    email: 'sunny@gmail.com',
    mobile: '01746000005',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/24712956?v=4',
  },
  {
    name: 'Adrian Twrag',
    password: 'Password@1234',
    email: 'adrian@gmail.com',
    mobile: '01746000006',
    roles: ['user'],
    avatar: 'https://avatars.githubusercontent.com/u/22957728?v=4',
  },
  {
    name: 'Tanvir Hasan',
    password: 'Password@1234',
    email: 'tanvir@gmail.com',
    mobile: '01746000007',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/2250509?v=4',
  },
  {
    name: 'Hasin Hayder',
    password: 'Password@1234',
    email: 'hasin@gmail.com',
    mobile: '01746000008',
    roles: ['user'],
    avatar: 'https://avatars.githubusercontent.com/u/490779?v=4',
  },
]

const Addresses = [
  {
    addressLine: 'Gulshan 2',
    postCode: '1307',
    city: 'Gulshan',
    country: 'Bangladesh',
  },
  {
    addressLine: 'Banani',
    postCode: '1203',
    city: 'Mohakhali',
    country: 'Bangladesh',
  },
  {
    addressLine: 'Taltola, Mirpur Road',
    postCode: '1204',
    city: 'Mirpur',
    country: 'Bangladesh',
  },
  {
    addressLine: 'BCS Computer City',
    postCode: '1207',
    city: 'Agargaon',
    country: 'Bangladesh',
  },
  {
    addressLine: 'Elephant Road, Motaleb Plaza',
    postCode: '1557',
    city: 'Dhanmondi',
    country: 'Bangladesh',
  },
]

const Products = [
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
    name: 'Men’s Casual T-Shirt',

    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 599.0,
    discount: 50,
    taxRate: 5,
    countInStock: 7,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/QHcYKjP/Blue-Cotton-Polo-Shirt-768x768.webp',
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
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/vvCq2zS/IMG-5202-3-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Gray Black Jeans Pant',

    description:
      'Men’s Cotton Casual Pant Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 999.0,
    discount: 200,
    taxRate: 6,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/jTYSxj5/IMG-5230-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Off White Grammen Full Shirt',
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 1199.0,
    discount: 300,
    taxRate: 8,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/Z6xMz5x/IMG-5246-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Yellow Full Sleve Shirt',
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 1499.0,
    discount: 300,
    taxRate: 5,
    countInStock: 7,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/VVKnN7p/IMG-5275-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'White Flower Sleve Shirt',
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 1299.0,
    discount: 300,
    taxRate: 10,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/f4p9Gkh/IMG-5280-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Cotton Full Sleve Shirt',
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 999.0,
    discount: 100,
    taxRate: 4,
    countInStock: 8,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/cLbXzTG/IMG-5304-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
  },
  {
    name: 'Black flower Full Sleve Shirt',
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 799.0,
    discount: 20,
    taxRate: 2,
    countInStock: 7,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/HVP6BJN/IMG-5331-1-768x768.webp',
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
    countInStock: 10,
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
    countInStock: 7,
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
    name: 'Ladies Jeans Pant',
    description:
      'Ladies Cotton Casual Pant Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 999.0,
    discount: 200,
    taxRate: 5,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/q1D3HP5/IMG-5589-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladies Black Tops',
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 1199.0,
    discount: 200,
    taxRate: 8,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/ZT7ZZxC/IMG-5597-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Western Ladies Jeans Pant',
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    tags: [],
    price: 1499.0,
    discount: 300,
    taxRate: 5,
    countInStock: 7,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/mcb4yrT/IMG-5614-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladis Full Sleve Top',
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    tags: [],
    price: 1299.0,
    discount: 100,
    taxRate: 1,
    countInStock: 10,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/RSWfZpY/IMG-5621-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
  },
  {
    name: 'Ladies Kurti',
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    tags: [],
    price: 999.0,
    discount: 0,
    taxRate: 3,
    countInStock: 8,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/0VS1P18/IMG-5639-768x768.webp',
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
    countInStock: 7,
    rating: 0,
    reviewsCount: 0,
    images: [
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
      'https://i.ibb.co/0VS1P18/IMG-5639-768x768.webp',
    ],
  },
]

const Reviews = [
  {
    comment: 'Awesome Product',
    rating: 5,
  },
  {
    comment: 'Midium Quality',
    rating: 3.5,
  },
  {
    comment: 'Too Bad',
    rating: 1.5,
  },
  {
    comment: 'Bad Quality',
    rating: 2.5,
  },
  {
    comment: 'Excillent Product',
    rating: 5,
  },
  {
    comment: 'Good, Need to Improve',
    rating: 4,
  },
]

const Suppliers = [
  {
    name: 'Rite Solutions Ltd',
    contractName: 'Mr Alif Ur Rahman',
    mobile: '01769001111',
  },
  {
    name: 'Privilage Private Ltd',
    contractName: 'Md Fakar Uddin',
    mobile: '01769001112',
  },
  {
    name: 'Gloal Limited',
    contractName: 'Rashadul Islam',
    mobile: '01769001113',
  },
  {
    name: 'Rayans Computer Limited',
    contractName: 'Mr Zakir Hossain',
    mobile: '01769001114',
  },
  {
    name: 'Star Tech Solutions Limited',
    contractName: 'Mr Habibur Rahman',
    mobile: '01769001115',
  },
]

const Shippers = [
  {
    name: 'Sundarbhan Currier',
    contractName: 'Mr. Latifur Rahman',
    mobile: '01769001111',
  },
  {
    name: 'SA Paribahan',
    contractName: 'Mr. Hasanuzzman',
    mobile: '01769001112',
  },
  {
    name: 'Continental Currier',
    contractName: 'Mr. Khaled Mahamud',
    mobile: '01769001113',
  },
]

const Categories = [
  {
    image: 'https://i.ibb.co/k69zWhN/mens-1.jpg',
    category: 'Men',
    tags: ['Panjabi', 'Shirt', 'T-Shirt', 'Polo', 'Pant'],
  },
  {
    image: 'https://i.ibb.co/3c5MTfJ/womens.png',
    category: 'Women',
    tags: ['Tops', 'Borka', 'Gown', 'Sharee', 'Lehenga'],
  },
  {
    image: 'https://i.ibb.co/sC8qsmf/kids.jpg',
    category: 'Kids',
    tags: ['kids-polo', 'kids-shirt', 'kids-top'],
  },
  {
    image: 'https://i.ibb.co/8YRbT7n/accessories.jpg',
    category: 'Accessories',
    tags: ['wallet', 'belt', 'glass', 'Watch', 'Tie'],
  },
  {
    image: 'https://i.ibb.co/YLnJJBV/cosmetics.jpg',
    category: 'Cosmetics',
    tags: ['Nectar', 'Clutch', 'Genesis', 'Joyeaux'],
  },
  {
    image: 'https://i.ibb.co/LvzQjyd/shoes.jpg',
    category: 'Shoes',
    tags: ['dress shoes', 'sandals', 'boots', 'athletic shoes'],
  },
]

https: module.exports = {
  Users,
  Addresses,
  Products,
  Reviews,
  Suppliers,
  Shippers,
  Categories,
}
