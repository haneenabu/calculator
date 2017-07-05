//Business Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var BMI = function (number1, number2) {
  return (number1/(number2*number2)) * 703;
}

var number1 = parseInt(prompt("enter your weight (lbs): "));
var number2 = parseInt(prompt("enter height(in): "));

var result = BMI(number1, number2);
alert(result);

//this is a comment

/*var age = prompt ("enter your age: ");
var name = prompt("enter your name: ");
var faveFood = prompt("enter your favorite food");

var greeting = function(whattosay) {
  alert(whattosay);
}
greeting("Hi " + name + "! Your are " + age + " years old! And your favorite food is " + faveFood);

var remainder = function(number1, number2) {
	return number1 % number2
}

var threeTimes = function(number1, number2, number3){
	return number1 * number2 * number3
}
*/
