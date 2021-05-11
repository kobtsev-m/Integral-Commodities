import { useRouter } from "next/router";

import ProductTabs from "./components/product-tabs";
import TabProduct from "./components/tabs/tab-product";
import ProductAnalogs from "../../product-analogs";
import { useEffect, useState } from "react";
import TabOffer from "./components/tabs/tab-offer";

const gradeForms = {
  ['Т 60-475-119']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537622064] = {\n' +
      '            id: "p8CY5V3",\n' +
      '            rnd: 537622064\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=p8CY5V3","head","appendChild","querySelector"));',
    divClass: 'stepform_p8CY5V3 rnd_537622064',
  },
  ['T 50-500']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537621237] = {\n' +
      '            id: "8oh9I0n",\n' +
      '            rnd: 537621237\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=8oh9I0n","head","appendChild","querySelector"));',
    divClass: 'stepform_8oh9I0n rnd_537621237',
  },
  ['A4009MFN1325']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537621648] = {\n' +
      '            id: "u79CJc1",\n' +
      '            rnd: 537621648\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=u79CJc1","head","appendChild","querySelector"));',
    divClass: 'stepform_u79CJc1 rnd_537621648',
  },
  ['15813-020']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537621025] = {\n' +
      '            id: "jLGax7w",\n' +
      '            rnd: 537621025\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=jLGax7w","head","appendChild","querySelector"));',
    divClass: 'stepform_jLGax7w rnd_537621025',
  },
  ['BL5200']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537620762] = {\n' +
      '            id: "JRdesy7",\n' +
      '            rnd: 537620762\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=JRdesy7","head","appendChild","querySelector"));',
    divClass: 'stepform_JRdesy7 rnd_537620762',
  },
  ['BL6200']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537621870] = {\n' +
      '            id: "AHw2qGH",\n' +
      '            rnd: 537621870\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=AHw2qGH","head","appendChild","querySelector"));',
    divClass: 'stepform_AHw2qGH rnd_537621870',
  },
  ['Inpipe 100']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537622249] = {\n' +
      '            id: "XK8I9yM",\n' +
      '            rnd: 537622249\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=XK8I9yM","head","appendChild","querySelector"));',
    divClass: 'stepform_XK8I9yM rnd_537622249',
  },
  ['TPP D 30S']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][537621460] = {\n' +
      '            id: "YO3CKoO",\n' +
      '            rnd: 537621460\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=YO3CKoO","head","appendChild","querySelector"));',
    divClass: 'stepform_YO3CKoO rnd_537621460',
  },
  ['Sulphur']: {
    scriptText: '(function(s, t, e, p, f, o, r, m) {\n' +
      '        s[t] = s[t] || {};\n' +
      '        s[t][570881250] = {\n' +
      '            id: "6gpFwWA",\n' +
      '            rnd: 570881250\n' +
      '        };\n' +
      '        e.async = true;\n' +
      '        e.src = p + f;\n' +
      '        document[m](o)[r](e)\n' +
      '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=6gpFwWA","head","appendChild","querySelector"));',
    divClass: 'stepform_6gpFwWA rnd_570881250',
  }
};

function ProductTabviewTop(props) {
  const { product } = props;
  const { grade } = product;
  const gradeFormInfo = gradeForms[grade];

  const router = useRouter();
  const activeRouteTab = router.query.tab;

  const [shouldReload, setShouldReload] = useState(false);
  useEffect(() => {
    if (activeRouteTab === "offer" && gradeFormInfo) {
      const scriptElement = document.createElement('script');
      scriptElement.textContent = gradeFormInfo.scriptText;

      document.body.appendChild(scriptElement);

      setShouldReload(true);
      if (shouldReload) {
        router.reload();
        setShouldReload(false);
      }

      return () => {
        document.body.removeChild(scriptElement);
      }
    }
  }, [activeRouteTab, gradeFormInfo]);

  return (
    <>
      <ProductTabs productCategory={product.category} />
      {activeRouteTab === "product" && <TabProduct product={product} />}
      {activeRouteTab === "offer" && <TabOffer formClasses={gradeFormInfo ? gradeFormInfo.divClass : ''} />}
      {activeRouteTab === "analogs" && <ProductAnalogs product={product} />}
    </>
  );
}

export default ProductTabviewTop;
