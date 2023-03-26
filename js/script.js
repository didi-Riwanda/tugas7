$("document").ready(function(){
    // Bebek
    $("div.bebek").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.bebek").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/bebek.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });        
    $("div.bebek").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-bebek.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // kambing
    $("div.kambing").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.kambing").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/kambing.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.kambing").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-kambing.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // sapi
    $("div.sapi").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.sapi").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/sapi.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.sapi").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-sapi.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // kucing
    $("div.kucing").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.kucing").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/kucing.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.kucing").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-kucing.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // burung
    $("div.burung").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.burung").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/burung.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.burung").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-burung-pipit.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // kuda
    $("div.kuda").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.kuda").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/kuda.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.kuda").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-kuda.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // anjing
    $("div.anjing").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.anjing").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/anjing.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.anjing").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-anjing.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // babi
    $("div.babi").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.babi").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/babi.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.babi").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-babi.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });

    // ular
    $("div.ular").mouseover(function () {
        $(this).css({
            "cursor": "pointer"
        });
    });
    $("div.ular").click(function () {
        $(this).css({
            "width":"300px",
            "height":"200px",
            "background-image": "url('images/ular.jpeg')",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
    });
    $("div.ular").click(function () {
        $("<audio></audio>").attr({
            "src": "audio/suara-kobra.mp3",
            "volume": 0.4,
            "autoplay": "autoplay"
        }).appendTo("div");
    });
});