$(document).ready(() => {

  //隨機變色
  function 要怎麼套入文字雲() {
    function randomSelectorColor() {
      var colors = [   //顏色資料庫
        "#e7228c",
        "#e7237c", 
        "#e01671", 
        "#dd0f6c", 
        "#d90866", 
        "#b5179e", 
        "#a514a5", 
        "#9410ab", 
        "#8c0fae", 
        "#830db1",
        "#800026",
        "#6c757d", 
        "#bd0026", 
        "#00a", 
        "#e31a1c", 
        "#5E503F", 
        "#fc4e2a", 
        "#fd8d3c", 
        "#0D6FB8", 
        "#1b4332"
      ]
      function getRandom (num) { //取得隨機數
        return Math.floor(Math.random() * num);
      }
      var i = colors.length
      var finalColor = colors[getRandom(i)];
      var boxColor = $('.colorDiv');
      boxColor.css('background-color',`${finalColor}`);
      // console.log(finalColor);
    } 
    setInterval(randomSelectorColor,1000)//每秒變色
  }
  
  //時鐘
  function 動態時鐘 (){
    function getDate() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var date = now.getDate();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var ampm = '';
      var $output = $('.nowFullTime')
      
      if (hour > 12 ){
        hour = '0'+ (hour%12)
        ampm = 'pm';
      } else {
        ampm = 'am';
      }

      if (sec < 10) {
        sec = '0' + sec
      } else if (min < 10) {
          min = '0' + min
       }
      $output.text(year + '/' + (month + 1) + '/' + date + ' ' + hour + ':' + min + ':' + sec + ampm); 
      refresh ();
    }
    function refresh () {
      setTimeout(getDate,1000);
    }
    getDate();
  }
  
  //倒數計時器
  function 倒數計時器() {
    function lastTime() {
      function countDownTimer(goalDate) {
        var now = new Date();
        var reset = goalDate.getTime() - now.getTime();
        var day = Math.floor(reset/1000/60/60/24);
        var hour = Math.floor(reset/1000/60/60%24);
        var minutes = Math.floor(reset/1000/60%60);
        var seconds = Math.floor(reset/1000%60);
        // var count = ['剩下' + day + '天', hour + '小時', minutes + '分鐘', seconds + '秒'];
        var count = [day, hour, minutes, seconds];
        return count;//這個意思是將結算出的陣列結果輸出到countDownTimer的結果嗎？
      }
      var goalDate = new Date(2021,4,31,23,59,59);
      // goalDate.setDate(92);
      // goalDate.setHours(23);
      // goalDate.setMinutes(59);
      // goalDate.setSeconds(59);
      countDownTimer(goalDate);
      // console.log(countDownTimer(goalDate))
      var finalTime = countDownTimer(goalDate);
      var $output = $('.leftTime')
      $output.text('剩下' + finalTime[0] + '天' + finalTime[1] + '小時' + finalTime[2] + '分鐘' + finalTime[3] + '秒');
      refresh();
    }
    function refresh() {
      setTimeout(lastTime, 1000);
    }
    lastTime();
  }
  
  let outSideFrame = $('.outSideFrame')
  let outSideCircle = $('.outSideCircle');
  let circle = $('.circle');
  let circleBg = $('.circleBg');
  let gaugeDeg = $('.pointer');
  // const neonText = $('.text');


  function gauge (diameter,deg){//需要是正方形等長等寬
    outSideFrame.css('width',`${diameter}px`).css('height',`${diameter*0.5}px`);

    outSideCircle.css('width',`${diameter}px`).css('height',`${diameter*0.5}px`).css('border-radius',`${diameter*0.5}px ${diameter*0.5}px 0px 0px`);
   

    circle.css('width',`${diameter*0.9}px`).css('height',`${diameter*0.45}px`).css('border-radius',`${diameter*0.45}px ${diameter*0.45}px 0px 0px`);

    circleBg.css('width',`${diameter*0.84}px`).css('height',`${diameter*0.42}px`).css('border-radius',`${diameter*0.42}px ${diameter*0.42}px 0px 0px`);

    gaugeDeg.css('transform',`rotate(${deg}deg)`).css('width',`${diameter*0.3}px`).css('height',`${diameter*0.02}`);

    // neonText.css('font-size', `${diameter*0.05}px`);
  }

  gauge(490,272);


  
    const $textArea = $('.topbar');
    const tap = $('.textArea1');
    const tapHold = $('.textArea2');
    const swipe = $('.textArea3');
    const swipeLeft = $('.textArea4');
    const swipeRight = $('.textArea5');

    $(function() {
      $("#test2").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          $(this).text("You swiped " + direction );
          if (direction === 'left') {
            $textArea.css('background-color', 'white');
          } else if (direction === 'right') {
            $textArea.css('background-color', 'black');
          }
        }
      });
    });
  
  倒數計時器();
  動態時鐘();
  要怎麼套入文字雲();
})