function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var listTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total Number Of Cookies'];

function EachShop(name){
  this.name = name;
  this.minCust = 14 * getRandomIntInclusive(1, 3);
  this.maxCust = 14 * getRandomIntInclusive(9, 15);
  this.numberOfCookies = getRandomIntInclusive(15, 30);
  this.avgSale = this.numberOfCookies * ((this.minCust + this.maxCust) / 2);

};

EachShop.prototype.details = function(){
  //cookies_purchased_each_hour value
  var cookiesPerHour = [];
  for(var i = 0; i < 15; i++){
    cookiesPerHour.push(getRandomIntInclusive(6, 34));
  };
  return(cookiesPerHour);
};
var allShop = [new EachShop('1st and Pike'), new EachShop('SeaTac Airport'), new EachShop('Seattle Center'), new EachShop('Capitol Hill'), new EachShop('Alki')];

// console.log('pike places has sales every hour ' + all_shop[0].details());

var data = [];

for (i = 0; i < allShop.length; i++){
  data.push(
    '<td>' + allShop[i].name + '</td>' + '<td>' + allShop[i].minCust + '</td>' + '<td>' + allShop[i].maxCust + '</td>' + '<td>' + allShop[i].avgSale + '</td>'
  );
}
// console.log(-data);
// push data into table body of main table
var table = document.getElementById('main_table');
var newRow;

for ( i = 0; i < data.length; i++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[i];
  table.appendChild(newRow);
}

// push data in head of table id details

//push time line in table detail

var t = document.getElementById('thead');
var tarray = ['<td>Time</td>'];
for(i = 0; i < listTime.length; i++){
  tarray.push('<td>' + listTime[i] + '</td>');
}
console.log(tarray);
// push time array element into html
var x = tarray.join('');
var y = document.createElement('tr');
y.innerHTML = x;
t.appendChild(y);
allShop[0].details();

//push every hour sale

for(i = 0; i < allShop.length; i++){
  var totalNumberOfCookies = 0;
  var cookiesPerHour = ['<td>' + allShop[i].name + '</td>'];
  x = allShop[i].details();
  for(j = 0; j < x.length; j++){
    cookiesPerHour.push('<td>' + x[j] + '</td>');
    totalNumberOfCookies = x[j] + totalNumberOfCookies;
  };
  cookiesPerHour.push('<td>' + totalNumberOfCookies + '</td>');
  x = cookiesPerHour.join('');

  var coc = document.getElementById('cookies');
  var key = document.createElement('tr');
  key.innerHTML = x;
  coc.appendChild(key);

}
