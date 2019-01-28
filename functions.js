    const moreFunctions = require("./moreFunctions");

    const theExportedFunction = someNumber => {
      return doMagic(someNumber);
    };

    function doMagic(someNumber) {
      if (someNumber % 2 === 0) {
        return moreFunctions.getTrue();
      }
      return moreFunctions.getFalse();
    }

    module.exports = { theExportedFunction };
