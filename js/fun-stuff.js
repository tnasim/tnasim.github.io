/**	
* Author: Tariq M Nasim	
**/

jQuery(function($){

	String.prototype.replaceAt = function(index, replacement) {
	    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
	}

	/**
	 * Interchange the initial letters of two words
	 * @author: Tariq M Nasim
	 */
	function performOdolBodol(input_text) {
	    var elements = input_text.split(" ");
	    if(elements.length > 2) {
	    	displayError("দয়া করে শুধুমাত্র দুটি শব্দই লিখুন");
	    	return -1;
	    } else if (elements.length < 2) {
	    	displayError("একটু কষ্ট করে আরেকটি শব্দ লিখুন");
	    	return -1;
	    }
	    var first_word = elements[0];
	    var second_word = elements[1];
	    var temp = first_word[0];
	    first_word = first_word.replaceAt(0, second_word[0]);
	    second_word = second_word.replaceAt(0, temp);
	    res = first_word.concat(' ', second_word);
		return res;
	}

	function displayError(err_txt) {
		$("#odol-bodol-output").css('color', 'red');
		$("#odol-bodol-output").text(err_txt);
	}

	$("#odol-bodol-btn").click(function() {
		var input_text = $("#odol-bodol-input").val();
	    var result = performOdolBodol(input_text);
	    if(result != -1) {
		    $("#odol-bodol-output").css('color', 'green');
		    $("#odol-bodol-output").text(result);
		}
	});
});
