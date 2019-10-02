function twit1() {
	if (!jQuery) {
		setTimeout(twit1,500);
		return;
	}
	jQuery.noConflict();
	$ = jQuery;
	// $('.css-19t94o4').click();
	console.log('test');
	// $($('.css-1dbjc4n [role=button] span:contains(Follow)')[0]).click();
	 $($('[role=button] span:contains(Follow)')[0]).click();
}

setTimeout(twit1,5000);

