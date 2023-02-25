<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Set up a variable for the light red background color -->
  <xsl:variable name="lightRed" select="'#FFCCCC'" />

  <!-- Define a template to match the products element -->
  <xsl:template match="products">
    <html>
      <head>
        <title>Product List</title>
      </head>
      <body>
        <h1>Product List</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Link</th>
            <th>Description</th>
          </tr>
          <!-- Loop through each product element -->
          <xsl:for-each select="product">
            <!-- Set up a variable for the background color based on quantity -->
            <xsl:variable name="bgColor">
              <xsl:choose>
                <xsl:when test="quantity &lt; 10">
                  <xsl:value-of select="$lightRed" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="'transparent'" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>
            <tr style="background-color:{$bgColor}">
              <td><xsl:value-of select="@id"/></td>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="unitPrice"/></td>
              <td><xsl:value-of select="quantity"/></td>
              <td><img src="{img/@src}" alt="Product Image"/></td>
              <td><a href="{link}">Product Link</a></td>
              <td><xsl:value-of select="."/></td>
            </tr>
          </xsl:for-each>
        </table>
        <!-- Output the total quantity and count of products -->
        <p>Total Quantity: <xsl:value-of select="sum(product/quantity)"/></p>
        <p>Number of Products: <xsl:value-of select="count(product)"/></p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>