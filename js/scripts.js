function Ticket(movie, time, age) {
  this.movie = movie;
  this.time= time;
  this.age = age;
}

Ticket.prototype.ticket = function() {
  var cost =""
    return this.movie + " " + this.lastName;

  if (this.time === "matinee") {
    cost.push("$7.50")
  }
  else if (this.age === "child" || age === "senior") {
    cost.push("$9.00")
  }
  else {
  cost.push("12.00")
  return 0;
}
}

$(document).ready(function() {
  var totalPrice = 0;
  $('form#moviePurchase').submit(function(event) {
      event.preventDefault();

      var movie = $('select#movie').val();
      var time = $('select#time').val();
      var age = $('select#age').val();
      var newTicket = new Ticket(movie, time , age);

      var result = [];

      result.push(newTicket);


    
    })
      });
