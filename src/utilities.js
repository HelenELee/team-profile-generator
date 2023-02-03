//validates email - used in questions.js
function validateEmail(email) {
	
	var regexp =  /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.\'])+\.([A-Za-z]{2,18})$/;
	if (!regexp.test(email))	{
		return false;
	}else {
		return true;	
	}
}

module.exports = validateEmail;