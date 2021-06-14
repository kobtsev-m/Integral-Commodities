import styles from "./document-info.module.css";

function DocumentInfo({ document }) {
  return (
    <a
      className={styles.documentInfo}
      href={`/documents/${document.value}`}
      target="_blank"
      download
    >
      <span className={styles.documentInfo__text}>{document.key}</span>
      <img
        className={styles.documentInfo__icon}
        src="/images/document.svg"
        alt="document icon"
      />
    </a>
  );
}

export default DocumentInfo;
