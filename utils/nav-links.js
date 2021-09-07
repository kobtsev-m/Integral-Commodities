import slugify from 'react-slugify';
import { getTransValue } from './i18n';

export const getDesktopLinks = (t) => [
  {
    type: 'link',
    link: t('common:homeLink'),
    name: 'Home',
    depth: 0,
    isShow: true
  },
  {
    type: 'toggle',
    isToggled: false,
    name: 'Polymers',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/products/polymers?type=HDPE',
    name: 'HDPE',
    depth: 1,
    isShow: false
  },
  {
    type: 'link',
    link: '/products/polymers?type=PP',
    name: 'PP',
    depth: 1,
    isShow: false
  },
  {
    type: 'link',
    link: '/products/polymers?type=LDPE',
    name: 'LDPE',
    depth: 1,
    isShow: false
  },
  {
    type: 'link',
    link: '/products/polymers?type=LLDPE',
    name: 'LLDPE',
    depth: 1,
    isShow: false
  },
  {
    type: 'toggle',
    link: '/products/fertilizers',
    name: 'Fertilizers',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/products/sulphur',
    name: 'Sulphur',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/about-us',
    name: 'About us',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/Order',
    name: 'Order process',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/about-us#futures',
    name: 'Services',
    depth: 0,
    isShow: true
  },
  {
    type: 'link',
    link: '/partners',
    name: 'Partners',
    depth: 0,
    isShow: true
  }
];

export const getMobileLinks = (t) => [
  {
    label: 'Home',
    link: t('common:homeLink')
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
      },
      {
        label: 'LLDPE',
        link: '/products/polymers?type=LLDPE'
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

export const slugifyLink = (t, product) => {
  const { id, grade } = product;
  const gradeT = getTransValue(t, ['common:filter', 'grade'], grade);
  if (gradeT === 'Sulphur' && id === 12) {
    return 'sulphur-1';
  } else if (gradeT === 'Sulphur' && id === 39) {
    return 'sulphur-2';
  }
  return slugify(gradeT);
};
