var SoundTransfer = function() {
  // var URL_MAPPINGS = {
  //   0: "http://192.168.3.107:6701/",
  //   1: "http://192.168.3.107:6701/?testing"
  // }
  // var ALPHABET = generateAlphabet(URL_MAPPINGS);
  var ALPHABET = "0123456789";
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

    // var audibleRangeCoder = new SonicCoder({
    //   freqMin: 440,
    //   freqMax: 1760
    // });
    sonicServer = new SonicServer({
      alphabet: ALPHABET,
      debug: debug
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