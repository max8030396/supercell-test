$.fn.calculator = function(config) {

  var _default = {
    placeholder: '預設值',
    bgColor: '#ff0',
  }

  var $target = this;
  var $config = $.extend({}, _default, config);
  var insertBgColor = 'style="background-color: ' + $config.bgColor + ';"';

  console.log('Check Init Data: ', $config, insertBgColor);

  function initHtmlTags() {
    $target.append('<div class="calculator" ' + insertBgColor + '><input type="text" id="inputer" placeholder="' + $config.placeholder + '"><ul class="interface"><li class="btn1">+</li><li class="btn2">-</li><li class="btn3">×</li><li class="btn4">÷</li><li class="clear">C</li><li class="clear-rwd">C</li><li class="btn5">=</li></ul></div>');
  }
  
  function startCalculator() {
    var inputName = '#inputer';
    var plusBtnName = '.btn1';
    var minusBtnName = '.btn2';
    var multipliedName = '.btn3';
    var dividedName = '.btn4';
    var resultBtnName = '.btn5';
    var clearBtnName = '.clear,.clear-rwd';
  
    // input get value
    // var inputer = document.getElementById('inputer');
    var inputer = $(inputName);
    var plusBtn = $(plusBtnName);
    var minusBtn = $(minusBtnName);
    var multipliedBtn = $(multipliedName)
    var dividedBtn = $(dividedName);
    var resultBtn = $(resultBtnName);
    var clearBtn = $(clearBtnName);
  
    var step1Value = '';
    var step2Value = '';
    
    // var saveValue = ''
    // saveValue = saveValue + inputer.val();
  
    var howToCount = '+';
  
    // var inputerText = inputer.value;
    // console.log('test', inputer, plusBtn, minusBtn, resultBtn);
  
    plusBtn.on('click', function () {
      howToCount = '+';
  
      if (inputer.val() === '') {
        alert('e04!不會打第一個數字喔！');
      } else {
        console.log('Click + !!!!', inputer.val());
        step1Value = inputer.val();
        console.log('step1Value', step1Value, howToCount);
        inputer.val('');
      }
    });
  
    minusBtn.on('click', function () {
      howToCount = '-';
      
      if (inputer.val() === '') {
        alert('e04!不會打第一個數字喔！');
      } else {
        console.log('Click - !!!!', inputer.val());
        step1Value = inputer.val();
        console.log('step1Value', step1Value, howToCount);
        inputer.val('');
      }
    });
  
    multipliedBtn.on('click', function () {
      howToCount = '*';
  
      if (inputer.val() === '') {
        alert('e04!不會打第一個數字喔！');
      } else {
        console.log('Click * !!!!', inputer.val());
        step1Value = inputer.val();
        console.log('step1Value', step1Value, howToCount);
        inputer.val('');
      }
    });
  
    dividedBtn.on('click', function () {
      howToCount = '/';
  
      if (inputer.val() === '') {
        alert('e04!不會打第一個數字喔！');
      } else {
        console.log('Click / !!!!', inputer.val());
        step1Value = inputer.val();
        console.log('step1Value', step1Value, howToCount);
        inputer.val('');
      }
    });
  
    clearBtn.on('click', function () {
      howToCount = 'clear';
  
      if (inputer.val() === '') {
        alert('已清除');
      } else {
        console.log('Click clear !!!!', inputer.val());
        // step1Value = inputer.val();
        console.log('clear', step1Value, howToCount);
        inputer.val('');
      }
    });
  
    resultBtn.on('click', function () {
      if (inputer.val() === '') {
        alert('e04!不會打第二個數字喔！');
      } else {
        console.log('Click = !!!!', inputer.val());
        step2Value = inputer.val();
        console.log('step2Value', Number(step2Value));
        
        if (howToCount === '+') {
          var finalValue = Number(step1Value) + Number(step2Value);
          inputer.val(finalValue);
        }
  
        if (howToCount === '-') {
          var finalValue = Number(step1Value) - Number(step2Value);
          inputer.val(finalValue);
        }
  
        if (howToCount === '*') {
          var finalValue = Number(step1Value) * Number(step2Value);
          inputer.val(finalValue);
        }
  
        if (howToCount === '/') {
          var finalValue = Number(step1Value) / Number(step2Value);
          inputer.val(finalValue);
        }
  
        if (howToCount === 'clear') {
          var finalValue ='';
          inputer.val(finalValue);
        }
        console.log('運算出來的結果是： ', finalValue);
      }
    });
  }

  initHtmlTags();
  startCalculator();
};



