import { useState, useRef } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress } from "react-places-autocomplete";

import cn from "classnames";
import stylesUI from "components/ui/custom-ui.module.css";
import classes from "./places-search.module.css";

export function PlacesSearch(props) {
  const [address, setAddress] = useState(props.defaultValue ?? "");
  const [isInputActive, setIsInputActive] = useState(false);
  const searchInput = useRef();

  const handleChange = (newAddress) => {
    setAddress(newAddress);
    setIsInputActive(!!newAddress);
  };

  const handleIconClick = () => {
    if (!isInputActive && !address) {
      searchInput.current.focus();
    } else {
      setAddress("");
      props.onClear();
    }
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const handleSelect = async (queryValue) => {
    setAddress(queryValue);
    setIsInputActive(false);
    const geocodes = await geocodeByAddress(queryValue);
    props.onSelect(geocodes[0]);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onBlur={handleBlur}
      onSelect={handleSelect}
      onError={() => {}}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={cn(stylesUI.search, classes.root)}>
          <input
            {...getInputProps({
              ref: searchInput,
              placeholder: props.placeholder,
              className: cn(
                stylesUI.textInput,
                {
                  [stylesUI.rounded]: props.isRounded,
                  [stylesUI.changing]: isInputActive,
                },
                classes.input
              ),
              onBlur: handleBlur,
            })}
          />
          <div
            className={cn(stylesUI.search__dropdown, {
              [stylesUI.rounded]: props.isRounded,
            })}
          >
            {isInputActive && (
              <div className={stylesUI.search__dropdown__divider}></div>
            )}
            {loading && (
              <div className={stylesUI.search__dropdown__loading}>
                Loading...
              </div>
            )}
            {suggestions.map((suggestion, i) => {
              const className = suggestion.active
                ? cn(stylesUI.search__dropdown__item, stylesUI.active)
                : stylesUI.search__dropdown__item;
              return (
                <div
                  key={i}
                  {...getSuggestionItemProps(suggestion, { className })}
                >
                  {suggestion.formattedSuggestion.mainText}{" "}
                  <span className={stylesUI.search__secondaryText}>
                    {suggestion.formattedSuggestion.secondaryText}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className={cn(stylesUI.search__icon, {
              [stylesUI.searchIcon]: !isInputActive && !address,
              [stylesUI.cancelIcon]: isInputActive || !!address,
            })}
            onClick={handleIconClick}
          ></div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default PlacesSearch;
