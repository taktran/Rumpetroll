var SoundTransfer = function() {
  var URL_MAPPINGS = {
    0: "http://192.168.3.107:6701/",
    1: "http://192.168.3.107:6701/?testing"
  }
  var ALPHABET = generateAlphabet(URL_MAPPINGS);
  var sonicSocket;
  var sonicServer;

  function generateAlphabet(mappings) {
    return _.keys(mappings).join('');
  }


  this.initListener = function(opt_coder) {
    // Stop the sonic server if it is listening.
    if (sonicServer) {
      sonicServer.stop();
    }
    if (opt_coder) {
      sonicServer = new SonicServer({coder: opt_coder});
    } else {
      sonicServer = new SonicServer({alphabet: ALPHABET, debug: false});
    }

    sonicServer.start();
  };

  this.onMessage = function(fn) {
    sonicServer.on('message', fn);
  };

  this.initSender = function(opt_coder) {
    if (opt_coder) {
      sonicSocket = new SonicSocket({coder: opt_coder});
    } else {
      sonicSocket = new SonicSocket({alphabet: ALPHABET});
    }
  };

  this.send = function(message) {
    sonicSocket.send(message);
  }
};