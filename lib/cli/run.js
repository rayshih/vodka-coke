var utils      = require( '../utils' );
var logger     = utils.logger;
var fs         = require( 'fs' );

module.exports = function ( args ){

  if( args.indexOf( '-f' ) !== -1 ){
    utils.fixture.enable_log( true );
  }

  if ( args.indexOf( '-d' ) !== -1 ){
    logger.set_output( false );
  }

  require( './generators/lib' ).search_project_root( function ( root_path ){

    if( !root_path ) logger.log( utils.$alert( 'err' ) + '   ' +
      '`server.js` not found, are you in the project? ');

    var test_functionals_path = root_path + '/test/functional'
    if( !fs.existsSync( test_functionals_path + '/run.js' )){
      return logger.log( utils.$alert( 'err' ) + '   ' +
      '`run.js` not found, are you in the project? ');
    }

    // ---------------------------------------------------

    if( args.indexOf( '--without-coke' ) !== -1 ){
      require( test_functionals_path + '/run.js' );
      return;
    }

    require( root_path + '/node_modules/coke/lib/boot' )( root_path, function (){
      process.nextTick( function (){
        require( test_functionals_path + '/run.js' );
      });
    })
  });
};
