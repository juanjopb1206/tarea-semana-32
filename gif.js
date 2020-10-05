(function () {
	

	var supportsVideo = !!document.createElement('video').canPlayType;

	if (supportsVideo) {
		
		var videoContainer = document.getElementById('videoContainer');
		var video = document.getElementById('video');
		var videoControls = document.getElementById('video-controls');

		
		video.controls = false;

		videoControls.setAttribute('data-state', 'visible');

		var playpause = document.getElementById('playpause');
		

	
		if (document.addEventListener) {
		
			video.addEventListener('loadedmetadata', function() {
				progress.setAttribute('max', video.duration);
			});

			
			var changeButtonState = function(type) {
			
				if (type == 'playpause') {
					if (video.paused || video.ended) {
						playpause.setAttribute('data-state', 'play');
					}
					else {
						playpause.setAttribute('data-state', 'pause');
					}
				}
				
			}

			
			
			playpause.addEventListener('click', function(e) {
				if (video.paused || video.ended) video.play();
				else video.pause();
			});			

			
		}
	 }

 })();