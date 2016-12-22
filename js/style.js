$(document)
  .ready(function() {


    /*********************
        Height calcs
    **********************/

    checkSizeBrowser();

    $(window).resize(checkSizeBrowser);

    function checkSizeBrowser(){
      //get
      var docHeight = jQuery(window).height();
      var docHeightDeskop =parseInt(docHeight-60);
      var docWidth = jQuery(window).width();
      var sectionHeight = $(".project").height();
      var mobileGalleryHeight = parseInt((docWidth*2));
      var mobilefixedNavHeight = $("#fixedNav").height();

      //set
      $(".project .dark-dimmer").css("height",sectionHeight);
      $(".photo-gallery.desktop.wrapper").css("height",docHeightDeskop);
      $(".photo-gallery.mobile.wrapper").css("height",mobileGalleryHeight-mobilefixedNavHeight);
      // $(".photo-gallery.mobile.wrapper").css("min-height","1000px");
    }

    $.Velocity.defaults.easing = "easeOutsine";


    /*********************
        Projects focus
    **********************/

    function projectIn (){

      if($(this).hasClass("project")){
        $(this).children('.dark-dimmer').velocity({ scaleY : '70%' }, { duration: 200, easing:"easeOutCubic"});
      }

      if($(this).hasClass("desktop-area")){
        $(this).siblings('.feature_mobile').velocity({ blur : 5 }, { duration: 200, easing:"easeOutCubic" });

        }
      else if($(this).hasClass('mobile-area')){
        $(this).siblings('.feature_desktop').velocity({ blur : 5 }, { duration: 200, easing:"easeOutCubic" });
      }

      if($(this).hasClass("half-area-left")){
        $(this).siblings('.feature_touch_right').velocity({ blur : 5 }, { duration: 200, easing:"easeOutCubic" });

        }
      else if($(this).hasClass('half-area-right')){
        $(this).siblings('.feature_touch_left').velocity({ blur : 5 }, { duration: 200, easing:"easeOutCubic" });
      }
    }

    function projectOut (){

      if($(this).hasClass("project")){
        $(this).children('.dark-dimmer').velocity('reverse');
      }

      if($(this).hasClass("desktop-area")){
        $(this).siblings('.feature_mobile').velocity('reverse');

      }else if($(this).hasClass('mobile-area')){
        $(this).siblings('.feature_desktop').velocity('reverse');
      }

      if($(this).hasClass("half-area-left")){
        $(this).siblings('.feature_touch_right').velocity('reverse');

      }else if($(this).hasClass('half-area-right')){
        $(this).siblings('.feature_touch_left').velocity('reverse');
      }

    }

    //Diffuse events (dimmer+blurring)
    $('.project').hover(projectIn,projectOut);
    $('.project.desktop_mobile').children('a.desktop-area').hover(projectIn,projectOut);
    $('.project.desktop_mobile').children('a.mobile-area').hover(projectIn,projectOut);
    $('.project.touch_up').children('a.half-area-left').hover(projectIn,projectOut);
    $('.project.touch_up').children('a.half-area-right').hover(projectIn,projectOut);








    /*********************
        Photo gallery
    **********************/


    //Vars

      //Desktop
      var Anim = false;
      var zoomIsOpen = false;
      var initDesktopGallery = true;
      var $itemLarge =  $('.photo-gallery.desktop.wrapper .item-large');
      var $legende =  $('.photo-gallery.desktop.wrapper .item-large .legende');

      //Mobile
      var AnimMobile = false;
      var zoomIsOpenMobile = false;
      var initMobileGallery = true;
      var $itemLargeMobile =  $('.photo-gallery.mobile.wrapper .item-large');
      var $legendeMobile =  $('.photo-gallery.mobile.wrapper .item-large .legende');
      var $desktopChildNum;
      var $mobileChildNum;


      //Init (old)

      //Set to 1 to enabled already large startup + enable auto trigger click as well and think to de-comment if initGallery
      //Desktop
      //Mobile




    // ******************************************************************* //


    //On click Event DESKTOP
    function zoomDezoom() {

      var $this = $(this);



      $('.photo-gallery.desktop.wrapper .item-large').css('transition', '');
      $('.photo-gallery.desktop.wrapper .item-large').css('transform', '');
      $('.photo-gallery.desktop.wrapper .item-wrapper').toggleClass('back');

      Anim = true;
      setTimeout(function() {
        Anim = false;
      }, 150);

        // CLOSED > OPEN
      	if( zoomIsOpen == false ) {

          if (initDesktopGallery== true){
            //Item large scale up instantly
            $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 0, complete: desktopStatusOpen() });

            // initDesktopGallery= false;
          }else{
            // Item large Start value depending on clicked element

            if($this.is(':nth-child(1)')){
              $desktopChildNum = 1;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(2)')){
              $desktopChildNum = 2;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : '-25%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(3)')){
              $desktopChildNum = 3;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-25%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(4)')){
              $desktopChildNum = 4;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(5)')){
              $desktopChildNum = 5;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-25%', left : '-75%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(6)')){
              $desktopChildNum = 6;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-25%', left : '-25%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(7)')){
              $desktopChildNum = 7;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-25%', left : 0, bottom : 0, right : '-25%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(8)')){
              $desktopChildNum = 8;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : '-25%', left : 0, bottom : 0, right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(9)')){
              $desktopChildNum = 9;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : '-25%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(10)')){
              $desktopChildNum = 10;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : '-25%', bottom : '-25%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(11)')){
              $desktopChildNum = 11;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-25%', right : '-25%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(12)')){
              $desktopChildNum = 12;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-25%', right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(13)')){
              $desktopChildNum = 13;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : '-75%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(14)')){
              $desktopChildNum = 14;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : '-25%', bottom : '-75%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(15)')){
              $desktopChildNum = 15;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-25%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            if($this.is(':nth-child(16)')){
              $desktopChildNum = 16;
              //reposition
              $itemLarge.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLarge.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: desktopStatusOpen() });
            }

            //Item large scale up


          }


          //Legend fade-in
          $legende.velocity({opacity:1 }, { duration: 150, easing:"easeOutSine" });

          // end of anim
          function desktopStatusOpen(){

            setTimeout(function() {
              zoomIsOpen = true;
              //Diffuse event to item-large for closing
              $( ".photo-gallery.desktop.wrapper .item-large" ).on( "click", zoomDezoom );
              //Diffuse event to item-large for mousemove
              $(".photo-gallery.desktop.wrapper").on("mousemove", photoAngled);
              //Diffuse event to item-large for mouseout
              $('.photo-gallery.desktop.wrapper').on( "mouseout", photoMouseOut );
            }, 100);

          }



      // OPENED > CLOSE
      } else if ( zoomIsOpen == true ){

        if (initDesktopGallery== true){
          //Item large scale up instantly
          $itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });
          initDesktopGallery= false;
         }
         else{
          //Dynamic final values scale down

          if($desktopChildNum == 1) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 2) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : '-25%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 3) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-25%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 4) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-75%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 5) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-25%', left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 6) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-25%', left : '-25%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 7) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-25%', left : 0, bottom : 0, right : '-25%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 8) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : '-25%', left : 0, bottom : 0, right : '-75%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 9) {$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : '-25%', right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 10){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-25%', bottom : '-25%', right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 11){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-25%', right : '-25%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 12){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-25%', right : '-75%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}

          if($desktopChildNum == 13){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : '-75%', right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 14){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-25%', bottom : '-75%', right : 0 }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 15){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-25%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}
          if($desktopChildNum == 16){$itemLarge.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-75%' }, { duration: 100, easing:"easeInSine", complete: desktopStatusClosed() });}

         }


        //legend fade-out
        $legende.velocity({opacity:1 }, { duration: 100, easing:"easeInSine" });

          function desktopStatusClosed(){
            //Kill click event on item-large when closing
            $( ".photo-gallery.desktop.wrapper .item-large" ).off( "click", zoomDezoom );
            //Kill mousemove event on item-large when closing
            $(".photo-gallery.desktop.wrapper").off("mousemove", photoAngled);
            //Kill event to item-large for mouseout
            $('.photo-gallery.desktop.wrapper').off( "mouseout", photoMouseOut );

            zoomIsOpen = false;
          }


        }
    }
    //End On click Event Desktop




    // ******************************************************************* //


    //On click Event MOBILE
    function zoomDezoomMobile() {

      var $this = $(this);

        // CLOSED > OPEN
      	if( zoomIsOpenMobile == false ) {

          if (initMobileGallery== true){

            //Item large scale up instantly
            $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 0, complete: mobileStatusOpen() });

          }else{

            // Item large Start value depending on clicked element

            if($this.is(':nth-child(1)')){
              $mobileChildNum = 1;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(2)')){
              $mobileChildNum = 2;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(3)')){
              $mobileChildNum = 3;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(4)')){
              $mobileChildNum = 4;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(5)')){
              $mobileChildNum = 5;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(6)')){
              $mobileChildNum = 6;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : 0, right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(7)')){
              $mobileChildNum = 7;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(8)')){
              $mobileChildNum = 8;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : 0 }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
            if($this.is(':nth-child(9)')){
              $mobileChildNum = 9;
              //reposition
              $itemLargeMobile.velocity({scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-75%' }, { duration: 0, easing:"easeOutSine"});
              $itemLargeMobile.velocity({ scaleX : 1, scaleY : 1, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 150, easing:"easeOutSine", complete: mobileStatusOpen() });
            }
          }

          //Legend fade-in
          $legendeMobile.velocity({opacity:1 }, { duration: 150, easing:"easeOutSine" });

          // end of anim
          function mobileStatusOpen(){

            zoomIsOpenMobile = true;
            //Diffuse event to item-large for closing
            $( ".photo-gallery.mobile.wrapper .item-large" ).on( "click", zoomDezoomMobile );
          }



      // OPENED > CLOSE
    } else if ( zoomIsOpenMobile == true ){


        if (initMobileGallery== true){

          $itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });
          initMobileGallery= false;
        }
        else{

          //Dynamic final values scale down

          if($mobileChildNum == 1) { $itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 2) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 3) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : '-75%', left : 0, bottom : 0, right : '-75%' }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 4) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 5) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : 0, right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 6) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : 0, right : '-75%' }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 7) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : '-75%', bottom : '-75%', right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 8) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : 0 }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
          if($mobileChildNum == 9) {$itemLargeMobile.velocity({ scaleX : 0, scaleY : 0, top : 0, left : 0, bottom : '-75%', right : '-75%' }, { duration: 100, easing:"easeInSine", complete: mobileStatusClosed() });}
        }

        //legend fade-out
        $legendeMobile.velocity({opacity:1 }, { duration: 100, easing:"easeInSine" });


        // end of anim
        function mobileStatusClosed(){

          //Diffuse event to item-large for closing
          $( ".photo-gallery.mobile.wrapper .item-large" ).off( "click", zoomDezoomMobile );

          zoomIsOpenMobile = false;

        }

        }
    }



    //Triggers

      //Desktop
      $( ".photo-gallery.desktop.wrapper .item-wrapper" ).on( "click", zoomDezoom );
      $( ".photo-gallery.desktop.wrapper > div:nth-child(1)" ).click();

      //Mobile
      $( ".photo-gallery.mobile.wrapper .item-wrapper" ).on( "click", zoomDezoomMobile );
      $( ".photo-gallery.mobile.wrapper > div:nth-child(1)" ).click();








    //ROTATE ZOOM MANAGEMENT // DESKTOP ONLY

    var MAXDEGY = 2;
    var MAXDEGX = 2;

    //On mouseOut

    function photoMouseOut(){
      $('.photo-gallery.desktop.wrapper .item-large').css('transition', 'transform 0.25s');
      $('.photo-gallery.desktop.wrapper .item-large').css('transform', '');
    }

    //On mouseMove
    function photoAngled(event){

      if ( zoomIsOpen == true ){
          if(!Anim) {

            $('.photo-gallery.desktop.wrapper .item-large').css('transition', 'transform 0.25s');
            var percY = Math.abs((event.pageX - $('.photo-gallery.desktop.wrapper').offset().left) / $('.photo-gallery.desktop.wrapper').width());
            var degY = MAXDEGY * 2 * percY - MAXDEGY;
            var percX = Math.abs((event.pageY - $('.photo-gallery.desktop.wrapper').offset().top) / $('.photo-gallery.desktop.wrapper').height());
            var degX = - (MAXDEGX * 2 * percX - MAXDEGX);
            $('.photo-gallery.desktop.wrapper .item-large').css('transform', 'perspective( 250px ) rotateY(' + degY + 'deg) rotateX(' + degX + 'deg)' );
          }
        }


    }


    /*********************
            Form
    **********************/



    //Check if input has text
    $('input, textarea').keyup(function(){

        if( $(this).val() == ""){
            $(this).addClass("empty");
        }else{
            $(this).removeClass("empty");
        }
    });


    $( "textarea" ).focus(function() {
      $(this).removeClass('initial');
      $(this).siblings('.ui.button').css('display', 'inline');
    });



      $('.ui.form')
    .form({
      on: 'submit',
      revalidate:false,
      inline : true,
      fields: {
        pseudo: {
          identifier: 'pseudo',
          rules: [
            {
              type   : 'empty',
              prompt : 'Pseudo mandatory'
            }
          ]
        },
        email: {
          identifier: 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'E-mail mandatory'
            },
          {
            type   : 'email',
            prompt : 'E-mail incorrect'
          }
          ]
        },
        messagetext: {
          identifier: 'messagetext',
          rules: [
            {
              type   : 'empty',
              prompt : 'Message mandatory'
            }
          ]
        }
      }
    })
  ;


  /*********************
          Modals
  **********************/

  //Desktop screens modal
  $('.ui.modal.desktop')
    .modal({
      closable : true,
      duration:0
          }
      )
    .modal('attach events', '.desktop-area', 'show')
    .modal('attach events', '.project.miscellaneous .full-area', 'show')
    ;


  //Mobile screens modal
  $('.ui.modal.mobile')
    .modal({
      closable : true,
      duration: 0
          }
      )
    .modal('attach events', '.mobile-area', 'show')
    .modal('attach events', '.project.mobile .full-area', 'show')
    .modal('attach events', '.mobile-only-area', 'show')
    ;

    //Touch-up screens modal
    $('.ui.modal.touch-up')
      .modal({
        closable : true,
        duration: 0
            }
        )
      .modal('attach events', '.half-area-left', 'show')
      .modal('attach events', '.half-area-right', 'show')
      .modal('attach events', '.close', 'hide')
      ;
// $( ".ui.modal" ).on( "click", zoomDezoomMobile );

    //Hide desktop & touch-up modal on mobile breakpoint
    enquire.register("screen and (max-width: 767px)", {

        match : function() {

          $('.ui.modal.desktop')
            .modal('hide')
          ;

          $('.ui.modal.touch-up')
            .modal('hide')
          ;

        },


    });




  })
  ;
