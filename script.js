/*
*this program reads a file and modifies the data to be used as a 
*paramenter in a function
*/

//Initiate File System (fs)
var fs = require('fs');

//Remove the first two arguments from the command line
var argv = require('minimist')(process.argv.slice(2));

//Use 'readline' package to read the file passed through
//the command line, line by line
var lineRead = require('readline').createInterface(
	{ input: fs.createReadStream(argv.file, 'utf8')});

//Use 'fs' to ceate a write stream for writing to a file.
var output = fs.createWriteStream('output','utf8')

//Output string that will be written to a file after it is modified to
//complete the function

var funcString = "sendmany <fromaccount> {";

//On each line read this function is performed
lineRead.on('line', function(line) {

	//Split the line read from the file into an array of strings
	//using a delimeter ','
	var array = line.split(',');

	//The strings are then appended to the output string with
	//proper formating
	funcString += '"' + array[0] + '"' +":"+ '"'+ array[1]+ '",';
});

//Once the file is closed the output string is written to a file
lineRead.on('close', function(){

	//This line removes trhe extra comma at the end
	funcString = funcString.substring(0,funcString.length-1);

	//This line adds the last part of the function for send many	
	funcString += "} [minconf=1] [comment]";

	//This line writes to a file
	output.write(funcString);
});


