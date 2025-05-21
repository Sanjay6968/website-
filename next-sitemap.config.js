/** @type {import('next-sitemap').IConfig} */

  const config = {
    siteUrl: 'https://mekuva.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/404','/coming-soon','/blog/*','/blog' ,'/api/*'],
  }
 
module.exports = config;