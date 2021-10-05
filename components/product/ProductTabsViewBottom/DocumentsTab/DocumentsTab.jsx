import Trans from 'next-translate/Trans';
import DocumentsTabItem from './DocumentsTabItem';
import styles from './DocumentsTab.module.css';

function DocumentsTab({ documents }) {
  const filteredDouments = documents.filter((document) => !!document.value);
  return (
    <div className={styles.tabDocuments}>
      {filteredDouments.length ? (
        filteredDouments.map((document, i) => (
          <DocumentsTabItem key={i} document={document} />
        ))
      ) : (
        <span className={styles.noDocumentsText}>
          <Trans i18nKey='product:noDocuments' />
        </span>
      )}
    </div>
  );
}

export default DocumentsTab;
