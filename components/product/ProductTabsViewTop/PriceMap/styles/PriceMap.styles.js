export const mapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#CAD2D3'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#9c9c9c'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: '50'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#D0D0CF'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#F2F2F1'
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#eeeeee'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#737474'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#CAD2D3'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#7b7b7b'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  }
];

export const mapGlobalStyles = {
  '.gm-style': {
    fontFamily: 'montserrat, arial, sans-serif'
  },
  '.gm-style-iw.gm-style-iw-c': {
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)'
  },
  '.gm-style .gm-style-iw-t::after': {
    position: 'absolute',
    top: '-45px !important',
    left: '-110px !important',
    transform: 'translateY(-50%) rotate(45deg)'
  },
  '.gm-style-iw-d': {
    width: '100%'
  },
  '.gm-ui-hover-effect:focus': {
    outline: 'none'
  }
};

const mapMarkerStyle = {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '22px',
  lineHeight: '27px',
  zIndex: -1
};

export const getMarkerFields = (place, activePlace, activeFilter, t) => {
  const markerColor = place === activePlace ? 'F66E08' : '02569C';
  const currency = t(`common:currency.${place.unit ?? 'default'}`);
  return activeFilter === 'availability'
    ? {
        icon: {
          url: `/images/ui/factory-icon-${markerColor}.svg`,
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(12, 26)
        }
      }
    : {
        icon: {
          url: '/'
        },
        label: {
          text: `${place.price}${currency}`,
          color: `#${markerColor}`,
          ...mapMarkerStyle
        }
      };
};

export const getInfoWindowOffset = (activePlace) => {
  const linesN = Math.ceil(activePlace.name.length / 22);
  const offsetY = linesN > 2 ? 40 : linesN > 1 ? 35 : 45;
  return new window.google.maps.Size(150, offsetY);
};

export const getInfoWindowSize = (activePlace) => {
  const linesN = Math.ceil(activePlace.name.length / 22);
  const height = linesN > 2 ? '100px' : linesN > 1 ? '85px' : '70px';
  return { width: '180px', height };
};
