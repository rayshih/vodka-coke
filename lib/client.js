/**
 * Module dependencies.
 * @private
 */
var Class  = require( 'node.class' );
var logger = require( './utils' ).logger;

var Client = Class.extend({

  init : function ( file_name ){
    this.actions   = [];
    this.file_name = file_name;
  },

  build : function ( method, uri, action, handler ){
    if( !uri ){
      logger.log(
        UTILS.$alert( 'error   ' ) + 'uri not defined in action file `' + this.file_name + '`'
      );

      return process.exit( 0 );
    }

    if( action === undefined ){
      logger.log(
        UTILS.$alert( 'error   ' ) + 'action does not exist in action file `' + this.file_name + '` for uri `' + uri + '`'
      );

      return process.exit( 0 );
    }

    if( typeof handler === 'string' && !/#/g.test( handler )){
      logger.log(
        UTILS.$alert( 'error'    ) + 'wrong format of the handler `' + handler + '` in action file `' + this.file_name + '` for uri `' + uri + '`'
      );

      return process.exit( 0 );
    }

    this.actions.push({
      method  : method,
      uri     : uri,
      action  : action,
      handler : handler
    });
  },

  get : function ( uri, action, handler ){
    this.build( 'get', uri, action, handler );
  },

  post : function ( uri, action, handler ){
    this.build( 'post', uri, action, handler );
  },

  put : function ( uri, action, handler ){
    this.build( 'put', uri, action, handler );
  },

  'delete' : function ( uri, action, handler ){
    this.build( 'delete', uri, action, handler );
  },

  run : function ( action ){
    this.actions.push({
      method : 'run',
      action : action
    });
  }
});

/**
 * Exports module.
 */
module.exports = Client;
