const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  const $el = $('button.follow-toggle');
  const $userSearch = $('.users-search');

  $el.each((THISTHINGDOESNTMATTER, button)=>{
    new FollowToggle($(button));
  });
  $userSearch.each((Youaremeaningless, search)=>{
    new UsersSearch($(search));
  });



});
