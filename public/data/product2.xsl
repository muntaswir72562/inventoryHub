<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Define a variable for the light red background color -->
  <xsl:variable name="lightRed" select="'#FFCCCC'" />

  <!-- Define a template to match the products element -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Product List</title>
        
      </head>
      <body>
        <h1>Product List</h1>
        <!-- Loop through each product element and apply the product template -->
        <!-- <xsl:for-each select="product"> -->
          <div class="product">
            <xsl:apply-templates select="products/product"/>
            <p><a href="{link}">Product Link</a></p>
            <!-- <p><xsl:value-of select="."/></p> -->
          </div>
        <!-- </xsl:for-each> -->
        <!-- Output the total quantity and count of products -->
        <p>Total Quantity: <xsl:value-of select="sum(product/quantity)"/></p>
        <p>Number of Products: <xsl:value-of select="(count/product)"/></p>
      </body>
    </html>
  </xsl:template>

  <!-- Define a template to match the product element -->
  <xsl:template match="product">
    <h2><xsl:value-of select="title"/></h2>
    <p><strong>Product ID:</strong> <xsl:value-of select="@id"/></p>
    <p><strong>Unit Price:</strong> <xsl:value-of select="unitPrice"/></p>
    <p>
        <xsl:if test="quantity &lt; 10">
            <span style="background-color:{$lightRed};"><strong>Quantity:</strong><xsl:value-of select="quantity"/></span>
          </xsl:if>
          <xsl:if test="quantity &gt;= 10">
            <strong>Quantity:</strong><xsl:value-of select="quantity"/>
          </xsl:if>
    </p>
    <img src="{img/@src}" alt="Product Image"/>
  </xsl:template>

</xsl:stylesheet>