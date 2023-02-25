<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <!-- Match the root element -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Product List</title>
      </head>
      <body>
        <h1>Product List</h1>
        <!-- Apply the product template to each product element -->
        <xsl:apply-templates select="products/product"/>
      </body>
    </html>
  </xsl:template>
  
  <!-- Match the product element -->
  <xsl:template match="product">
    <div>
      <!-- Output the title element -->
      <h2><xsl:value-of select="title"/></h2>
      <!-- Output the unitPrice element -->
      <p>Price: $<xsl:value-of select="unitPrice"/></p>
      <!-- Apply the quantity template -->
      <xsl:apply-templates select="quantity"/>
      <!-- Output the img element -->
      <img src="{img/@src}"/>
      <!-- Output the text node -->
      <p><xsl:value-of select="text()"/></p>
    </div>
  </xsl:template>
  
  <!-- Match the quantity element -->
  <xsl:template match="quantity">
    <!-- Check if the quantity is less than 10 -->
    <xsl:if test=". &lt; 10">
      <!-- Apply a red background color to the quantity element -->
      <xsl:attribute name="style">background-color: red;</xsl:attribute>
    </xsl:if>
    <!-- Output the quantity element -->
    <p>Quantity: <xsl:value-of select="."/></p>
  </xsl:template>
  
</xsl:stylesheet>