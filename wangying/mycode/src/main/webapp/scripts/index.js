var Quagga = require('Quagga');

$(function() {
    var App = {
        init : function() {
            var self = this;
            Quagga.init(this.state, function(err) {
                if (err) {
                    return self.handleError(err);
                }
                $("span.js-code").html('');
                App.attachListeners();
                Quagga.start();
            });
        },
        handleError: function(err) {
            console.log(err);
        },
        attachListeners: function() {
            var self = this;
            $(".js-controls").on("click", "button.js-stop", function(e) {
                e.preventDefault();
                Quagga.stop();
                $("span.js-code").html('');
                $("#interactive").hide();
            });
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
                readers : ["ean_reader"]
            },
            locate: true
        },
        lastResult : null
    };

    $(".js-controls").on("click", "button.js-start", function(e) {
        App.init();
        $("#interactive").show();
    });

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

    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;

        if (App.lastResult !== code) {
            App.lastResult = code;
            var $node = null, canvas = Quagga.canvas.dom.image;

            $node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
            $node.find("img").attr("src", canvas.toDataURL());
            $node.find("h4.code").html(code);
            $("span.js-code").html(code);
            $(".js-result_strip ul.thumbnails").prepend($node);
        }
    });

    //控制分页
    $("#paging").sharkPager({
        totalPages: 100,
        page: 1,
        lg : 'zh_CN',
        segmentSize : 5
    });


    // 点击 通过 响应事件
    $(".js-drug-info").on("click", ".js-pass", function(e) {
        if (confirm("你确定通过此药品的验证吗？")) {
            alert("你已确定通过！");
        }
        else {
            return false;
        }
    });

    // 点击 验证成功 响应事件
    $(".js-result-btn").on("click", ".js-succeed", function(e) {
        if (confirm("你确定验证此药单成功吗？")) {
            alert("你已确定成功！");
        }
        else {
            return false;
        }
    });

    // 点击 验证成功 响应事件
    $(".js-result-btn").on("click", ".js-fail", function(e) {
        if (confirm("你确定验证此药单失败吗？")) {
            alert("你已确定失败！");
        }
        else {
            return false;
        }
    });
});