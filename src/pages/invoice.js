import Header from "../components/header";
import "../style/table.css";
const invoice = () => {
  const xmlUrl = "/data/invoice.xml";
  const xslUrl = "/data/invoice.xsl";

  // Load the XML file
  fetch(xmlUrl)
    .then((response) => response.text())
    .then((xml) => {
      // Load the XSL file

      fetch(xslUrl)
        .then((response) => response.text())
        .then((xsl) => {
          // Create a new XSLT processor and load the XSL stylesheet
          const xsltProcessor = new XSLTProcessor();
          const xslDoc = new DOMParser().parseFromString(xsl, "text/xml");
          xsltProcessor.importStylesheet(xslDoc);
          // Transform the XML data using the XSL stylesheet
          const xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
          const html = xsltProcessor.transformToFragment(xmlDoc, document);
          // document.getElementById("fetch").innerHTML=html
          document.getElementById("table").innerHTML = "";
          // Output the resulting HTMLs
          document.getElementById("table").append(html);
        });
    })
    .catch((error) => console.error(error));

  return (
    <div className="container__overwrite">
      <div>
        {Header("Invoice", "Manage the store's invoice")}
     
      </div>
      <div id="table"></div>
    </div>
  );
};

export default invoice;
