/**
 * i-compare-strings 
 * Constant time string comparison
 * Copyright 2016 Skevos Papamichail
 * Licensed under MIT license
 */
module.exports = ICompareStrings;

/**
 * Compare two strings in constant time
 * @param {String} string1
 * @param {String} string2
 * @param {Boolean} caseSensitive (Default is true)
 * @return {Boolean} 
 */
function ICompareStrings(string1, string2, caseSensitive = true){
	var result = 0;
	
	//if parameters are not string return false
	if(typeof string1 !== 'string' || typeof string2 !== 'string') return false;
	
	//if string lengths do not match return false
	if(string1.length !== string2.length) return false;
	
	//if you perform a case insensitive comparison transform 
	//strings to lower case
	if(!caseSensitive){
		string1 = string1.toLowerCase();
		string2 = string2.toLowerCase();
	}
	
	//compare strings
	for(var i = 0; i < string1.length; i++){
		result |= string1.charCodeAt(i) ^ string2.charCodeAt(i)
	}
	
	//return result
	return result === 0;
}