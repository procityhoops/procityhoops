var sitemapModule = require('sitemap');


module.exports = {
	generateSitemap: function () {
		var sitemap = sitemapModule.createSitemap ({
			hostname: 'http://procityhoops.com',
			cacheTime: 600000,
			urls: [
				{ url: '/',  changefreq: 'daily'},
				{ url: '/news-feed',  changefreq: 'daily'},
				{ url: '/league-leaders',  changefreq: 'daily'},
				{ url: '/standing/west',  changefreq: 'daily'},
				{ url: '/standing/east',  changefreq: 'daily'},
				{ url: '/eastern-conference',  changefreq: 'weekly'},
				{ url: '/western-conference',  changefreq: 'weekly'},
				{ url: '/nba-news',  changefreq: 'weekly'},
				{ url: '/nba-free-agency-previews',  changefreq: 'weekly'}
			]
		});
		return sitemap;
	}
}
