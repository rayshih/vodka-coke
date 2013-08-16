var fs = require( 'fs' );

var output = './log/test.log';

var ori_log = console.log;
console.log = function ( msg ){
  if( !output ){
    ori_log( msg );
    return;
  }

  if( typeof msg === 'object' ){
    msg = JSON.stringify( msg, null, '\t' );
  }

  fs.appendFileSync( output, msg + '\r\n' );
};

module.exports = {

  log : function ( msg ){
    ori_log( msg );
  },

  set_output : function ( o ){
    output = o;
  }
}
