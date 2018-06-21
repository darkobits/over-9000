describe('over-9000', () => {
  const NINE_THOUSAND = 9000;
  let NUM_PASSING_TESTS = 0;

  for (let i = 1; i <= NINE_THOUSAND + 1; i++) {
    jest.resetModules();

    const OVER_NINE_THOUSAND = require('./over-9000').default; // tslint:disable-line no-require-imports

    describe(`#${i}: ${OVER_NINE_THOUSAND}`, () => {
      it('shall be a number', () => {
        expect(typeof OVER_NINE_THOUSAND).toBe('number');
      });

      it('shall be an integer', () => {
        expect(Math.round(OVER_NINE_THOUSAND)).toBe(OVER_NINE_THOUSAND);
      });

      it('shall be a safe integer', () => {
        expect(OVER_NINE_THOUSAND).not.toBeGreaterThan(Number.MAX_SAFE_INTEGER);
      });

      it('shall not be less than nine thousand', () => {
        expect(OVER_NINE_THOUSAND).not.toBeLessThan(NINE_THOUSAND);
      });

      it('shall not be exactly nine thousand', () => {
        expect(OVER_NINE_THOUSAND).not.toEqual(NINE_THOUSAND);
      });

      it('shall be OVER NINE THOUSAND', () => {
        expect(OVER_NINE_THOUSAND).toBeGreaterThan(NINE_THOUSAND);
      });

      ++NUM_PASSING_TESTS;
    });
  }

  it('shall not have been tested fewer than nine thousand times', () => {
    expect(NUM_PASSING_TESTS).not.toBeLessThan(NINE_THOUSAND);
  });

  it('shall not have been tested exactly nine thousand times', () => {
    expect(NUM_PASSING_TESTS).not.toEqual(NINE_THOUSAND);
  });

  it('shall have been tested OVER NINE THOUSAND times', () => {
    expect(NUM_PASSING_TESTS).toBeGreaterThan(NINE_THOUSAND);
  });
});
