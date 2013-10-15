(function() {
  var soundTransfer = new SoundTransfer();

  soundTransfer.initListener(true);

  soundTransfer.onMessage(function(message) {
    if (message && message.length > 0) {
      var url = soundTransfer.URL_MAPPINGS[message];
      console.log("url", url);
      if (url) {
        $(".redirect").text(url);
        // Hack - just use root url
        window.location = '/' + url;
      }
    }
  });
})();