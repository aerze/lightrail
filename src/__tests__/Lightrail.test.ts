import Lightrail from '../index';

test('Lightrail', () => {
  const rail = new Lightrail();

  expect(rail.app).toBeTruthy();
});
