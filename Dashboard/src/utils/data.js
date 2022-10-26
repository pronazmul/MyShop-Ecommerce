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
