var path    = require( 'path' );
var resolve = path.resolve;
var should  = require( 'should' );
var _global = require( '../../lib/global' );

module.exports = function (){
  _global( resolve( __dirname, '../functional' ));
  global.should.have.property( 'VODKA_BASE_DIR' );
  global.should.have.property( 'VODKA_ACTION_DIR' );
  global.should.have.property( 'VODKA_HANDLER_DIR' );
  global.should.have.property( 'FIXTURE_DIR' );
  global.should.have.property( 'CONF' );
  console.log( 'global tests passed' );
};
