function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var list_time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total Number Of Cookies'];

function Each_shop(name){
  this.name = name;
  this.min_cust = 14 * getRandomIntInclusive(1, 3);
  this.max_cust = 14 * getRandomIntInclusive(9, 15);
  this.number_Of_Cookies = getRandomIntInclusive(15, 30);
  this.avg_sale = this.number_Of_Cookies * ((this.min_cust + this.max_cust) / 2);

};

Each_shop.prototype.details = function(){
  //cookies_purchased_each_hour value
  var cookies_per_hour = [];
  for(var i = 0; i < 15; i++){
    cookies_per_hour.push(getRandomIntInclusive(6, 34));
  };
  return(cookies_per_hour);
};
var all_shop = [new Each_shop('1st and Pike'), new Each_shop('SeaTac Airport'), new Each_shop('Seattle Center'), new Each_shop('Capitol Hill'), new Each_shop('Alki')];

// console.log('pike places has sales every hour ' + all_shop[0].details());

var data = [];

for (i = 0; i < all_shop.length; i++){
  data.push(
    '<td>' + all_shop[i].name + '</td>' + '<td>' + all_shop[i].min_cust + '</td>' + '<td>' + all_shop[i].max_cust + '</td>' + '<td>' + all_shop[i].avg_sale + '</td>'
  );
}
// console.log(data);
// push data into table body of main table
var table = document.getElementById('main_table');
var new_row;

for ( i = 0; i < data.length; i++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[i];
  table.appendChild(new_row);
}

// push data in head of table id details

//push time line in table detail

var t = document.getElementById('thead');
var tarray = ['<td>Time</td>'];
for(i = 0; i < list_time.length; i++){
  tarray.push('<td>' + list_time[i] + '</td>');
}
console.log(tarray);
// push time array element into html
var x = tarray.join('');
var y = document.createElement('tr');
y.innerHTML = x;
t.appendChild(y);
all_shop[0].details();

//push every hour sale

for(i = 0; i < all_shop.length; i++){
  var total_Number_Of_Cookies = 0;
  var cookies_per_hour = ['<td>' + all_shop[i].name + '</td>'];
  x = all_shop[i].details();
  for(j = 0; j < x.length; j++){
    cookies_per_hour.push('<td>' + x[j] + '</td>');
    total_Number_Of_Cookies = x[j] + total_Number_Of_Cookies;
  };
  cookies_per_hour.push('<td>' + total_Number_Of_Cookies + '</td>');
  x = cookies_per_hour.join('');

  var coc = document.getElementById('cookies');
  var key = document.createElement('tr');
  key.innerHTML = x;
  coc.appendChild(key);

}
