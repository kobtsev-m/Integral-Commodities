import slugify from 'react-slugify';

export const LINKS = [
  {
    label: 'Home',
    link: '/products/sulphur'
  },
  {
    label: 'Polymers',
    link: '/products/polymers',
    children: [
      {
        label: 'HDPE',
        link: '/products/polymers?type=HDPE'
      },
      {
        label: 'LDPE',
        link: '/products/polymers?type=LDPE'
      },
      {
        label: 'PP',
        link: '/products/polymers?type=PP'
      }
    ]
  },
  {
    label: 'Fertilizers',
    link: '/products/fertilizers'
  },
  {
    label: 'Sulphur',
    link: '/products/sulphur'
  },
  {
    label: 'About us',
    link: '/about-us'
  },
  {
    label: 'Order process',
    link: '/order/step-1'
  },
  {
    label: 'Services',
    link: '/about-us#futures',
    blancLink: true
  },
  {
    label: 'Partners',
    link: '/partners'
  }
];

export const slugifyLink = (product) => {
  if (product.grade === 'Sulphur' && product.id == 12) {
    return 'sulphur-1';
  } else if (product.grade === 'Sulphur' && product.id == 39) {
    return 'sulphur-2';
  }
  return slugify(product.grade);
};
