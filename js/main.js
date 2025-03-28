$(function () {
  $('.c-ham').click(function(){
    $(this).toggleClass('active')
    $('.l-header__nav').toggleClass('active')
  })
  $('.l-header__list a').click(function(){
   $('.c-ham').removeClass('active')
   $('.l-header__nav').removeClass('active')
 })
})