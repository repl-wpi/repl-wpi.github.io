const Metalsmith = require( 'metalsmith' ),
      markdown   = require( 'metalsmith-markdown' ),
      ignore     = require( 'metalsmith-ignore' )

Metalsmith( __dirname )
  .source( './src/prose' )
  .use( markdown() )
  .use( ignore([ '*.md.swp', '*.md~' ]) )
  .destination( './build' )
  .build( console.log )
