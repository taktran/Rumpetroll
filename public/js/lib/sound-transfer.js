var SoundTransfer = function() {
  this.URL_MAPPINGS = {
    0: "#red",
    1: "#green",
    2: "#blue"
  }
  var ALPHABET = generateAlphabet(this.URL_MAPPINGS);
  var sonicSocket;
  var sonicServer;

  function generateAlphabet(mappings) {
    return _.keys(mappings).join('');
  }

  this.initListener = function(debug) {
    // Stop the sonic server if it is listening.
    if (sonicServer) {
      sonicServer.stop();
    }

    var audibleRangeCoder = new SonicCoder({
      freqMin: 440,
      freqMax: 1760
    });
    sonicServer = new SonicServer({
      alphabet: ALPHABET,
      debug: debug

      // Audible range
      // coder: audibleRangeCoder
    });

    sonicServer.start();
  };

  this.onMessage = function(fn) {
    sonicServer.on('message', fn);
  };

  this.initSender = function() {
    sonicSocket = new SonicSocket({alphabet: ALPHABET});
  };

  this.send = function(message) {
    sonicSocket.send(message);
  }
};