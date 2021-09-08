import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import cn from 'classnames';
import styles from '../PriceCalculator.module.css';
import stylesUI from 'components/atoms/Form/CustomUI.module.css';

import CustomTextInput from 'components/atoms/Form/CustomTextInput';
import { contactMethods } from '../../data/options';
import useTranslation from 'next-translate/useTranslation';

function ContactsField(props) {
  const [contacts, setContacts] = useState(props.defaultValue);
  const [chosenMethods, setChosenMethods] = useState([]);
  const [editingMethod, setEditingMethod] = useState(null);
  const [editingMethodValue, setEditingMethodValue] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    props.onChange({ [props.name]: contacts });
  }, [contacts]);

  const handleChange = (newValue) => {
    setContacts({ ...contacts, ...newValue });
  };

  const handleBlur = (fieldName) => {
    props.onBlur(`contacts.${fieldName}`);
  };

  const addMethodToChosen = (methodName) => {
    if (!chosenMethods.includes(methodName)) {
      setChosenMethods([...chosenMethods, methodName]);
    }
  };

  const removeMethodFromChosen = (methodName) => {
    setChosenMethods(chosenMethods.filter((m) => m !== methodName));
  };

  const handleContanctClick = (methodName) => {
    if (chosenMethods.includes(methodName)) {
      removeMethodFromChosen(methodName);
    } else if (methodName === 'email') {
      addMethodToChosen(methodName);
      setEditingMethod(null);
    } else {
      setEditingMethod(methodName);
    }
  };

  const handleContactFormChange = (value) => {
    setEditingMethodValue(value[editingMethod]);
  };

  const handleContactFormClose = () => {
    setEditingMethod(null);
  };

  const handleContactFormSubmit = (methodName) => {
    if (!editingMethodValue) {
      return;
    }
    setContacts({ ...contacts, [methodName]: editingMethodValue });
    setEditingMethod(null);
    setEditingMethodValue('');
    addMethodToChosen(methodName);
  };

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <label>{t('calculator:fields.name')}</label>
          <CustomTextInput
            name='name'
            placeholder={t('calculator:fields.name example')}
            className='mt-2'
            onChange={handleChange}
          />
        </div>
        <div className='col-12 col-md-6 mt-3 mt-md-0'>
          <label>
            {t('calculator:fields.email')}
            <sup className={stylesUI.textRed}>*</sup>
          </label>
          <CustomTextInput
            name='email'
            placeholder={t('calculator:fields.email example')}
            className='mt-2'
            onChange={handleChange}
            onBlur={handleBlur}
            error={props.errors['contacts.email']}
          />
        </div>
      </div>
      <div className='row gx-2 align-items-center mt-3'>
        <div className='col-12 col-sm-7'>
          <small>{t('calculator:fields.communication method')}</small>
        </div>
        <div className='col-12 col-sm-5 mt-2 mt-md-0'>
          <div className='d-flex justify-content-sm-end'>
            {contactMethods.map((method, i) => (
              <div key={i} className={styles.contact}>
                <Image
                  src={
                    chosenMethods.includes(method.name)
                      ? method.activeIconSrc
                      : method.iconSrc
                  }
                  alt={`${method.name}-icon`}
                  width='30px'
                  height='30px'
                  onClick={() => handleContanctClick(method.name)}
                />
                {editingMethod === method.name && (
                  <div
                    className={cn(styles.contact__form, 'mt-2 mt-md-0 p-3')}
                  >
                    <label>
                      {t(`calculator:fields.${method.label.toLowerCase()}`)}
                    </label>
                    <div className='row gx-2 mt-3'>
                      <div className='col-10'>
                        <CustomTextInput
                          name={method.name}
                          placeholder={method.placeholder}
                          onChange={handleContactFormChange}
                        />
                      </div>
                      <div className='col-2'>
                        <button
                          type='button'
                          className='btn shadow-none h-100'
                          onClick={() => handleContactFormSubmit(method.name)}
                        >
                          <FontAwesomeIcon
                            className={stylesUI.textOrange}
                            icon={faArrowRight}
                          />
                        </button>
                      </div>
                    </div>
                    <div className={styles.contact__form__close}>
                      <button
                        type='button'
                        className='btn shadow-none'
                        onClick={handleContactFormClose}
                      >
                        <FontAwesomeIcon
                          className={stylesUI.textLightGrey}
                          icon={faTimes}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsField;
