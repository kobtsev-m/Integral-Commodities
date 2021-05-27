import { useState, useCallback, memo } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { getLatLng } from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';

import { capitalize } from 'utils/string-utils';
import { mapContainerStyle } from './settings/base-settings';
import { mapCenter, mapZoom, mapOptions } from './settings/base-settings';
import { mapGlobalStyles, getMarkerFields } from './settings/styles';
import PlacesSearch from 'components/other-blocks/places-search/places-search';

import { Global } from '@emotion/react';
import cn from 'classnames';
import styles from './price-map.module.css';

const MAP_FILTERS = ['prices', 'availability'];

function PriceMap({ ports, factories, onAskForQuote }) {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activePlace, setActivePlace] = useState(null);
  const [activeFilter, setActiveFilter] = useState(MAP_FILTERS[0]);

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

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setActivePlace(null);
  };

  const handleAskForQuoteClick = () => {
    onAskForQuote({ place_of_delivery: activePlace.name });
  };

  return (
    <>
      <Global styles={mapGlobalStyles} />
      <div className={styles.container}>
        <PriceMapHeader
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
          onPlaceSelect={handlePlaceSelect}
          onPlaceClear={handlePlaceClear}
        />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={mapZoom}
          options={mapOptions}
          onLoad={handleLoad}
          onUnmount={handleUnmount}
        >
          {(activeFilter === 'availability' ? factories : ports)?.map(
            (place, i) => {
              if (!place.lat || !place.lng) {
                return null;
              }
              return (
                <Marker
                  key={i}
                  position={{ lat: place.lat, lng: place.lng }}
                  onClick={() => setActivePlace(place)}
                  {...getMarkerFields(place, activePlace, activeFilter)}
                />
              );
            }
          )}
          {selectedPlace && (
            <Marker
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
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
                {activeFilter !== 'availability' && (
                  <p className={cn(styles.infoWindow__text, 'mb-1')}>
                    Incoterms: {activePlace.incoterms}
                  </p>
                )}
                <span
                  className={styles.infoWindow__link}
                  onClick={handleAskForQuoteClick}
                >
                  Ask for quote
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
            onSelect={props.onPlaceSelect}
            onClear={props.onPlaceClear}
          />
        </div>
        <div className={'col-6 d-flex'}>
          {MAP_FILTERS.map((filter) => (
            <button
              key={nanoid()}
              className={cn('btn me-3', styles.mapHeader__button, {
                [styles.blue]: props.activeFilter === filter,
                [styles.white]: props.activeFilter !== filter
              })}
              onClick={() => props.onFilterClick(filter)}
            >
              {capitalize(filter)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(PriceMap);
