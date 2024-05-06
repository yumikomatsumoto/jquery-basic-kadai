$(function() {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function() {
    // class属性text-boxに"クリックしました！"と出力する
    $('.text-box').val('クリックしました！');
  });
});