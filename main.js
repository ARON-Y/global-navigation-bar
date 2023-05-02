$(document).ready(function () {
  //document에 node가 다 되서 준비가 되면 함수 안에 있는것을 실행해 주세요. 라는 defer를 대신해서 사용하는 것. j-query에선 이렇게 사용한다.

  $("#gnb").on("mouseenter", function () {
    //변수 담기 = #gnb를 찾아달라는 것. 마우스가 enter되면 function을 실행해주세요.
    $(".sub").stop().slideDown();
  });

  $("#gnb").on("mouseleave", function () {
    $(".sub").stop().slideUp();
  });

  $("#gnb>li").on("mouseenter", function () {
    $(this).children("a").addClass("on");
    //제이쿼리에서의 this = 자기 자신. 즉, li 자신
  });
  $("#gnb>li").on("mouseleave", function () {
    $(this).children("a").removeClass("on");
  });
});
