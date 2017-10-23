<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/rss">
		<html>
			<body>
				<h2>Rss feeds</h2>
				<table border="1">
					<tr bgcolor="#ccc">
						<th style="text-align:left">Title</th>
						<th style="text-align:left">Link</th>
						<th style="text-align:left">Author</th>
						<th style="text-align:left">Description</th>
					</tr>
					<xsl:for-each select="channel/item">
						<tr style="text-align:center">
							<td><xsl:value-of select="title"/></td>
							<td><xsl:value-of select="link"/></td>
							<td><xsl:value-of select="author"/></td>
							<td><xsl:value-of select="description"/></td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>