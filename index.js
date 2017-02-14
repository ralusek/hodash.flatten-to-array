/**
 *
 */
module.exports = function flattenToArray(iter, config) {
  config = config || {};

  const output = []
  
  // Explicitly set function rather than check conditional within for performance
  // reasons.
  const addToOutput = config.formatter ?
    (item) => output.push(config.formatter(item)) :
    (item) => output.push(item);

  if (!config.deep) {
    iter.forEach(item => {
      // Duck typing for flatten. Does not confirm if function.
      if (item.forEach) item.forEach(addToOutput);
      else addToOutput(item);
    });
  }
  else deepFlattenToArray(iter, addToOutput);
  
  return output;
}

/**
 *
 */
function deepFlattenToArray(iter, addToOutput) {
  iter.forEach(item => {
    // Duck typing for flatten. Does not confirm if function.
    if (item.forEach) deepFlattenToArray(item, addToOutput);
    else addToOutput(item);
  });
}