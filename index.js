'use strict';


/**
 *
 */
module.exports = function(iter) {
  const output = [];
  iter.forEach(item => {
    // Duck typing for flatten. Does not confirm if function.
    if (item.forEach) {
      item.forEach(item => output.push(item));
    }
    else output.push(item);
  });
  return output;
};
