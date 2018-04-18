import OVER_NINE_THOUSAND from '../src';

const NINE_THOUSAND = 9000;

test('it should be over 9,000', () => {
  expect(OVER_NINE_THOUSAND).toBeGreaterThan(NINE_THOUSAND);
  expect(OVER_NINE_THOUSAND).not.toEqual(NINE_THOUSAND);
  expect(OVER_NINE_THOUSAND).not.toBeLessThan(NINE_THOUSAND);
  expect(OVER_NINE_THOUSAND).not.toBeGreaterThan(Number.MAX_SAFE_INTEGER);
});
