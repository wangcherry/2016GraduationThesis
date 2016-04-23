
var Quagga = require('Quagga');
$(function() {
    var App = {
        init : function() {
            var self = this;
            Quagga.init(this.state, function(err) {
                if (err) {
                    return self.handleError(err);
                }
                $(".js-code").val('');
                App.attachListeners();//留给点击 stop 时用的  要删可以一起删，不需要的话在html里把对应的stop按钮删掉就行，这个不删也是不影响的，当然，看不惯可以删
                Quagga.start();
            });
        },
        handleError: function(err) {
            console.log(err);
        },
        attachListeners: function() {//留给点击 stop 时用的 要删可以一起删，不需要的话在html里把对应的stop按钮删掉就行，这个不删也是不影响的，当然，看不惯可以删
            var self = this;
            $(".js-stop").click(App.stopHandler);
        },
        stopHandler: function(e) {//留给点击 stop 时用的 要删可以一起删，不需要的话在html里把对应的stop按钮删掉就行，这个不删也是不影响的，当然，看不惯可以删
            e.preventDefault();
            Quagga.stop();
            $(".js-code").html('');
            $("#interactive").hide();
        },
        state: {
            inputStream: {
                type : "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facing: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 4,
            decoder: {
                readers : ["ean_reader"] //code_128_reader --你要的128类型，但是由于我现在这边大部分是ean类型的，所以先拿ean类型来测试
            },
            locate: true
        },
        lastResult : null
    };

    //点击扫一扫处理函数
    $(".js-start").click(startHandler);
    function startHandler(e) {
        App.init();
        $("#interactive").show();
    };

    //扫描进程处理函数
    Quagga.onProcessed(function(result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
            }
        }
    });

    //扫描成功后处理函数
    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;
        if (App.lastResult !== code) {
            App.lastResult = code;
            $(".js-code").val(code);
        }
    });
});