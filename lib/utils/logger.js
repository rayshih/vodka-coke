var fs = require( 'fs' );

var output = './log/development.log';

var ori_log = console.log;
console.log = function ( msg ){
  if( !output ){
    ori_log( msg );
    return;
  }

  fs.appendFileSync( output, msg );
};

module.exports = {

  log : function ( msg ){
    ori_log( msg );
  },

  set_output : function ( o ){
    output = o;
  }
}
