import DocumentInfo from './document-info/document-info';
import classes from './tab-documents.module.css';

function TabDocuments({ documents }) {
  return (
    <div className={classes.tabDocuments}>
      {
        documents.filter((document) => !!document.value).map((document, index) => (
          <DocumentInfo key={index} document={document} />
        ))
      }
    </div>
  );
}

export default TabDocuments;
