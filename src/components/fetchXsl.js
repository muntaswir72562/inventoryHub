const fetchXml = (xmlUrl, xslUrl, div) => {
    
    return ( 
        fetch(xmlUrl)
        .then(response => response.text())
        .then(xml => {
          // Load the XSL file
          fetch(xslUrl)
            .then(response => response.text())
            .then(xsl => {
              // Create a new XSLT processor and load the XSL stylesheet
              const xsltProcessor = new XSLTProcessor();
              const xslDoc = new DOMParser().parseFromString(xsl, 'text/xml');
              xsltProcessor.importStylesheet(xslDoc);
       // Transform the XML data using the XSL stylesheet
              const xmlDoc = new DOMParser().parseFromString(xml, 'text/xml');
             const  html = xsltProcessor.transformToFragment(xmlDoc, document);
              // document.getElementById("fetch").innerHTML=html
              // console.log(html)
               // Output the resulting HTMLs
               console.log(html)
            div.append(html);
            });
        })
     );
}
 
export default fetchXml;