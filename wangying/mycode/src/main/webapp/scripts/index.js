var Quagga = require('Quagga');

$(function() {
    
    var App = {
        init : function() {
            var self = this;
            Quagga.init({
                inputStream : {
                  name : "Live",
                  type : "LiveStream",
                  target: document.querySelector('#scanWindow')
                },
                decoder : {
                  readers : ["ean_reader"]
                }
              }, function(err) {
                  if (err) {
                      console.log(err);
                      return
                  }
                  console.log("Initialization finished. Ready to start");
                  Quagga.start();
            });
        }     
    };

    App.init();
});
