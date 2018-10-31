describe('My first test', () => {
  let x;

  beforeEach(() => {
    x = '';
  });

  it('should be true if true', () => {
    x = 'hello';
    // expect(x).toEqual('hello');   // pass
    expect(x).toBe('hello');         // pass
    // expect(x).toMatch('he');      // pass
    // expect(x).toBeDefined();      // pass
    // expect(x).toBeUndefined();    // false
  });
});
