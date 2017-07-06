const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find('input.search');
    this.$ul = $el.find('ul.users');
    this.handleInput();
  }

  renderResults(users){
    // console.log(this.$ul);
    this.$ul.empty();
    // console.log (users);
    users.forEach((user)=>{

      const $li = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      const $follow = $(`<button class="follow-toggle"></button>`);
      const options = {followState: user.followed ? 'Unfollow' : 'Follow',
      userId: user.id};
      new FollowToggle($follow,options);
      $li.append($follow);
      this.$ul.append($li);
    });
  }

  handleInput(){
    this.$el.on('input', e => {
      // console.logs(e);
      e.preventDefault();
      APIUtil.searchUsers(this.$input.val()).then((arg)=> {
        // console.log(arg);
        this.renderResults(arg);
      });
    });
  }
}

module.exports = UsersSearch;
