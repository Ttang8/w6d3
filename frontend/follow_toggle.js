const APIUtil = require('./api_util.js');
class FollowToggle {

  constructor ($el) {
    this.userId = $el.data("user");
    this.followState = $el.data("follows");
    this.$el = $el;
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
    this.$el.click(e => {
      this.$el.prop("disabled", true);
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
