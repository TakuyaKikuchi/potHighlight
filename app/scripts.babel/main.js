'use strict';

(function () {
  var init = function init() {
    bindEvents();
  };
  var bindEvents = function bindEvents() {
    $(window).on('load', () => {
      setTimeout(() => {
        setNumber();
        totalTimeGet();
        loadingAfter();
      }, 500);
    });
  };
  //数値を変更するたびに合計時間を変更する
  var loadingAfter = function loadingAfter() {
    $('input[type="number"]').on('keyup mouseup', () => {
      totalTimeGet();
    });
    $('[role="presentation"]').find('a').on('click', () => {
      setTimeout(() => {
        setNumber();
      }, 200);
    });
  };
  //それぞれのセルにナンバリング
  var setNumber = function setNumber() {
    var $target = $('.badge-new');
    $target.each((i, elem) => {
      $(elem).attr('data-num', i + 1)
      addStyle(elem)
    })
  };
  //スタイル付与
  var addStyle = function addStyle(elem) {
    var $target = $(elem);
    if (Number($target.attr('data-num')) % 2 != 0) {
      $target.next().css({
        'background-color': '#fff9f9',
        'font-weight': 'bold'
      });
      $target.next().next().css({
        'background-color': '#fff9f9',
        'font-weight': 'bold'
      })
    } else if (Number($target.attr('data-num')) % 2 == 0) {
      $target.next().css({
        'background-color': '#e8f8fc',
        'font-weight': 'bold'
      });
      $target.next().next().css({
        'background-color': '#e8f8fc',
        'font-weight': 'bold'
      });
    }
  };
  //合計時間取得
  var totalTimeGet = function totalTimeGet() {
    var $target = $('.task-total');
    var arr = [];
    $('.weeklyTotalTime').remove();
    $target.each((i, cell) => {
      if (i == 1) {
        $(cell).find('.text-right').each((i, elem) => {
          if (i >= 1 && !$(elem).hasClass('future')) {
            arr.push(Number($(elem).text()))
          }
        });
      }
    });
    var sum = 0;
    for (let num = 0; num < arr.length; num++) {
      sum += arr[num];
    }
    appendSUM(sum);
  };
  //合計時間表示
  var appendSUM = function appendSUM(sum) {
    $('.panel-body').append('<p class="weeklyTotalTime"><span class="text">合計時間:</span>' + sum + '<span>h</span>' + '</p>')
  };
  init();
})();