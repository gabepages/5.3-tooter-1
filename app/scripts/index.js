var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

function hello(){
  return 'hello world';
}

module.exports = {"hello": hello};

$('#submit').on('click', function(event){
  $(document).trigger('create:post', [{title: "Cool", body: "Cool"}]);
})
