    const rewire = require("rewire");

    const functions = rewire("./functions");
    const moreFunctions = functions.__get__('moreFunctions');

    const doMagic = functions.__get__('doMagic');
    // const doMagicSpy = jest.spyOn(functions, 'doMagic');


    const getFalse = jest.spyOn(moreFunctions, 'getFalse');
    const getTrue = jest.spyOn(moreFunctions, 'getTrue');

    describe("testing inner functions ", () => {

      afterEach(() => {
        jest.clearAllMocks();
      });

      test('theExportedFunction calls doMagic with 1 returns false and does not call getTrue', () => {
        const result = functions.theExportedFunction(1);
        console.log('result: ' + result);
        expect(result).toBe(false);

        //expect(doMagic).toBeCalledTimes(1); // this blows up
        expect(getTrue).toHaveBeenCalledTimes(0);
        expect(getFalse).toHaveBeenCalledTimes(1);
      });

      test('theExportedFunction calls doMagic with 2 returns true and does not call getFalse', () => {
        const result = functions.theExportedFunction(2);
        console.log('result: ' + result);
        expect(result).toBe(true);

        //expect(doMagic).toBeCalledTimes(1); // this blows up
        expect(getTrue).toHaveBeenCalledTimes(1);
        expect(getFalse).toHaveBeenCalledTimes(0);
      });

      // This works
      test('just testing to see if i can call the doMagic function', () => {
        const result = doMagic(2);
        expect(result).toBe(true);

        expect(getTrue).toHaveBeenCalledTimes(1);
        expect(getFalse).toHaveBeenCalledTimes(0);
      });
    });
