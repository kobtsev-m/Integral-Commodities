module.exports = {
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/products/[categoryName]': ['calculator'],
    '/products/[categoryName]/[productGrade]': ['product', 'calculator'],
    '/about-us': ['about'],
    '/partners': ['partners'],
    '/order/step-1': ['order'],
    '/order/step-2': ['order'],
    '/order/step-3': ['order'],
    '/order/step-4': ['order'],
    '/order/step-5': ['order']
  },
  logger: () => {}
};
