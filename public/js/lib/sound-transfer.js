var SoundTransfer = function() {
  this.URL_MAPPINGS = {
    0: "http://192.168.3.107:6701/#room=0",
    1: "http://192.168.3.107:6701/#room=1",
    2: "http://192.168.3.107:6701/#room=2",
    3: "http://192.168.3.107:6701/#room=3",
    4: "http://192.168.3.107:6701/#room=4",
    5: "http://192.168.3.107:6701/#room=5",
    6: "http://192.168.3.107:6701/#room=6",
    7: "http://192.168.3.107:6701/#room=7",
    8: "http://192.168.3.107:6701/#room=8",
    9: "http://192.168.3.107:6701/#room=9",
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