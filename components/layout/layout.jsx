import MainHeader from './main-header';
import Footer from './footer/footer';
import Head from './head';

function Layout(props) {
  return (
    <>
      <Head />
      <div className='root'>
        <MainHeader />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
