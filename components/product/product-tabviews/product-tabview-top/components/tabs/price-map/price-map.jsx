import { useState, useCallback, memo } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { getLatLng } from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { mapContainerStyle, mapMarkerStyle } from './settings/base-settings';
import { mapCenter, mapZoom, mapOptions } from './settings/base-settings';
import { mapGlobalStyles } from './settings/styles';
import PlacesSearch from 'components/other-blocks/places-search/places-search';

import { Global } from '@emotion/react';
import cn from 'classnames';
import styles from './price-map.module.css';

function PriceMap(props) {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activePlace, setActivePlace] = useState(null);

  const handleLoad = useCallback((currentMap) => {
    setMap(currentMap);
  }, []);

  const handleUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handlePlaceSelect = async (geocode) => {
    const { lat, lng } = await getLatLng(geocode);
    map.panTo({ lat, lng });
    map.setZoom(mapZoom + 3);
    setSelectedPlace({ name: geocode.formatted_address, lat, lng });
    setActivePlace({ name: geocode.formatted_address, lat, lng });
  };

  const handlePlaceClear = () => {
    map.panTo(mapCenter);
    map.setZoom(mapZoom);
    setSelectedPlace(null);
    setActivePlace(null);
  };

  const handleAskForQuoteClick = () => {
    props.onAskForQuote({ place_of_delivery: activePlace.name });
  };

  return (
    <>
      <Global styles={mapGlobalStyles} />
      <div className={styles.container}>
        <PriceMapHeader
          handlePlaceSelect={handlePlaceSelect}
          handlePlaceClear={handlePlaceClear}
        />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={mapZoom}
          options={mapOptions}
          onLoad={handleLoad}
          onUnmount={handleUnmount}
        >
          {props.ports.length &&
            props.ports.map((port, i) => (
              <Marker
                key={i}
                position={{ lat: port.lat, lng: port.lng }}
                icon={{ url: '/' }}
                label={{
                  text: `$${port.price}`,
                  color: port === activePlace ? '#F66E08' : '#02569C',
                  ...mapMarkerStyle
                }}
                onClick={() => setActivePlace(port)}
              />
            ))}
          {selectedPlace && (
            <Marker
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
              zIndex={1000}
              onClick={() => setActivePlace(selectedPlace)}
            />
          )}
          {activePlace && (
            <InfoWindow
              position={{ lat: activePlace.lat, lng: activePlace.lng }}
              options={{
                pixelOffset: new window.google.maps.Size(154, 43)
              }}
              onCloseClick={() => setActivePlace(null)}
            >
              <div className={cn(styles.infoWindow, 'px-1')}>
                <p className={cn(styles.infoWindow__text, 'my-1')}>
                  <FontAwesomeIcon
                    className={styles.infoWindow__icon}
                    icon={faMapMarkerAlt}
                  />
                  <span className={'ms-1'}>{activePlace.name}</span>
                </p>
                {activePlace.incoterms && (
                  <p className={cn(styles.infoWindow__text, 'mb-1')}>
                    Incoterms: {activePlace.incoterms}
                  </p>
                )}
                <span
                  className={styles.infoWindow__link}
                  onClick={handleAskForQuoteClick}
                >
                  Ask for qoute
                </span>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </>
  );
}

function PriceMapHeader(props) {
  return (
    <div className={styles.mapHeader}>
      <div className={'row g-3 p-3'}>
        <div className={'col-6'}>
          <PlacesSearch
            placeholder={'Search on the map'}
            isRounded={true}
            onSelect={props.handlePlaceSelect}
            onClear={props.handlePlaceClear}
          />
        </div>
        <div className={'col-6 d-flex'}>
          <button
            className={cn(styles.mapHeader__button, styles.blue, 'btn me-3')}
          >
            Prices
          </button>
          <button
            className={cn(styles.mapHeader__button, styles.white, 'btn')}
          >
            Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PriceMap);
