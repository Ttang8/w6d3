const APIUtil = {
  followUser: id => (
    $.ajax({
      method: 'POST',
      url: `/users/${id.userId}/follow`,
      dataType: "JSON",
      data: {user_id:id.userId}
    })
  ),

  unfollowUser: id => (
    $.ajax({
      method: 'DELETE',
      url: `/users/${id.userId}/follow`,
      dataType: "JSON",
      data: {user_id:id.userId}
    })
  ),

  searchUsers: (queryVal, success) => (
    $.ajax({
      method: 'GET',
      url: '/users/search',
      dataType: "JSON",
      data: {query: queryVal}
    })
  )
};

module.exports = APIUtil;
