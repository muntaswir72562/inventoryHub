<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <div>
            <table>
                <thead>
                    <tr>
                        <th>Invoice Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="invoices/invoice">
                        <xsl:sort select="@id" />
                            <tr>
                            <td>
                                <a href="#">
                                    <xsl:value-of select="@id" />
                                </a>
                            </td>
                            <td>
                                <xsl:value-of select="name/firstName" />
                                <xsl:value-of select="name/lastName" />
                               
                            </td>
                            <td>
                                <xsl:value-of select="date" />
                            </td>
                            <td>

                                <xsl:choose>
                                    <xsl:when test="status/@sid = 'paid'">
                                        <p class="status status-paid">
                                            <xsl:value-of select="status/@sid" />
                                        </p>
                                    </xsl:when>
                                    <xsl:when test="status/@sid = 'unpaid'">
                                        <p class="status status-unpaid">
                                            <xsl:value-of select="status/@sid" />
                                        </p></xsl:when>
                                    <xsl:when test="status/@sid = 'draft'">
                                        <p class="status status-pending">
                                            <xsl:value-of select="status/@sid" />
                                        </p></xsl:when>
                                    <xsl:otherwise>
                                        <p class="status">
                                            <xsl:value-of select="status" />
                                        </p>
                                    </xsl:otherwise>

                                </xsl:choose>

                            </td>
                            <td class="amount">
                                <xsl:value-of select="total" />
                            </td>
                        </tr>
                    </xsl:for-each>


                </tbody>
            </table>

        </div>
    </xsl:template>
    <!-- <xsl:template match="invoice/name">
        <span><xsl:value-of select="name/firstName" /></span>
        <span> nknk</span>
        <span><xsl:value-of select="name/lastName" /></span>
  <br />
</xsl:template> -->


</xsl:stylesheet>