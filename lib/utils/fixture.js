/*!
 * vodka
 * Copyright(c) 2012 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * Get or set teseting data.
 */

/**
 * Module dependencies.
 * @private
 * @require
 */
var fs = require( 'fs' );

/**
 * Get or set teseting data.
 * @public
 * @this {utils}
 * @param {String} name Name of the fixture.
 * @returns {Object} Returns the fixture.
 * @example
 *
 *     var user = utils.fixture( 'user' );
 */
var fixture = function ( name, val ){
  var path = FIXTURE_DIR + '/' + name + '.json';

  return val ?
    fs.writeFileSync( path, JSON.stringify( val, null, 2 )) :
    JSON.parse( fs.readFileSync( path ));

};

var log_enabled = false;

var logger = require( './logger' );

var log = function ( msg ){
  if( log_enabled ){
    logger.log( msg );
  }
};

/**
 * Exports module.
 */
var printout_fixture_content = true;

var load_fixture = function ( name, content ) {
  if( content ) {
    log( 'write fixture to ' + name );
    if( printout_fixture_content ){
      log( 'with content: ' );
      log( content );
    }
  }else{
    log( 'read fixture from ' + name );
  }
  out = fixture( name, content );

  if( !content && (!out || out.length === 0) ) {
    log('no content');
  }

  return out;
};

load_fixture.enable_log = function ( enabled ){
  log_enabled = enabled;
};

module.exports = load_fixture;
