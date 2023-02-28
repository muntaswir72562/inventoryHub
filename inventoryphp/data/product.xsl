<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Define a variable for the light red background color -->
  <xsl:variable name="Red" select="'#8B0000'" />

  <!-- Define a template to match the products element -->
  <xsl:template match="/products">

    <!-- Loop through each product element -->
    <div class="wrapper">
      <xsl:for-each select="product">
        <div class="product">
          <img src="/data/{img/@src}" alt="Product Image" class="product__img" />
          <div class="product__details">
            <h2 class="product__title">
              <xsl:value-of select="title" />
            </h2>
            <p class="product__id">
              <strong>Product ID: </strong>
              <xsl:value-of select="@id" />
            </p>
            <p class="product__price">
              <strong>Unit Price: </strong>
              <xsl:value-of select="unitPrice" />
            </p>
            <p class="product__quantity">
              <strong>Quantity: </strong>
              <xsl:if test="quantity &lt; 10">
                <span >
                  <xsl:value-of select="quantity"/>
                </span>
                <br/>
                <p class="product__lowStock">LOW ON STOCK</p>
              </xsl:if>
              <xsl:if test="quantity &gt;= 10">
                <xsl:value-of select="quantity"/>
              </xsl:if>
              <br /><a href="{link}">Product Link</a>
              <xsl:apply-templates select="products/product"/>
              <br/>
              <strong>Description:</strong>
              <xsl:copy-of select="text()" />
            </p>
          </div>

        </div>
      </xsl:for-each>
    </div>
    <!-- Output the total quantity and count of products -->
    <div class="sum">
      <p>Total Quantity: <xsl:value-of select="sum(product/quantity)" />
      </p>
      <p>Number of Products: <xsl:value-of select="count(product)" />
      </p>
    </div>


  </xsl:template>

  <!-- <xsl:template match="quantity">
    <xsl:if test="quantity &lt; 10">
      <span style="background-color:{$lightRed};">
        <xsl:value-of select="quantity"/>
      </span>
    </xsl:if>
    <xsl:if test="quantity &gt;= 10">
      <xsl:value-of select="quantity"/>
    </xsl:if>
  </xsl:template> -->

</xsl:stylesheet>