import { memo } from 'react';
import PlacesSearch from 'components/blocks/Other/PlacesSearch/PlacesSearch';

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
