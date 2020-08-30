// promise based file parsing
const pfs = require( __dirname + '/parse-fs' )
// Recursive copy library
const ncp = require( 'ncp' )

let copyfolder = ( source, destination ) => {
	return new Promise( ( resolve, reject ) => {
		// Recursively copy all assets from the source to the public folder
		ncp( source, destination, err => {
			if ( err ) return reject(  err )
			resolve( )
		} )
	} )
}

const copyassets = site => pfs.del( site.system.public + 'assets/*' )
.then( f => pfs.del( site.system.public + '.well-known/*' ) )
.then( copyfolder( site.system.source + 'assets', site.system.public + 'assets' ) )
.then( copyfolder( site.system.source + '.well-known', site.system.public + '.well-known' ) )

module.exports = copyassets