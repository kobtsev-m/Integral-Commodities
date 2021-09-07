import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import cn from 'classnames';
import stylesUI from 'components/ui/Form/CustomUI.module.css';

import { getFutureDate, getWeeksRangeList } from 'utils/date-utils';
import { calendarWeeksAfter } from '../../data/options';
import { capitalize } from 'utils/string-utils';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

function PeriodField(props) {
  const [datesRanges, setDatesRanges] = useState(props.defaultValue);
  const [weeks, setWeeks] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState({});
  const [isCustom, setIsCustom] = useState(false);
  const [selectMode, setSelectMode] = useState(false);

  const customCheckboxLabel = useRef();
  const calendarScrollbox = useRef();

  const { t, lang } = useTranslation();

  useEffect(() => {
    const weeksRangeList = getWeeksRangeList(calendarWeeksAfter);
    setWeeks(weeksRangeList);
  }, []);

  useEffect(() => {
    if (weeks.length) {
      const monthsOffsetList = getMonthsOffsetList(weeks);
      setMonths(monthsOffsetList);
      setCurrentMonth(monthsOffsetList[currentMonth?.id ?? 0]);
    }
  }, [weeks, lang]);

  useEffect(() => {
    customCheckboxLabel.current.innerHTML = t('calculator:data.custom item');
  }, [lang]);

  useEffect(() => {
    props.onChange({ [props.name]: datesRanges });
  }, [datesRanges]);

  const handleDefaultCheckboxClick = () => {
    setIsCustom(false);
    setSelectMode(false);
    setDatesRanges(props.defaultValue);
  };

  const handleCustomCheckboxClick = () => {
    setIsCustom(true);
    setSelectMode(true);
  };

  const handleCustomDateClick = (weekId) => {
    const newWeek = { ...weeks[weekId], selected: !weeks[weekId].selected };
    setWeeks(weeks.map((week) => (week.id === weekId ? newWeek : week)));
    if (newWeek.selected) {
      setSelectedWeeks([...selectedWeeks, newWeek]);
    } else {
      setSelectedWeeks(selectedWeeks.filter((week) => week.id !== weekId));
    }
  };

  const handleCustomChevronClick = (monthDiff) => {
    const isAbroad =
      (currentMonth.id === 0 && monthDiff === -1) ||
      (currentMonth.id === months.length - 1 && monthDiff === 1);
    if (!isAbroad) {
      const newMonth = months[currentMonth.id + monthDiff];
      const scrollH = calendarScrollbox.current.scrollHeight;
      calendarScrollbox.current.scrollTo(0, newMonth.offset * scrollH);
      setCurrentMonth(newMonth);
    }
  };

  const handleCustomScroll = () => {
    const scrollH = calendarScrollbox.current.scrollHeight;
    const scrollTop = calendarScrollbox.current.scrollTop;
    const currOffset = scrollTop / scrollH;
    if (months[currentMonth.id + 1]?.offset < currOffset) {
      setCurrentMonth(months[currentMonth.id + 1]);
    } else if (months[currentMonth.id - 1]?.offset >= currOffset) {
      setCurrentMonth(months[currentMonth.id - 1]);
    }
  };

  const handleCustomSubmitClick = () => {
    if (selectedWeeks.length) {
      let sortedWeeks = selectedWeeks.sort((week1, week2) =>
        week1.id < week2.id ? -1 : week1.id > week2.id ? 1 : 0
      );
      let newDatesRanges = sortedWeeks.reduce(
        (acc, week) => [...acc, [...week.range]],
        []
      );
      for (let i = newDatesRanges.length - 1; i > 0; --i) {
        const currStart = newDatesRanges[i][0];
        const prevEnd = newDatesRanges[i - 1][1];
        if (currStart.getDate() === getFutureDate(prevEnd, 1).getDate()) {
          newDatesRanges[i - 1][1] = newDatesRanges[i][1];
          newDatesRanges.splice(i, 1);
        }
      }
      let newCustomCheckboxLabel = newDatesRanges.reduce((acc, range) => {
        return acc + `${formatWeekDM(range)}<br/>`;
      }, '');
      customCheckboxLabel.current.innerHTML = newCustomCheckboxLabel;
      setDatesRanges(newDatesRanges);
      setSelectMode(false);
    } else {
      customCheckboxLabel.current.innerHTML = t('calculator:data.custom item');
      handleDefaultCheckboxClick();
    }
  };

  const getMonthName = (date) => {
    return capitalize(date.toLocaleString(lang, { month: 'long' }));
  };

  const getMonthsOffsetList = (weeks) => {
    let weekAttitude = 1 / weeks.length;
    let months = [];
    let currMonth = null;
    for (let i = 0; i < weeks.length; ++i) {
      if (currMonth !== weeks[i].range[1].getMonth()) {
        currMonth = weeks[i].range[1].getMonth();
        months.push({
          id: months.length,
          name: getMonthName(weeks[i].range[1]),
          year: weeks[i].range[1].getFullYear(),
          offset: i * weekAttitude
        });
      }
    }
    return months;
  };

  const formatWeekDM = (week) => {
    const day1 = `${week[0].getDate()} ${getMonthName(week[0])}`;
    const day2 = `${week[1].getDate()} ${getMonthName(week[1])}`;
    return `${day1} - ${day2}`;
  };

  return (
    <div className='row gx-2'>
      <div
        className={cn('col-12 col-lg-5', {
          'col-lg-12': props.isEmbed
        })}
      >
        <div>
          <input
            type='checkbox'
            className={stylesUI.checkboxInput}
            id={`${props.name}_default`}
            onChange={handleDefaultCheckboxClick}
            checked={!isCustom}
          />
          <label htmlFor={`${props.name}_default`}>
            <Trans i18nKey='calculator:options.8 weeks' />
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='checkbox'
            className={stylesUI.checkboxInput}
            id={`${props.name}_custom`}
            onChange={handleCustomCheckboxClick}
            checked={isCustom}
          />
          <label ref={customCheckboxLabel} htmlFor={`${props.name}_custom`}>
            <Trans i18nKey='calculator:options.custom item' />
          </label>
        </div>
      </div>
      {selectMode && (
        <div
          className={cn('col-12 col-lg-7 mt-3 mt-lg-0', {
            'col-lg-12 mt-lg-3': props.isEmbed
          })}
        >
          <div className={cn(stylesUI.calendar, 'py-2 px-3')}>
            <div className='d-flex align-items-center'>
              <div style={{ width: '1.5em' }}>
                <button
                  type='button'
                  className={cn(stylesUI.calendar__chevron, 'btn btn-sm')}
                  onClick={() => handleCustomChevronClick(-1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
              <div className='flex-fill d-flex justify-content-center px-2'>
                <span className='text-center'>
                  {`${currentMonth.name} ${currentMonth.year}`}
                </span>
              </div>
              <div style={{ width: '1.5em' }}>
                <button
                  type='button'
                  className={cn(stylesUI.calendar__chevron, 'btn btn-sm')}
                  onClick={() => handleCustomChevronClick(1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className='row g-0 mt-2'>
              {weeks && (
                <div
                  ref={calendarScrollbox}
                  className={stylesUI.calendar__scrollbox}
                  onScroll={handleCustomScroll}
                >
                  {weeks.map((week) => (
                    <div
                      key={week.id}
                      className={cn(stylesUI.calendar__item, {
                        [stylesUI.active]: week.selected
                      })}
                      onClick={() => handleCustomDateClick(week.id)}
                    >
                      {formatWeekDM(week.range)}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='row g-0 my-2'>
              <button
                type='button'
                className={cn(stylesUI.btn, stylesUI.orange)}
                onClick={handleCustomSubmitClick}
              >
                <Trans i18nKey='calculator:fields.done' />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeriodField;
