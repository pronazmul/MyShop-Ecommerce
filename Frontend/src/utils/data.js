export const sidebarTree = [
  {
    key: 1,
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    link: 'dashboard',
  },
  {
    key: 2,
    label: 'Manage Products',
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
      {
        key: 2.3,
        label: 'Out Of Stock',
        link: 'out_of_stock',
      },
    ],
  },
  {
    key: 3,
    label: 'Manage Orders',
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
    label: 'Manage User',
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
      {
        key: 4.3,
        label: 'Suspanded Users',
        link: 'suspanded_user',
      },
    ],
  },
  {
    key: 5,
    label: 'Manage Customers',
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
