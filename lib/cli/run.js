var utils      = require( '../utils' );
var fs         = require( 'fs' );

module.exports = function ( args ){

  if( args.indexOf( '-f' ) !== -1 ){
    utils.fixture.enable_log( true );
  }

  require( './generators/lib' ).search_project_root( function ( root_path ){

    if( !root_path ) console.log( utils.$alert( 'err' ) + '   ' +
      '`server.js` not found, are you in the project? ');

    var test_functionals_path = root_path + '/test/functional'
    if( !fs.existsSync( test_functionals_path + '/run.js' )){
      return console.log( utils.$alert( 'err' ) + '   ' +
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
