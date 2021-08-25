import Trans from 'next-translate/Trans';
import DocumentInfo from './document-info/document-info';
import styles from './tab-documents.module.css';

function TabDocuments({ documents }) {
  const filteredDouments = documents.filter((document) => !!document.value);
  return (
    <div className={styles.tabDocuments}>
      {filteredDouments.length ? (
        filteredDouments.map((document, index) => (
          <DocumentInfo key={index} document={document} />
        ))
      ) : (
        <span className={styles.noDocumentsText}>
          <Trans i18nKey='product:noDocuments' />
        </span>
      )}
    </div>
  );
}

export default TabDocuments;
