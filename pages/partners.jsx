import Trans from 'next-translate/Trans';

function PartnersPage() {
  return (
    <section className='partners'>
      <h2 className='partners__header'>
        <Trans i18nKey='partners:title' />
      </h2>
      <ul className='partners__list'>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/caspian-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:caspian week.title' />
            </h3>
            <p className='partner__desc'>
              <Trans
                i18nKey='partners:caspian week.text'
                components={[<em />]}
              />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/integral-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:integral petroleum.title' />
            </h3>
            <p className='partner__desc'>
              <Trans
                i18nKey='partners:integral petroleum.text'
                components={[<em />]}
              />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/socar-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:socar.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:socar.text' />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/ady-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:ady container.title' />
            </h3>
            <p className='partner__desc'>
              <Trans
                i18nKey='partners:ady container.text'
                components={[<em />]}
              />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/ozturk-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:ozturk.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:ozturk.text' components={[<em />]} />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/change-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:change.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:change.text' />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/lwgroup-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:lw group.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:lw group.text' components={[<em />]} />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/sarjak-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:sarjak.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:sarjak.text' components={[<em />]} />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/median-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:median.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:median.text' />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/cu-lfg-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:cu-lfg ltd.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:cu-lfg ltd.text' />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/esalco-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:esalco.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:esalco.text' />
            </p>
          </div>
        </li>
        <li className='partners__item partner'>
          <div className='partner__logo-wrapper'>
            <img
              className='partner__logo'
              src='./images/boxxport-partner.png'
              alt=''
            />
          </div>
          <div className='partner__info-wrapper'>
            <h3 className='partner__name'>
              <Trans i18nKey='partners:poxxport.title' />
            </h3>
            <p className='partner__desc'>
              <Trans i18nKey='partners:poxxport.text' components={[<em />]} />
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default PartnersPage;
