'use strict';

(function () {
  var init = function init() {
    $(window).on('load', () => {
      setTimeout(() => {
        setNumber();
        totalTimeGet();
      }, 500);
    })
  };
  var setNumber = function setNumber() {
    var $target = $('.badge-new');
    $target.each((i, elem) => {
      $(elem).attr('data-num', i + 1)
      addStyle(elem)
    })
  };
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
  var totalTimeGet = function totalTimeGet() {
    var $target = $('.task-total');
    var arr = [];
    $target.each((i, elem) => {
      if (i == 1) {
        $(elem).find('th').each((i, elem) => {
          if (i >= 1 && i <= 5) {
            arr.push(Number($(elem).text()))
          }
        })
      }
    })
    var sum = 0;
    for (let num = 0; num < arr.length; num++) {
      sum += arr[num];
    }
    appendSUM(sum);
  };
  var appendSUM = function appendSUM(sum) {
    $('.panel-body').append('<p class="weeklyTotalTime"><span class="text">合計時間:</span>' + sum + '<span>h</span>' + '</p>')
  }
  init();
})();