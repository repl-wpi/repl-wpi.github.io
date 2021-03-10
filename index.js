const Metalsmith = require( 'metalsmith' ),
      markdown   = require( 'metalsmith-markdown' ),
      ignore     = require( 'metalsmith-ignore' ),
      templates  = require( 'metalsmith-templates' )

Metalsmith( __dirname )
  .source( './src/prose' )
  .use( markdown() )
  .use( templates( 'handlebars' ) )
  .use( ignore([ '*.md.swp', '*.md~' ]) )
  .destination( './build' )
  .build( err => { if( err ) console.log( err ) }) 
