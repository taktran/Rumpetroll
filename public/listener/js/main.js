(function() {
  var soundTransfer = new SoundTransfer();

  soundTransfer.initListener(true);

  soundTransfer.onMessage(function(message) {
    console.log("message:", message);
  });
})();