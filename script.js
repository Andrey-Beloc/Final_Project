/*$('.slider-reviews').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,    
    dots: true,
    arrows: true
  });*/


  $('.slider-reviews').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,    
    dots: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }        
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          speed: 300
        }        
      }, 
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 300
        }        
      }              
    ]
  });

  

