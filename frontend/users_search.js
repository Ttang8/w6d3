const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.input = $el.find('input');
    this.ul = $el.ul;
    this.handleInput();
  }

  handleInput(){
    this.$el.on('input', e => {
      // console.logs(e);
      e.preventDefault();
      APIUtil.searchUsers(this.input.val()).then((arg)=> {
        console.log(arg);
      });
    });
  }
}

module.exports = UsersSearch;
