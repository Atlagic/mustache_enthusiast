<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
	<xsl:template match="/">
		<html>
			<body>
				<h2>Sitemap</h2>
				<table border="1px" width="900px" style="margin:20px auto">
					<tr bgcolor="#ccc">
						<th align="left">Location</th>
						<th align="left">Lastmod</th>
						<th align="left">Changefreq</th>
						<th align="left">Priority</th>
					</tr>
					<xsl:for-each select="sm:urlset/sm:url">
						<tr>
							<td><xsl:value-of select="sm:loc"/></td>
							<td><xsl:value-of select="sm:lastmod"/></td>
							<td><xsl:value-of select="sm:changefreq"/></td>
							<td><xsl:value-of select="sm:priority"/></td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>