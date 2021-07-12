import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function LoadingSpinner(props) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: `flex`,
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 100
      }}
    >
      <Loader
        type={'Puff'}
        color={'#02569c'}
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default LoadingSpinner;
