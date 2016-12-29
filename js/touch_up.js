$(document)
  .ready(function() {

    //A/B image compare module
    'use strict';


    var canvas = document.getElementById('canvas');
    var imageBeforeSrc = canvas.dataset.imageBefore;
    var imageAfterSrc = canvas.dataset.imageAfter;

    if (!canvas.getContext) {
        console.error('Canvas not supported');
        // Exit here
    }


    var ctx = canvas.getContext('2d');
    var imgBefore = new Image();
    var imgAfter = new Image();

    var imgGrab = new Image();
    imgGrab.src = "images/touch_up_grab.svg";




    function draw(pos) {
        var isIE11 = navigator.userAgent.match(/Trident\/7.0; rv 11.0/);
        console.log(isIE11);
        var imgBeforePos = pos * imgBefore.width / ctx.canvas.width;
        var imgAfterPos = pos * imgAfter.width / ctx.canvas.width;

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.drawImage(imgBefore, 0, 0, imgBeforePos, imgBefore.height, 0, 0, pos, ctx.canvas.height);
        ctx.drawImage(imgAfter, pos, 0, imgAfter.width-pos, imgAfter.height,  pos, 0, canvas.width-pos, canvas.height);

        ctx.fillStyle = 'rgb(55, 55, 55)';
        ctx.beginPath();
        ctx.rect(pos, 0, 10, ctx.canvas.height);
        ctx.fill();
        ctx.drawImage(imgGrab, pos-(imgGrab.width/2)+5, ctx.canvas.height/2);

    }

    function move(event) {
        event.preventDefault();
        var mpos = getMousePosition(canvas, event.pageX, event.pageY);
        draw(mpos.x);
    };

    function touch(event) {
        event.preventDefault();
        var touches = event.changedTouches;
        if (touches.length > 0) {
            var mpos = getMousePosition(canvas, touches[0].pageX, touches[0].pageY);
            draw(mpos.x);
        }
    }

    function getMousePosition(node, pageX, pageY) {
        var rect = node.getBoundingClientRect();
        return {
            x: (pageX - rect.left) * ctx.canvas.width / rect.width,
            y: (pageY - rect.top) * ctx.canvas.height / rect.height
        };
    }

    imgBefore.addEventListener('load', function () {
        imgAfter.addEventListener('load', function () {

            canvas.addEventListener('touchmove', touch);

            canvas.addEventListener('mousedown', function (event) {
                event.preventDefault();
                canvas.addEventListener('mousemove', move);
                var mpos = getMousePosition(canvas, event.pageX, event.pageY);
                draw(mpos.x);
            });

            canvas.addEventListener('mouseup', function (event) {
                event.preventDefault();
                canvas.removeEventListener('mousemove', move);
            });



            //Slider Position Switch
            var touchUpSliderPos = 'left';

            function switchTouchUpSliderPos(){
              if($(this).hasClass("half-area-left")){
                touchUpSliderPos = 'left';
                draw(Math.floor(ctx.canvas.width / 3));
              }else{
                touchUpSliderPos = 'right';
                draw(Math.floor(ctx.canvas.width / 1.5));
              }
            }

            $( ".half-area-left" ).on( "click", switchTouchUpSliderPos );
            $( ".half-area-right" ).on( "click", switchTouchUpSliderPos );



        });// imageafter load
        imgAfter.src = imageAfterSrc;
        // ctx.drawImage(imgBefore, 0, 0, ctx.canvas.width, ctx.canvas.height);


    }); // imagebefore load
    imgBefore.src = imageBeforeSrc;


  })
  ;
