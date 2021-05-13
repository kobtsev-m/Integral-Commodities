import { memo } from 'react';
import { LoadScript } from '@react-google-maps/api';
import PlacesSearch from 'components/other-blocks/places-search/places-search';

function PlaceField(props) {
  const handleSelect = (geocode) => {
    props.onChange({ [props.name]: geocode.formatted_address });
  };

  const handleClear = () => {
    props.onChange({ [props.name]: '' });
  };

  return (
    <PlacesSearch onSelect={handleSelect} onClear={handleClear} {...props} />
  );
}

export default memo(PlaceField);
