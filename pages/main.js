const { I } = inject();

module.exports = {
    fields: {
        password : ('#edit-pass'),
        username : ('#edit-name'),
    },
    loginButton : '#edit-submit',

    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    }
}
