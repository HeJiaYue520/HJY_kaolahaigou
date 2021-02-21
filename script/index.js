$(function () {
  // 当页面向下滑动 600px 出现"返回顶部" 按钮
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('.backToTop').css('display', 'block');
    } else {
      $('.backToTop').css('display', 'none');
    }
  });
  // 点击按钮，返回页面顶部
  $(".backToTop").on("click", function () {
    $("html").animate({
      scrollTop: 0
    }, 1000)
  })
});