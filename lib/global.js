/**
 * Exports module.
 */
module.exports = function ( base_dir ){

/**
 * Exports module as getter to global.
 */

  global.__defineGetter__( 'VODKA_BASE_DIR', function (){
    return base_dir;
  });

  global.__defineGetter__( 'VODKA_ACTION_DIR', function (){
    return base_dir + '/actions';
  });

  global.__defineGetter__( 'VODKA_MOCK_DIR', function (){
    return base_dir + '/mocks';
  });

  global.__defineGetter__( 'VODKA_HANDLER_DIR', function (){
    return base_dir + '/handlers';
  });

  global.__defineGetter__( 'FIXTURE_DIR', function (){
    return base_dir + '/fixtures';
  });

  var ORIGIN_CONF        = global.CONF;
  var deep_inverse_merge = require( './utils/deep_inverse_merge' );

  global.__defineGetter__( 'CONF', function (){
    var conf = require( base_dir + '/configs' );
    if( ORIGIN_CONF ){
      deep_inverse_merge( conf, ORIGIN_CONF );
    }

    return conf;
  });
};
