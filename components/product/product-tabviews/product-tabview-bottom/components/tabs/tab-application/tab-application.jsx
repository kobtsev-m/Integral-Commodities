import ApplicationInfo from './application-info/application-info';
import classes from './tab-application.module.css';

function TabApplication({ application }) {
  const applicationElements = [];

  for (let i = 0; i < application.length; i+=2) {
    const photo = application[i].value;
    const description = application[i + 1].value;

    applicationElements.push(<ApplicationInfo key={i} photo={photo} description={description} />);
  }

  return (
    <div className={classes.tabApplication}>
      <div className={classes.tabApplication__wrapper}>
        {applicationElements}
      </div>
    </div>
  );
}

export default TabApplication;
