var deep_inverse_merge = function ( target, source ){
  Object.keys( source ).forEach(function ( key ){
    if( target[ key ]){
      if( typeof target[ key ] === 'object' &&
          typeof source[ key ] === 'object' ){

        // deep_merge
        deep_inverse_merge( target[ key ], source[ key ] )
      }

      // otherwise dont merge
    }else{
      // normal merge
      target[ key ] = source[ key ];
    }
  })
}

module.exports = deep_inverse_merge;
