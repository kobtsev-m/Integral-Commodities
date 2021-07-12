export const pageview = (url) => {
  const GA_TRACKING_ID = 'G-K82BJL8YFZ';
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
