/**
 * jsFrontend Audio API
 *
 * Currently works only in Chrome and Safari. Firefox is working to support it.
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
audioAPI =
{
	bufferList: '',
	context: '',
	loadCount: 0,
	init: function()
	{
		/*
		try
		{
			// init context
			audioAPI.context = new webkitAudioContext();

			// when not using webkit
			// audioAPI.context = new AudioContext();
		}
		catch(e)
		{
			alert('Web audio is not available in this browser');
			return;
		}
		
		gainNode = audioAPI.context.createGainNode();
		gainNode.connect(audioAPI.context.destination);
		gainNode.gain.value = 0.5;
		tempNode = audioAPI.context.destination;
		
		// set up the buffer loader
		bufferLoader = audioAPI.load(audioAPI.context,
		[
			'music1.mp3'
		], audioAPI.finishedLoading);
		*/

		// load audio file
		// audioAPI.loadAudioFile('music1.mp3');
	},
	/*
	loadBuffer: function(playlist)
	{
		console.log('bufferloader');
		// init bufferList
		bufferList = new Array();

		// define variables
		audioAPI.bufferList = playlist;
		audioAPI.loadCount = 0;

		bufferLoader.load(audioAPI, urlList);
	},
	
	/**
	 * Finished loading
	 *
	 * @param bufferList
	 */
	/*
	finishedLoading: function(bufferList)
	{
		audioAPI.bufferList = bufferList;
		sources = new Array();
		
		reverbNode = audioAPI.context.createConvolver();
		reverbNode.buffer = bufferList[0];
		reverbGainNode = audioAPI.context.createGainNode()
		reverbGFainNode.gain.value = 0.5;
		reverbNode.connect(reverbGainNode);
		reverbGainNode.connect(audioAPI.context.destination);
		gainNode.connect(reverbNode);
		tempNode = gainNode;
		
		for(var i = 1; i < audioAPI.bufferList.length; i++)
		{
			sources[i] = audioAPI.context.createBufferSource();
			
			sources[i].buffer = audioAPI.bufferList[i];
			
			// create a buffer for each loaded file
			sources[i].connect(tempNode);
			sources[i].loop = true;
			sources[i].playbackRate.value = 0.5;
			sources[i].start(0);
		}
	},

	/**
	 * Load audio file
	 *
	 * @param string URL
	 */
	/*
	loadAudioFile: function(URL)
	{
		// init request
		var request = new XMLHttpRequest();

		// open URL asynchronous (true)
		request.open('get', URL, true);

		// open as type
		request.responseType = 'arraybuffer';

		// audio is loaded
		request.onload = function()
		{
			// decode
			audioAPI.context.decodeAudioData(request.response, function(incomingBuffer)
			{
				var playAudioFile = function(incomingBuffer)
				{
					var source = audioAPI.context.createBufferSource();
					source.buffer = buffer;
					source.connect(audioAPI.context.destination);
					
					// play sound immediately
					source.start(0);
				}
				
				// play
				// playSamples();	
			});
		}

		// get the data
		request.send();
	},

	/**
	 * Stop playing
	 */
	/*
	stop: function()
	{
		//source.stop();	
	}
	*/
}

function BufferLoader(context, urlList, callback)
{
console.log('function Bufferloader');
	// init bufferList
	bufferList = new Array();

	// define variables
	this.context = context;
	this.urlList = urlList;
	this.onload = callback;
	this.loadCount = 0;
}


/**
 * Init
 */
function init()
{
	try
	{
		// init context
		context = new webkitAudioContext();

		// when not using webkit
		// audioAPI.context = new AudioContext();
	}
	catch(e)
	{
		alert('Web audio is not available in this browser');
		return;
	}
	
	gainNode = context.createGainNode();
	gainNode.connect(context.destination);
	gainNode.gain.value = 0.5;
	tempNode = context.destination;
	
	// set up the buffer loader
	bufferLoader = new BufferLoader(context,
	[
		'assets/reverb.wav',
		'assets/music1.mp3'
	], finishedLoading);
	
	bufferLoader.load();
}

/**
 * Finished loading
 *
 * @param bufferList
 */
function finishedLoading(bufferList)
{
	// init sources
	sources = new Array();
	
	reverbNode = context.createConvolver();
	reverbNode.buffer = bufferList[0];
	reverbGainNode = context.createGainNode()
	reverbGFainNode.gain.value = 0.5;
	reverbNode.connect(reverbGainNode);
	reverbGainNode.connect(context.destination);
	gainNode.connect(reverbNode);
	tempNode = gainNode;
	
	// play
	playSamples();
}

function playSamples()
{
	for(var i = 1; i < bufferList.length; i++)
	{
		sources[i] = context.createBufferSource();
		
		sources[i].buffer = bufferList[i];
		
		// create a buffer for each loaded file
		sources[i].connect(tempNode);
		sources[i].loop = true;
		sources[i].playbackRate.value = 0.5;
		sources[i].start(0);
	}
}

function stopSamples()
{
	
}

function changeVolume(aValue)
{
	gainNode.gain.value = aValue/100.0;
	// default slider range is 0 to
}

window.addEventListener('load', init, false);

$(audioAPI.init);