import { useState, useCallback, memo } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { getLatLng } from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { mapContainerStyle } from '../settings/base-settings';
import { mapCenter, mapZoom, mapOptions } from '../settings/base-settings';
import { mapGlobalStyles, getMarkerFields } from '../settings/styles';
import { getInfoWindowOffset, getInfoWindowSize } from '../settings/styles';
import PlacesSearch from 'components/organisms/Other/PlacesSearch/PlacesSearch';

import { Global } from '@emotion/react';
import cn from 'classnames';
import styles from './PriceMap.module.css';

const MAP_FILTERS = ['prices', 'availability'];

function PriceMap({ ports, factories, onAskForQuote }) {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activePlace, setActivePlace] = useState(null);
  const [activeFilter, setActiveFilter] = useState(MAP_FILTERS[0]);

  const { t } = useTranslation();

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
                  {...getMarkerFields(place, activePlace, activeFilter, t)}
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
              options={{ pixelOffset: getInfoWindowOffset(activePlace) }}
              onCloseClick={() => setActivePlace(null)}
            >
              <div className='px-1' style={getInfoWindowSize(activePlace)}>
                <p className={cn(styles.infoWindow__text, 'my-1')}>
                  <FontAwesomeIcon
                    className={styles.infoWindow__icon}
                    icon={faMapMarkerAlt}
                  />
                  <span className='ms-1'>{activePlace.name}</span>
                </p>
                {activeFilter !== 'availability' && activePlace.incoterms && (
                  <p className={cn(styles.infoWindow__text, 'mb-1')}>
                    <Trans i18nKey='calculator:fields.incoterms' />
                    {': '}
                    {activePlace.incoterms}
                  </p>
                )}
                <span
                  className={styles.infoWindow__link}
                  onClick={handleAskForQuoteClick}
                >
                  <Trans i18nKey='common:askForQuote.button' />
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
  const { t } = useTranslation();
  return (
    <div className={cn('row g-0', styles.mapHeader)}>
      <div className='col-12 col-md-6'>
        <PlacesSearch
          placeholder={t('calculator:fields.search place of delivery')}
          isRounded={true}
          onSelect={props.onPlaceSelect}
          onClear={props.onPlaceClear}
        />
      </div>
      <div className='col-12 col-md-6'>
        {MAP_FILTERS.map((filter, i) => (
          <button
            key={i}
            className={cn(styles.mapHeader__button, {
              [styles.blue]: props.activeFilter === filter,
              [styles.white]: props.activeFilter !== filter
            })}
            onClick={() => props.onFilterClick(filter)}
          >
            <Trans i18nKey={`product:tabs.${filter}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(PriceMap);
