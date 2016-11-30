'use strtic';

module.exports = function () {

  this.Given('these user credentials', async function(users) {
    const authService = this.container.get('authService');
    for(let user of users.hashes()) {
      await authService.addUser(user.username, user.password)
    }
  });

  this.When('I login as "$username" with password "$password"', async function (username, password) {
    const usernameField = this.context.currentPage
      .find('.login-username')
      .find({name:'username'});
    const passwordField = this.context.currentPage
      .find('.login-password')
      .find({name:'password'});

    const button = this.context.currentPage
      .find('button')

    const usernameEvent = {target: {value: username}};
    usernameField.simulate('change', usernameEvent);

    const passwordEvent = {target: {value: password}};
    passwordField.simulate('change', passwordEvent);

    button.simulate('click');
  })


}
