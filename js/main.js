$(function() {
	// Crash varibles
	crashCymbolAll = $('#Cymbal');
	crashCymbol = $('#Crash-Cymbol');
	crashAudio = $('#Crash-Audio');
   
	// Crash timeline
	var crashtl = new TimelineMax({
		paused: true
	});
	crashtl.to(crashCymbol, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
	       .to(crashCymbol,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

	// Crash play
	window.crash = function() {
		crashtl.restart();
		crashtl.play();
		var crashAudioEl = crashAudio.get(0);
		crashAudioEl.currentTime = 0;
		crashAudioEl.play();
	}

	// Do the crash stuff when clicked/touched
	var clickTouchCrashDone = false;
	crashCymbolAll.on("touchstart click", function() {
		if(!clickTouchCrashDone) {
			clickTouchCrashDone = true;
			setTimeout(function() {
				clickTouchCrashDone = false;
			}, 100);
			crash();
			return false;
		}
	});    
    
});    