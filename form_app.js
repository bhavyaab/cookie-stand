var table = document.getElementById('reviewsLog');
var form = document.getElementById('reviewForm');

function Customer_feed_back(first, last, email, comments, likesCookies, likesService, reffer){
  this.first = first;
  this.last = last;
  this.email = email;
  this.comments = comments;
  this.likesCookies = likesCookies;
  this.likesService = likesService;
  this.reffer = reffer;

};
var data = [];

function postEvent(event){
  event.preventDefault();

  var first = event.target.first.value;
  var last = event.target.last.value;
  var email = event.target.email.value;
  var comments = event.target.comments.value;
  var likesCookies = event.target.likesCookies.checked;
  var likesService = event.target.likesService.checked;
  var reffer = event.target.reffer.value;

  data.push(new Customer_feed_back(first, last, email, comments, likesCookies, likesService, reffer));
  createTable();
  form.reset();
};
console.log(data);
function createTable (){
  var rows;
  for (var i = 0; i < data.length; i++){
    rows = document.createElement('tr');
    rows.innerHTML = '<td>' + '<p>' + data[i].first + ' ' + data[i].last + '</p>' + '<p>' + data[i].email + '</p>' + '</td>' + '<td>' + data[i].comments + '</td>' + '<td>' + '<p>' + data[i].likesCookies + ' ' + data[i].likesService + '</p>' + '</td>' + '<td>' + data[i].reffer + '</td>';
  }
  console.log(data);
  console.log(rows);
  table.appendChild(rows);
};

form.addEventListener('submit', postEvent);
