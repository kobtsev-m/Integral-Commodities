import { useState, useRef } from 'react';

import cn from 'classnames';
import stylesUI from 'components/ui/custom-ui.module.css';

function ProductField(props) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(null);

  const searchInput = useRef();

  const refreshSuggestions = (newQuery) => {
    const filteredProducts = props.products.filter((product) =>
      product.grade.toLowerCase().includes(newQuery.toLowerCase())
    );
    const newSuggestions = filteredProducts.slice(0, 5).map((product) => ({
      id: product.id,
      mainText: product.grade,
      secondaryText: product.card_data[1].value
    }));
    setSuggestions(newSuggestions);
    setIsInputActive(!!newQuery && !!newSuggestions.length);
  };

  const handleChange = (newQuery) => {
    setQuery(newQuery);
    refreshSuggestions(newQuery);
  };

  const handleIconClick = () => {
    if (!isInputActive && !query) {
      searchInput.current.focus();
    } else {
      setQuery('');
      searchInput.current.value = '';
      props.onChange({ [props.name]: null });
    }
  };

  const handleBlur = () => {
    if (!activeSuggestion) {
      setQuery('');
      searchInput.current.value = '';
    } else if (activeSuggestion.mainText != query) {
      setQuery(activeSuggestion.mainText);
      searchInput.current.value = activeSuggestion.mainText;
    }
    setIsInputActive(false);
    props.onBlur(props.name);
  };

  const handleSelect = (suggestion) => {
    setActiveSuggestion(suggestion);
    searchInput.current.value = suggestion.mainText;
    props.onChange({ [props.name]: suggestion.id });
  };

  return (
    <div className={cn(stylesUI.search)}>
      <input
        ref={searchInput}
        placeholder={props.placeholder}
        className={cn(stylesUI.textInput, {
          [stylesUI.rounded]: props.isRounded,
          [stylesUI.changing]: isInputActive,
          [stylesUI.isInvalid]: !!props.errors[props.name]
        })}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e.target.value)}
      />
      {isInputActive && (
        <div
          className={cn(stylesUI.search__dropdown, {
            [stylesUI.rounded]: props.isRounded
          })}
        >
          <div className={stylesUI.search__dropdown__divider}></div>
          {suggestions.map((suggestion, i) => (
            <div
              key={i}
              className={cn(
                stylesUI.search__dropdown__item,
                stylesUI.hoverder
              )}
              onMouseDown={() => handleSelect(suggestion)}
            >
              {suggestion.mainText}{' '}
              <span className={stylesUI.search__secondaryText}>
                {suggestion.secondaryText}
              </span>
            </div>
          ))}
        </div>
      )}
      <div
        className={cn(stylesUI.search__icon, {
          [stylesUI.searchIcon]: !isInputActive && !query,
          [stylesUI.cancelIcon]: isInputActive || !!query
        })}
        onClick={handleIconClick}
      ></div>
    </div>
  );
}

export default ProductField;
