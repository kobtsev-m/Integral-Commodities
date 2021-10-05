import HtmlHead from 'next/head';
import MainHeader from '../Header/Header';
import Footer from '../Footer/desktop/FooterDesktop';

function Layout(props) {
  return (
    <>
      <HtmlHead>
        <title>Integral</title>
        <base href='/' />
      </HtmlHead>
      <div className='root'>
        <MainHeader />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
