export const sidebarTree = [
  {
    key: '0',
    label: 'Documents',
    icon: 'fa fa-folder',
    title: 'Documents Folder',
    children: [
      {
        key: '0-0',
        label: 'Document 1-1',
        icon: 'fa fa-folder',
        title: 'Documents Folder',
        children: [
          {
            key: '0-1-1',
            label: 'Document-0-1.doc',
            icon: 'fa fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-2',
            label: 'Document-0-2.doc',
            icon: 'fa fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-3',
            label: 'Document-0-3.doc',
            icon: 'fa fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-4',
            label: 'Document-0-4.doc',
            icon: 'fa fa-file',
            title: 'Documents Folder',
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Desktop',
    icon: 'fa fa-desktop',
    title: 'Desktop Folder',
    children: [
      {
        key: '1-0',
        label: 'document1.doc',
        icon: 'fa fa-file',
        title: 'Documents Folder',
      },
      {
        key: '1-1',
        label: 'documennt-2.doc',
        icon: 'fa fa-file',
        title: 'Documents Folder',
      },
    ],
  },
  {
    key: '2',
    label: 'Downloads',
    icon: 'fa fa-download',
    title: 'Downloads Folder',
    children: [],
  },
]

export const demoTeams = [
  {
    name: 'design',
    color: 'pink',
    description: 'Hello there we are Design team',
    assigned: ['jhankar@gmail.com'],
    timestamp: 1664121488,
    id: 1,
  },
  {
    name: 'development',
    color: 'green',
    description: 'Hello there we are Development team',
    assigned: ['nazmul@gmail.com'],
    timestamp: 1664121513,
    id: 2,
  },
  {
    name: 'app',
    color: 'green',
    description: 'Hello there we are App Dev team',
    assigned: ['nazmul@gmail.com'],
    timestamp: 1664121537,
    id: 3,
  },
  {
    name: 'ux/ui',
    color: 'pink',
    description: 'Hello there we are App UX/UI team',
    assigned: ['nazmul@gmail.com'],
    timestamp: 1664121557,
    id: 4,
  },
]
