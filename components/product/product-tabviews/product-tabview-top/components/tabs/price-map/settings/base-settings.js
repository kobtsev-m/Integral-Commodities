import { mapStyles } from './styles';

export const mapContainerStyle = {
  width: '100%',
  height: '700px'
};

export const mapCenter = {
  lat: 43,
  lng: 52
};

export const mapZoom = 3;

export const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

export const mapMarkerStyle = {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '22px',
  lineHeight: '27px'
};
