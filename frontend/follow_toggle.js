const APIUtil = require('./api_util.js');
class FollowToggle {

  constructor ($el, options) {
    this.userId = $el.data("user")|| options.userId;
    this.$el = $el;
    this.followState = ($el.data("follows") ||
    options.followState);
    // console.log(this.userId);
    // console.log(this.followState);
    this.render();
    this.handleClick();
  }


  render (){
    if (this.followState === 'Unfollow'){
      this.$el.html('Unfollow');
    }
    else{
      this.$el.html('Follow');
    }
  }


  handleClick(){
    // console.log('yea');
    this.$el.click(e => {
      this.$el.prop("disabled", true);
      // console.log(this.$el);
      e.preventDefault();
      if(this.followState === 'Follow'){
        APIUtil.followUser(this).then(() => {
          this.followState = 'Unfollow';
          this.render();
          this.$el.prop("disabled", false);
        });
      } else {
        APIUtil.unfollowUser(this).then(() =>{
          this.followState = 'Follow';
          this.render();
          this.$el.prop("disabled", false);
        });
      }
    });
  }
}
module.exports=FollowToggle;
