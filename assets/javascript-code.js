// announcement-bar
$(document).ready(function(){
  $('.myslider').slick({
    slidesToScroll:1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:1000,
    infinite: true,
    vertical: true,
    verticalSwiping:true,
    arrows:false
  });  
});
// announcement-bar end
// for slider
$(document).ready(function(){
  $('.slick-main').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    infinite: true,
   responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: false,     
    slidesToShow: 3
    }
  },
  {
    breakpoint: 400,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
    }
  ]
   });
});
//for slider end
// For Sticky Add To Cart
$(window).scroll(function(event){
  var height= $(Window).height();
  var scroll= $(window).scrollTop();
  if(scroll=height){
    $(".sticky_cart").addClass("show");
  }else{
    $(".sticky_cart").removeClass("show");
  }
});

$(document).ready(function(){
  $('.card').click(function(){
    var id = $(this).attr('data-id');
    $.ajax({
      type:'POST',
      url:'/cart/add.js',
      data:{id:id,quantity:1},
      datatype:'json',
      async:false,
      success:function(result){
        console.log(result);
        location.href="/cart";
      },
      error:function(){
        console.log('error');
      }
    });
  });
})
// For Sticky Add To Cart end
$(document).ready(function(){
  $('.choose').click(function(){
   $('.model-container').toggle(); 
  });
});