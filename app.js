// Calculate Fibonacci sequence based on the array length
function fib(n) {
	//clear previous Result
	document.getElementById('fib1').innerHTML = "";
	if (n.length == 0) { //prevents empty input field
		document.getElementById('fib1').innerHTML = "Please enter a number.";
	} else {
	var arr = []; //define array
	if (n == 1) {
		arr.push(0); //In the case if input is 1
	} else {
		arr.push(0, 1); //defines array before loop
	}
	// var i = arr.length; counter for while loop
	// while (i < n) --- while loop example
	for (i = arr.length; i < n; i++) { //counter can increase with ++ operator
		var a = arr[arr.length - 1] + arr[arr.length - 2]; //calculation
		arr.push(a); //updates array
		// i = arr.length; updated counter in while loop
	}
	var barr = arr.join(", ");
	if (n <= 0) {
		document.getElementById('fib1').innerHTML = "Invalid entry. Try again.";
	} else {
		document.getElementById('fib1').innerHTML = n + ' numbers in Fibonacci sequence are: ' + barr;
	}}
}
// Calculate Fibonacci sequence from 0 to a specific number and array length
function fibo(x) {
	//clearResult();
	document.getElementById('fib2').innerHTML = "";
	document.getElementById('fib3').innerHTML = "";
	if (x.length == 0) {
		document.getElementById('fib3').innerHTML = "Please enter a number.";
	} else {
	var arra = []; //defining array
	if (x === 0) { //when 0 is entered
		arra.push(0);
	} else if (x == 1) { //when 1 is entered
		arra.push(0, 1, 1);
	} else { //runs the code
		arra.push(0, 1); //starting array
		var i = arra[arra.length - 1]; //counter
		while (i < x) { //while loop for adding values to array
		var a = arra[arra.length - 1] + arra[arra.length - 2]; //actuall calculation
		arra.push(a); //pushing result to the end of array
		i = arra[arra.length - 1]; //updating counter value
		}
		if (arra[arra.length - 1] > x) { //excluding larger numbers
			arra.pop();
		}
	} //displaying result on HTML
	var barra = arra.join(", ");
	
	if (x < 0) {
		document.getElementById('fib2').innerHTML = 'Invalid entry. Try again!';
	} else {
		document.getElementById('fib2').innerHTML = 'Fibonacci sequence up to ' + x + ' is: ' + barra;
		document.getElementById('fib3').innerHTML = 'Total numbers in this sequence: ' + arra.length;
	}}
}

// Retrieves the n-th number from Fibonacci sequence
function fibon(y) {
	//clearResult();
	document.getElementById('fib4').innerHTML = "";
	if (y.length == 0) {
		document.getElementById('fib4').innerHTML = "Please enter a number.";
	} else {
	var seq = []; //define array
	if (y <= 0) {
		seq = "Invalid entry. Try again!"; //exclude 0 and negative numbers
	} else if (y === 1) {
		seq.push(0); //In the case if input is 1
	} else {
		seq.push(0, 1); //defines array before loop
	}
	// var i = seq.length; counter for while loop
	// while (i < y) --- while loop example
	for (i = seq.length; i < y; i++) { //counter can increase with ++ operator
		var a = seq[seq.length - 1] + seq[seq.length - 2]; //calculation
		seq.push(a); //updates array
		// i = seq.length; updated counter in while loop
	}

	function ordinalSuffix(z) { //returns input number + ordinal suffix
    var j = z % 10,
        k = z % 100;
    if (j == 1 && k != 11) {
        return z + "st";
    }
    if (j == 2 && k != 12) {
        return z + "nd";
    }
    if (j == 3 && k != 13) {
        return z + "rd";
    }
    return z + "th";
	}
	var ord = ordinalSuffix(y); //ordinal number suffix string

	if (y <= 0) { //excludes 0 and negative numbers
		document.getElementById('fib4').innerHTML = 'Invalid entry. Try again!';
	} else { //displays the result on HTML
		var fnum = seq.pop();
		document.getElementById('fib4').innerHTML = 'The ' + ord + ' number in Fibonacci sequence is: ' + fnum;
	}}
}

function darkToggle() {
	// toggle dark/light mode
	var element = document.body;
	var fibDark = document.getElementsByClassName("appArea");
	element.classList.toggle("darkMode");
	//fibDark.classList.toggle("fibonacciDark");
}

function encod(h) {
	var enctext = document.getElementById("entry").value;
	var passphr = document.getElementById("pass").value;
	var encrypted = CryptoJS.AES.encrypt(enctext, passphr);
    var decrypted = CryptoJS.AES.decrypt(enctext, passphr);
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    var res1;
    if (h === 0) {
    	res1 = encrypted;
    } else {
    	res1 = decrypted.toString(CryptoJS.enc.Utf8);
    }
    document.getElementById("result").value = res1;
    /*document.getElementById("demo1").innerHTML = encrypted;
	document.getElementById("demo2").innerHTML = decrypted;
	document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);*/
}

