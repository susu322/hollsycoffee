$(function(){
    $('.slide_img').slick({ //메인슬라이드
      infinite: true,
      slidesToShow : 1,
      arrows : false, 
      dots: true,
      autoplay: true,
      autoplaySpeed : 2300,
      pauseOnHover : true
    });

    $(".newsbox_list").slick({ //소식 바
      vertical : true,
      rows:1,
      slidesToShow : 1,
      arrows:false,
      autoplay : true,
      autoplaySpeed : 1000
    });

    $('.menu_list').slick({ // 메뉴 슬라이드
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      centerMode: true,
      arrows : true
    });

    $('.sns_list').slick({ // 인스타그램
      infinite: true,
      slidesToShow: 3,
      arrows : false,
      autoplay: true,
      autoplaySpeed : 2300,
      pauseOnHover : true
    });


  })//ready