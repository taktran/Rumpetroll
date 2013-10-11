(function() {
  var soundTransfer = new SoundTransfer();

  soundTransfer.initListener();

  soundTransfer.onMessage(function(message) {
    console.log("message:", message);
  });
})();