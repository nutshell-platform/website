const ip = require( 'ip' )
const { normalize } = require( 'path' )

module.exports = {
	// Identity variables used in pug templates
	identity: {
		title: "Nutshell",
		desc: "Nutshell - One message a week from people you care about",
		"logo": "logo.jpg"
	},
	// System vars managing some pug elements as well as file paths
	system: {
		public: normalize( process.env.NODE_ENV == 'production' ? __dirname + '/../docs/' : __dirname + '/../public/' ),
		source: normalize( __dirname + '/../src/' ),
		url: process.env.NODE_ENV == 'production' ? 'https://nutshell.social/' : 'http://' + ip.address() + ':3000/',
		gverification: undefined,
		timestamp: new Date().getTime(),
		year: new Date().getFullYear()
	},
	// About the author. Change this to your own unless you went me to get credit for your page of course... <3
	author: {
		firstname: "Mentor",
		lastname: "Palokaj",
		email: "mentor@palokaj.co",
		twitter: "@actuallymentor",
		// facebook profile id, used for retargeting ad permissions
		facebook: "1299359953416544",
		url: "https://nutshell.social/"
	},
	// Tracking codes
	track: {
		gtm: undefined
	}
}