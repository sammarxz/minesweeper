import { add } from './mathFunction';

describe('Math Functions', () => {
  it('check add function', () => {
    const result = add(2, 2);

    expect(result).toBe(4);
  });
});
