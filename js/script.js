/* header scroll*/
$(function () {
    var didScroll;//스크롤 하는 행위
    var lastScrollTop = 0; //0 좌표
    var delta = 5; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("#header").outerHeight();
    
    
    $(window).scroll(function(event){
        didScroll = true;
        // console.log(didScroll);
    });

     setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }//스크롤 하면 ture 멈추면 flase, setInterval 반복
    }, 50); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

    function hasScrolled() {
        var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

        // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop){
            // 스크롤을 내렸을 때
            $("#header").slideUp("fast"); // header 숨기기
        } else {
            // 스크롤을 올렸을 때
            if(st + $(window).height() < $(document).height()) {
                $("#header").slideDown("fast"); // header 보이기
            }
        }

        lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
    }
})





/* 카운트 스크립트 */
// val() : 선택한 폼 요소의 벨류속성값을 가져오거나 새 값을 적용할때 사용
var memberCountConTxt= 2904;
        
$({ val : 0 }).animate({ val : memberCountConTxt }, {
duration: 1500,
step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".number").text(num);
},
complete: function() { // 마무리, 마지막 숫자인 288 1
    var num = numberWithCommas(Math.floor(this.val));
    $(".number").text(num);
}
});
//숫자에 , 를 추가해주는 함수 (3자리수마다 추가)
function numberWithCommas(x) {
    return x.toString().replace();
    // (/\B(?=(\d{3})+(?!\d))/g, ",")

}




/* mousemove */
var targetX=$(".vi_bottom").width()/2;
var targetY=$(".vi_bottom").height()/2;
$(document).on("mousemove", function(e){
    var mx= e.pageX;
    var my= e.pageY;
    
    var resultX=(targetX-mx);
    var resultY=(targetY-my);

    $(".mo_1").css({marginLeft:resultX*-0.01, marginTop:resultY*-0.05});
    $(".mo_2").css({marginLeft:resultX*0.07, marginTop:resultY*-0.03});
    $(".mo_3").css({marginLeft:resultX*0.03, marginTop:resultY*0.01});
});
 





/* COMMON 공통 */

$(window).scroll(function(){
    const scr=$(document).scrollTop();//브라우저의 스크롤바가 수직으로 이동한 위치값을 불러오거나 변경시 사용
    console.log(scr)
    let scr_h=$("#script").offset().top;//24212
    let pub_h=$("#publishing").offset().top;//2972

/* header */
    // if(scr>1500){
    //   $("#header").fadeIn();
    // }else{
    //     $("#header").fadeOut();
    // }
 

/* 가로 스크롤_publishing */
    let offset = scr - pub_h//스크립트와 퍼블리싱높이를 간격을 변수로 넣고
    //만약 (스크롤탑 > 퍼블리싱 높이)면 #publishing .container는 
    //left:-offset css를 추가한다.
    if(scr>pub_h){
        $("#publishing .container").css({left:-offset});
    }


/* btn_top */
        if(scr>=1900){
            $(".btn_top").fadeIn();
        }else{
            $(".btn_top").fadeOut();
        }     
    });


    $(".btn_top").click(function(){
        $("html, body").stop().animate({scrollTop:0},400);
    });
    
    $(".guide_top").click(function(){
        $(".m_overlay").stop().animate({scrollTop:0},400);
    });
    


    $(function(){
        $(".gnb li a").click(function(){
        var target=$(this).attr("href");
        var targetPos=$(target).offset().top;
        $("html,body").stop().animate({scrollTop:targetPos},1000);
        $(".gnb li a").removeClass("on");
        $(this).addClass("on");
        
        $(".gnb_pro").click(function(){
            $("html, body").stop().animate({scrollTop:4000});
        });
    // $(".gnb_sc").click(function(){
    //     $("html, body").stop().animate({scrollTop:13757});
    // });
    // $(".gnb_gr").click(function(){
    //     $("html, body").stop().animate({scrollTop:15421});
    // });
    // $(".gnb_ab").click(function(){
    //     $("html, body").stop().animate({scrollTop:16362});
    });

});
    
/* pop-up */


$(".moblie_btn1").click(function(e){
    e.preventDefault();
    let n=$(this).index();
    $(".m_overlay_wrap .m_overlay.m1").eq(n).show();
    $("body").css({overflow:"hidden"});
});
//다시하기
$(".guide_btn1").click(function(){
    let g=$(this).index();
    $(".m_overlay_wrap .m_overlay.g1").eq(g).show();
    $("body").css({overflow:"hidden"});
    
});
$(".moblie_btn2").click(function(e){
    e.preventDefault();
    let m=$(this).index();
    $(".m_overlay_wrap .m_overlay.m2").eq(m).show();
    $("body").css({overflow:"hidden"});
});

$(".guide_btn2").click(function(){
    let d=$(this).index();
    $(".m_overlay_wrap .m_overlay.g2").eq(d).show();
    $("body").css({overflow:"hidden"});
    
});
$(".guide_close, .close").click(function(e){
    e.preventDefault();
    $(".cl .m_overlay").hide();
    $("body").css({overflow:"auto"});
});
$(".cl .g2").click(function(e){
    e.preventDefault();
    $(".cl .g2").hide();
    $("body").css({overflow:"auto"});
});

    $(window).scroll(function(){
        var designTop=$(".design_guide").scrollTop();
        
    });


/* 스와이퍼_graphic_project */
var swiper = new Swiper(".gr_slide", {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  /* tab menu_graphic */
  $(function(){
      $(".cate_btn").click(function(){
        var i = $(this).index();

        $(".cate_btn").removeClass("on");
        $(this).addClass("on");
        $(".tabcont").hide();
        $(".tabcont").eq(i).show();
        return false;

      });
  });


  //
  var myAgent=navigator.userAgent.toLowerCase();
  var mobile=["iphone","android","ipod","blackberry","nokia","opera mini","window ce"];

  for(var i=0; i<mobile.length; i++){//모바일 내의 갯수(현재는 7개)만큼 반복(length)
      if(myAgent.indexOf(mobile[i])>=0){
      //0보다 크거나 같으면 indexOf = 일치하는지 확인하는 것 일치하면 중괄호 실행
      loction.href="http://keem477.pe.kr/m/index.html";
      //index면 m까지 index아니면 메인 html까지 작성
      
      break;
  }
}