$(function () {
  // 文字色を赤に変更する
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });
  // 文字内容を変化する
  $('#change-text').on('click', function() {
    $('#target').text('今日はいい天気ですね！');
  });
    // 文字をフェードアウトさせる
    $('#fade-out').on('click', function() {
      $('#target').fadeOut();
    });
        // 文字をフェードインさせる
        $('#fade-in').on('click', function() {
          $('#target').fadeIn();
        });
});