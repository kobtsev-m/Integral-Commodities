import classes from './document-info.module.css';

function DocumentInfo({ document }) {
  return (
    <a
      className={classes.documentInfo}
      href={`/documents/${document.value}`}
      target="_blank"
      download
    >
      <span className={classes.documentInfo__text}>
        {document.key}
      </span>
      <img
        className={classes.documentInfo__icon}
        src="/images/document.svg"
        alt="document icon"
      />
    </a>
  );
}

export default DocumentInfo;
