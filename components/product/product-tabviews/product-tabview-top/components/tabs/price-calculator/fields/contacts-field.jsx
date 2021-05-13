import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import cn from 'classnames';
import styles from '../price-calculator.module.css';
import stylesUI from 'components/ui/custom-ui.module.css';

import CustomTextInput from 'components/ui/custom-text-input';
import { contactMethods } from '../options/options';

function ContactsField(props) {
  const [contacts, setContacts] = useState(props.defaultValue);
  const [chosenMethods, setChosenMethods] = useState([]);
  const [editingMethod, setEditingMethod] = useState(null);
  const [editingMethodValue, setEditingMethodValue] = useState('');

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
    if (methodName === 'email') {
      addMethodToChosen('email');
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
    if (!editingMethodValue && !contacts[methodName]) {
      return;
    }
    const contactValue = editingMethodValue || contacts[methodName];
    setContacts({ ...contacts, [methodName]: contactValue });
    if (!editingMethodValue && contacts[methodName]) {
      removeMethodFromChosen(methodName);
    } else {
      addMethodToChosen(methodName);
    }
    setEditingMethod(null);
    setEditingMethodValue('');
  };

  return (
    <>
      <div className={'row'}>
        <div className={'col-12 col-md-6'}>
          <label>Name</label>
          <CustomTextInput
            name={'name'}
            placeholder={'John Smith'}
            className={'mt-2'}
            onChange={handleChange}
          />
        </div>
        <div className={'col-12 col-md-6 mt-3 mt-md-0'}>
          <label>
            Email<sup className={stylesUI.textRed}>*</sup>
          </label>
          <CustomTextInput
            name={'email'}
            placeholder={'example@gmail.com'}
            className={'mt-2'}
            onChange={handleChange}
            onBlur={handleBlur}
            error={props.errors['contacts.email']}
          />
        </div>
      </div>
      <div className={'row gx-2 align-items-center mt-3'}>
        <div className={'col-12 col-sm-7'}>
          <small>Preferred method of communication:</small>
        </div>
        <div className={'col-12 col-sm-5 mt-2 mt-md-0'}>
          <div className={'d-flex justify-content-sm-end'}>
            {contactMethods.map((method, i) => (
              <div key={i} className={styles.contact}>
                <Image
                  src={
                    chosenMethods.includes(method.name)
                      ? method.activeIconSrc
                      : method.iconSrc
                  }
                  alt={`${method.name}-icon`}
                  width={'30px'}
                  height={'30px'}
                  onClick={() => handleContanctClick(method.name)}
                />
                {editingMethod === method.name && (
                  <div
                    className={cn(styles.contact__form, 'mt-2 mt-md-0 p-3')}
                  >
                    <label>{method.label}</label>
                    <div className={'row gx-2 mt-3'}>
                      <div className={'col-10'}>
                        <CustomTextInput
                          name={method.name}
                          placeholder={method.placeholder}
                          onChange={handleContactFormChange}
                          defaultValue={contacts[method.name]}
                        />
                      </div>
                      <div className={'col-2'}>
                        <button
                          type={'button'}
                          className={'btn shadow-none h-100'}
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
                        type={'button'}
                        className={'btn shadow-none'}
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
