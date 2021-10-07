import Document, { Html, Head, Main, NextScript } from 'next/document';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANGER_ID;
const JIVO_WIDGET_ID = process.env.NEXT_PUBLIC_JIVO_WIDGET_ID;

const GOOGLE_TAG_MANGER_SCRIPT_1 = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-K82BJL8YFZ');
`;
const GOOGLE_TAG_MANGER_SCRIPT_2 = `
  (function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1*new Date();
    k = e.createElement(t),
    a = e.getElementsByTagName(t)[0],
    k.async=1, k.src = r,
    a.parentNode.insertBefore(k,a)
  }) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(72914599, "init", {
    defer: true,
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
`;

class DocumentWrapper extends Document {
  componentDidMount() {
    this.lang = useTranslation().lang;
  }
  render() {
    return (
      <Html lang={this.lang}>
        <Head>
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&language=en`}
          />
          <script
            async
            src={`//code-ya.jivosite.com/widget/${JIVO_WIDGET_ID}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_MANAGER_ID}`}
          />
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{ __html: GOOGLE_TAG_MANGER_SCRIPT_1 }}
          />
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{ __html: GOOGLE_TAG_MANGER_SCRIPT_2 }}
          />
        </body>
      </Html>
    );
  }
}

export default DocumentWrapper;
