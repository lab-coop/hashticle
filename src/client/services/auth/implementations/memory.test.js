import auth from './memory';

describe('AuthService', () => {
  const AuthService = new auth();
  const username = 'test';
  const password = 'pass';

  let user;

  beforeEach((done) => {
    AuthService.addUser(username, password);
    AuthService.login(username, password);
    AuthService.onAuthStateChanged((userArg) => {
      user = userArg;
      done();
    });
  });

  it('should call a state change method initially', () => {
    expect(user.username).toEqual(username);
  });

  it('should call a state change method when I login', () => {
    AuthService.logout();
    AuthService.login(username, password);
    expect(user.username).toEqual(username)
  });

  it('should call a state change method when I logout', () => {
    AuthService.logout();
    expect(user).toBeFalsy()
  });

});
