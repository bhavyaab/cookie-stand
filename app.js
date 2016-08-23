function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ONE create object with properties of an array, a string, an integer, and a method

// variable that generate a min or max number of customer each time it is called.
var shop = {
  min_hourly_customers: getRandomIntInclusive(0, 5),
  max_hourly_customers: getRandomIntInclusive(7, 12),
  average_cookies_per_customer: getRandomIntInclusive(1, 5),

// average customer per hour generated
  customers_per_hour: function(){
    return ((this.min_hourly_customers + this.max_hourly_customers) / 2);
  },
  total_cookies_purchased_each_hour: function() {
    return (this.customers_per_hour() * this.average_cookies_per_customer * getRandomIntInclusive(0.1, 5));
  }
};

var cookies_per_hour = [];
for(var i = 0; i < 15; i++){
  cookies_per_hour.push(shop.total_cookies_purchased_each_hour());
             //total_cookies_purchased_each_hour value
};


var total_Number_Of_Cookies = 0;
for(var j = 0; j < cookies_per_hour.length; j++){
  total_Number_Of_Cookies = (total_Number_Of_Cookies + cookies_per_hour[j]);
};
console.log('total = ' + total_Number_Of_Cookies);

//DOM ul element
function dom(){
  var list = document.createElement('ul');

  var list_time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  console.log(list_time);
  console.log(cookies_per_hour);

  var list_arr = [];
  for (var l = 0; l < cookies_per_hour; l++){
    list_arr.push('<li>' + list_time[l] + ' - ' + cookies_per_hour[l] + '</li>');
  }

  var full_list = list_arr.join('');

  list.innerHTML = full_list;
  document.body.appendChild(list);
}

//call dom function
dom();
