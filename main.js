// Triple Five
var tripleFive = function() {
	for(i = 0; i <= 2; i++) {
		console.log('Five!')
	};
};

tripleFive();


//Last Letter
var lastLetter = function(s) {
	return s.charAt(s.length-1);
};

var letter = lastLetter('island');
console.log(letter)

//Square 
var square = function(x) {
	return x * x;
};

var squareAnswer = square(5);
console.log(squareAnswer);

// Negate 
var negate = function(x) {
	if (x === 0) {
		return "Please enter a number other than zero";
	}	
	else  {
		return x * -1;
	}
};


//Array
var toArray = function(x, y, z) {
	var newArray = [x, y, z];

	return newArray;

};

// Starts With
var startsWithA = function(s) {
	if(s.charAt(0).toUpperCase() === "A") {
		return true;
	}
	return false;
	
};

// Excite
var excite = function(s) {
	return s + '!!!';
};

// Sun
var sun = function(s) {
	if (s.indexOf('sun') !== -1 ) {
		return true;
	}
	return false;
};

// Tiny
var tiny = function(x) {
	if (x > 0 && x < 1) {
		return true;
	}
	 return false;
};

// Get Seconds
var getSeconds = function(t) {
	var time = t.split(":");
	return time[0] * 60 + parseInt(time[1]);
};
