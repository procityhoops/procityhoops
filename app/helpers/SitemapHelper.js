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
				{ url: '/nba-free-agency-previews',  changefreq: 'weekly'},
				{ url: '/top-five-underrated-free-agency-moves',  changefreq: 'weekly'},
				{ url: '/lamarcus-aldridge-trade-mystery',  changefreq: 'weekly'},
				{ url: '/brooklyn-nets-need-to-sign-kcp',  changefreq: 'weekly'},
				{ url: '/flip-saunders-his-vision-lives-on',  changefreq: 'weekly'},
				{ url: '/phil-jackson-a-eulogy',  changefreq: 'weekly'},
				{ url: '/nba-draft-steals-2017',  changefreq: 'weekly'},
				{ url: '/boston-celtics-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/toronto-raptors-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/houston-rockets-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/san-antonio-spurs-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/memphis-grizzlies-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/atlanta-hawks-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/milwaukee-bucks-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/indiana-pacers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/washington-wizards-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/cleveland-cavaliers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/golden-state-warriors-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/los-angeles-clippers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/chicago-bulls-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/utah-jazz-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/oklahoma-city-thunder-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/portland-trail-blazers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/miami-heat-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/detroit-pistons-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/denver-nuggets-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/new-orleans-pelicans-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/dallas-mavericks-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/charlotte-hornets-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/minnesota-timberwolves-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/new-york-knicks-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/sacramento-kings-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/orlando-magic-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/philadelphia-76ers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/los-angeles-lakers-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/brooklyn-nets-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/phoenix-suns-free-agency-preview',  changefreq: 'weekly'},
				{ url: '/nba-draft-grades-2017',  changefreq: 'weekly'},
				{ url: '/darren-wolfson-q-and-a',  changefreq: 'weekly'},
				{ url: '/brooklyn-nets-moving-in-the-right-direction',  changefreq: 'weekly'},
				{ url: '/dwight-howard-to-the-hornets',  changefreq: 'weekly'},
				{ url: '/kristaps-porzingis-landing-spots',  changefreq: 'weekly'},
				{ url: '/cavaliers-let-go-of-david-griffin',  changefreq: 'weekly'},
				{ url: '/russell-to-brooklyn-lopez-to-lakers',  changefreq: 'weekly'},
				{ url: '/kevin-durant-joins-the-warriors',  changefreq: 'weekly'},
				{ url: '/deaaron-fox-draft-profile',  changefreq: 'weekly'},
				{ url: '/jarrett-allen-draft-profile',  changefreq: 'weekly'},
				{ url: '/nba-mock-draft-four',  changefreq: 'weekly'},
				{ url: '/nba-mock-draft-three',  changefreq: 'weekly'},
				{ url: '/dennis-smith-draft-profile',  changefreq: 'weekly'},
				{ url: '/jimmy-butler-on-the-move',  changefreq: 'weekly'},
				{ url: '/paul-george-is-leaving-indiana',  changefreq: 'weekly'},
				{ url: '/celtics-and-sixers-trade-agreed-upon',  changefreq: 'weekly'},
				{ url: '/celtics-sixers-trade-pick-one',  changefreq: 'weekly'},
				{ url: '/nba-rumors-june-15-2017',  changefreq: 'weekly'},
				{ url: '/nba-mock-draft-two',  changefreq: 'weekly'},
				{ url: '/markelle-fultz-draft-profile',  changefreq: 'weekly'},
				{ url: '/lonzo-ball-draft-profile',  changefreq: 'weekly'},
				{ url: '/malik-monk-draft-profile',  changefreq: 'weekly'},
				{ url: '/zach-collins-draft-profile',  changefreq: 'weekly'},
				{ url: '/luke-kennard-draft-profile',  changefreq: 'weekly'},
				{ url: '/markelle-fultz-to-workout-with-sacramento',  changefreq: 'weekly'},
				{ url: '/lakers-open-to-dealing-second-pick',  changefreq: 'weekly'},
				{ url: '/gordon-hayward-to-miami',  changefreq: 'weekly'},
				{ url: '/buy-or-sell-lebron-heading-west',  changefreq: 'weekly'},
				{ url: '/fix-super-teams',  changefreq: 'weekly'},
				{ url: '/cavs-rumors',  changefreq: 'weekly'},
				{ url: '/nba-draft-rumors',  changefreq: 'weekly'},
				{ url: '/nba-all-star-game',  changefreq: 'weekly'},
				{ url: '/need-based-mock-draft',  changefreq: 'weekly'},
				{ url: '/lakers-passing-on-ball',  changefreq: 'weekly'},
				{ url: '/celtics-sixers-trade',  changefreq: 'weekly'},
				{ url: '/chris-paul-spurs',  changefreq: 'weekly'},
				{ url: '/knicks-blazers',  changefreq: 'weekly'},
				{ url: '/pistons-trade',  changefreq: 'weekly'},
				{ url: '/bledsoe-trade',  changefreq: 'weekly'},
				{ url: '/celtics-frontcourt',  changefreq: 'weekly'},
				{ url: '/noel-contract',  changefreq: 'weekly'},
				{ url: '/rubio',  changefreq: 'weekly'},
				{ url: '/knicks-pick',  changefreq: 'weekly'},
				{ url: '/irving-curry',  changefreq: 'weekly'},
				{ url: '/finals-preview',  changefreq: 'weekly'},
				{ url: '/sixers-pick',  changefreq: 'weekly'},
				{ url: '/lakers-pick',  changefreq: 'weekly'},
				{ url: '/towns-review',  changefreq: 'weekly'},
				{ url: '/celtics-pick',  changefreq: 'weekly'},
				{ url: '/nba-draft',  changefreq: 'weekly'},
				{ url: '/jonathan-issac',  changefreq: 'weekly'},
				{ url: '/nba-mock-draft-1',  changefreq: 'weekly'},
				{ url: '/tatum-comparison',  changefreq: 'weekly'},
				{ url: '/celtics-cavs',  changefreq: 'weekly'},
				{ url: '/trade-deadline-breakdown',  changefreq: 'weekly'},
				{ url: '/nba-redraft',  changefreq: 'weekly'},
				{ url: '/warriors-spurs',  changefreq: 'weekly'},
				{ url: '/last-straw',  changefreq: 'weekly'},
				{ url: '/monk-vs-fox',  changefreq: 'weekly'},
				{ url: '/resting-nba-stars',  changefreq: 'weekly'},
				{ url: '/top-young-players',  changefreq: 'weekly'},
				{ url: '/westbrook-harden',  changefreq: 'weekly'},
				{ url: '/rockets-review',  changefreq: 'weekly'},
				{ url: '/nba-winners-losers',  changefreq: 'weekly'},
				{ url: '/rookies-new-teams',  changefreq: 'weekly'},
				{ url: '/ball-vs-fultz',  changefreq: 'weekly'},
				{ url: '/contender-pretender',  changefreq: 'weekly'},
				{ url: '/mn-vs-phi',  changefreq: 'weekly'},
				{ url: '/nba-mock-draft',  changefreq: 'weekly'},
				{ url: '/nba-super-team',  changefreq: 'weekly'},
				{ url: '/drew-hanlen',  changefreq: 'weekly'},
				{ url: '/nba-2016-2017-season-video',  changefreq: 'weekly'},
				{ url: '/is-kevin-love-being-overlooked',  changefreq: 'weekly'},
				{ url: '/karl-anthony-towns-2017-season-mix',  changefreq: 'weekly'},
				{ url: '/featured-articles',  changefreq: 'daily'}
			]
		});
		return sitemap;
	}
}