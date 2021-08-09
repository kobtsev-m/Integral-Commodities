import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Trans from 'next-translate/Trans';

import styles from './ask-for-quote.module.css';

import PriceCalculator from 'components/product/product-tabviews/product-tabview-top/components/tabs/price-calculator/price-calculator';
import { initialOfferFormData } from 'components/product/product-tabviews/product-tabview-top/data/values';

function AskForQuote({ products }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={styles.ask}>
        <div className={styles.contentWrapper}>
          <img
            className={styles.ask__image}
            src='/images/icon-attention.svg'
            alt='Attention'
          />
          <p className={styles.ask__text}>
            <Trans i18nKey='common:askForQuote.text' />
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            type='button'
            className={styles.ask__link}
            onClick={() => setModalShow(true)}
          >
            <Trans i18nKey='common:askForQuote.button' />
          </button>
        </div>
      </div>
      <Modal
        size='lg'
        scrollable={true}
        centered={true}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header>
          <Modal.Title>Ask for quote</Modal.Title>
          <button
            className='btn-close shadow-none me-1'
            onClick={() => setModalShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid py-2'>
            <PriceCalculator
              initialFormData={initialOfferFormData}
              isEmbed={true}
              products={products}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AskForQuote;
