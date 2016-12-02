import auth from './auth'

describe('Auth', () => {

  it('should execute state change', async () => {
    const callback = (data) => expect(data).toEqual('test');
    await auth.executeStateChange(callback, 'test');
  });

  it('should ignore the execution', async () => {
    const callback = null;
    const result = await auth.executeStateChange(callback, 'test');
    expect(result).toBeFalsy();
  });

});
