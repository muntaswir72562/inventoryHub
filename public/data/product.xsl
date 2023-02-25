<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Define a variable for the light red background color -->
  <xsl:variable name="Red" select="'#8B0000'" />

  <!-- Define a template to match the products element -->
  <xsl:template match="/products">
    <html>
      <head>
        <title>Product List</title>
      </head>
      <body>
        <h1>Product List</h1>
        <!-- Loop through each product element -->
        <div class="wrapper">
          <xsl:for-each select="product">
            <div class="product">
              <h2>
                <xsl:value-of select="title" />
              </h2>
              <p>
                <strong>Product ID:</strong>
                <xsl:value-of select="@id" />
              </p>
              <img src="{img/@src}" alt="Product Image" />
              <p>
                <strong>Unit Price:</strong>
                <xsl:value-of select="unitPrice" />
              </p>
              <p><strong>Quantity:</strong>
              <xsl:if test="quantity &lt; 10">
                <span ><xsl:value-of select="quantity"/></span><br/>
                <span style="color:{$Red};">LOW ON STOCK</span>
              </xsl:if>
              <xsl:if test="quantity &gt;= 10">
                <xsl:value-of select="quantity"/>
              </xsl:if>

              <xsl:apply-templates select="products/product"/>
            </p>
              <p>
                <a href="{link}">Product Link</a>
              </p>
              <p>
                <xsl:copy-of select="text()" />
              </p>
            </div>
          </xsl:for-each>
        </div>
        <!-- Output the total quantity and count of products -->
        <p>Total Quantity: <xsl:value-of select="sum(product/quantity)" /></p>
        <p>Number of Products: <xsl:value-of select="count(product)" /></p>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="quantity">
  <xsl:if test="quantity &lt; 10">
    <span style="background-color:{$lightRed};"><xsl:value-of select="quantity"/></span>
  </xsl:if>
  <xsl:if test="quantity &gt;= 10">
    <xsl:value-of select="quantity"/>
  </xsl:if>
  </xsl:template>

</xsl:stylesheet>