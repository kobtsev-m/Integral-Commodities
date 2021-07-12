import { useEffect } from 'react';

import cn from 'classnames';
import styles from './slider-menu.module.css';

const SliderMenu = (props) => {
  const { open, title, onClose } = props;

  useEffect(() => {
    if (open) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      const jdiv = document.querySelector('jdiv');
      if (jdiv) {
        jdiv.style.display = 'none';
      }
    } else {
      document.body.style.position = '';
      const jdiv = document.querySelector('jdiv');
      if (jdiv) {
        jdiv.style.display = 'block';
      }
    }
  }, [open]);

  return (
    <section className={cn(styles.root, { [styles.root_opened]: open })}>
      <div className={styles.header}>
        <button
          type={'button'}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={'close menu'}
        />
        <h2 className={styles.title}>{title}</h2>
      </div>
      {props.children}
      <p className={styles.copyright}>
        &copy; 2021 Integral Commodities. All Rights reserved
      </p>
    </section>
  );
};

export default SliderMenu;