function numerology() {
	var birth = document.getElementById('birth').value;
	if (typeof birth == 'number') {
		var birthStr = birth.toString();
	} else {
		var birthStr = birth;
	}
	
	var birArr = birthStr.split("");
	var lifPatSum = birArr.reduce(function(a, b){
		return a + b;
	},0);
	var lifePath = lifPatSum % 9;
	if (lifePath === 0) {
		lifePath += 9;
	} else {
		lifePath = lifePath;
	}
	document.getElementById("lifePath").innerHTML = lifePath;
}

function info() {
	var info={
	timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,
    pageon(){return window.location.pathname},
    referrer(){return document.referrer},
    previousSites(){return history.length},
    browserName(){return navigator.appName},
    browserEngine(){return navigator.product},
    browserVersion1a(){return navigator.appVersion},
    browserVersion1b(){return navigator.userAgent},
    browserLanguage(){return navigator.language},
    browserOnline(){return navigator.onLine},
    browserPlatform(){return navigator.platform},
    javaEnabled(){return navigator.javaEnabled()},
    dataCookiesEnabled(){return navigator.cookieEnabled},
    dataCookies1(){return document.cookie},
    dataCookies2(){return decodeURIComponent(document.cookie.split(";"))},
    dataStorage(){return localStorage},
    sizeScreenW(){return screen.width},
    sizeScreenH(){return screen.height},
    sizeDocW(){return document.width},
    sizeDocH(){return document.height},
    sizeInW(){return innerWidth},
    sizeInH(){return innerHeight},
    sizeAvailW(){return screen.availWidth},
    sizeAvailH(){return screen.availHeight},
    scrColorDepth(){return screen.colorDepth},
    scrPixelDepth(){return screen.pixelDepth},
    latitude(){return position.coords.latitude},
    longitude(){return position.coords.longitude},
    accuracy(){return position.coords.accuracy},
    altitude(){return position.coords.altitude},
    altitudeAccuracy(){return position.coords.altitudeAccuracy},
    heading(){return position.coords.heading},
    speed(){return position.coords.speed},
    timestamp(){return position.timestamp},
};
	document.getElementById('res01').innerHTML = "Time this page was opened: " + info.timeOpened;
	document.getElementById('res02').innerHTML = "Timezone: " + info.timezone;
	document.getElementById('res03').innerHTML = "Current page: " + info.pageon();
	document.getElementById('res04').innerHTML = "Referrer: " + info.referrer();
	document.getElementById('res05').innerHTML = "Previous sites: " + info.previousSites();
	document.getElementById('res06').innerHTML = "Browser's name: " + info.browserName();
	document.getElementById('res07').innerHTML = "Browser's Engine: " + info.browserEngine();
	document.getElementById('res08').innerHTML = "Browser's version 1a: " + info.browserVersion1a();
	document.getElementById('res09').innerHTML = "Browser's version 1b: " + info.browserVersion1b();
	document.getElementById('res10').innerHTML = "Browser's language: " + info.browserLanguage();
	document.getElementById('res11').innerHTML = "Browser online: " + info.browserOnline();
	document.getElementById('res12').innerHTML = "Browser platform: " + info.browserPlatform();
	document.getElementById('res13').innerHTML = "Java enabled: " + info.javaEnabled();
	document.getElementById('res14').innerHTML = "Cookies enabled: " + info.dataCookiesEnabled();
	document.getElementById('res15').innerHTML = "Cookies 1: " + info.dataCookies1();
	document.getElementById('res16').innerHTML = "Cookies 2: " + info.dataCookies2();
	document.getElementById('res17').innerHTML = "Data storage: " + info.dataStorage();
	document.getElementById('res18').innerHTML = "Screen width: " + info.sizeScreenW();
	document.getElementById('res19').innerHTML = "Screen height: " + info.sizeScreenH();
	document.getElementById('res20').innerHTML = "Document width: " + info.sizeDocW();
	document.getElementById('res21').innerHTML = "Document height: " + info.sizeDocH();
	document.getElementById('res22').innerHTML = "Inner width: " + info.sizeInW();
	document.getElementById('res23').innerHTML = "Inner height: " + info.sizeInH();
	document.getElementById('res24').innerHTML = "Available width: " + info.sizeAvailW();
	document.getElementById('res25').innerHTML = "Available height: " + info.sizeAvailH();
	document.getElementById('res26').innerHTML = "Screen color depth: " + info.scrColorDepth();
	document.getElementById('res27').innerHTML = "Screen pixel depth: " + info.scrPixelDepth();
	document.getElementById('res28').innerHTML = "Latitude: " + info.latitude();
	document.getElementById('res29').innerHTML = "Longitude: " + info.longitude();
	document.getElementById('res30').innerHTML = "Accuracy: " + info.accuracy();
	document.getElementById('res31').innerHTML = "Altitude: " + info.altitude();
	document.getElementById('res32').innerHTML = "Altitude accuracy: " + info.altitudeAccuracy();
	document.getElementById('res33').innerHTML = "Heading: " + info.heading();
	document.getElementById('res34').innerHTML = "Speed: " + info.speed();
	document.getElementById('res35').innerHTML = "Timestamp: " + info.timestamp();
}