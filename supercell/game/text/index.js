$(document).ready(() => {
	
	const dev = false;

	const $window = $(window);
	const $startBtn = $('.mask');
	const $man = $('.man');
	const $scene = $('.wrapper');
	const $scoreBoard = $('.point');
	const $scoreTimer = $('.timer');

	// 各磚塊狀態值
	const $stone = [
		{
			target: $('.stone-1'),
			posX: getRandomArbitrary(0, $scene.width() - 47),
			posY: -120,
			speed: getRandomArbitrary(5, 20)
		},
		{
			target: $('.stone-2'),
			posX: getRandomArbitrary(0, $scene.width() - 47),
			posY: -120,
			speed: getRandomArbitrary(5, 20)
		},
		{
			target: $('.stone-3'),
			posX: getRandomArbitrary(0, $scene.width() - 47),
			posY: -120,
			speed: getRandomArbitrary(5, 20)
		}
	];

	let isActive = false; // 遊戲是否啟動
	let moveLong = 0;
	let manSpeed = 110;
	let $maxSceneWidth = $scene.width() - $man.width();
	let scorePoint = 0;
	let currentTime = 120; // 倒數計時秒數

	// 取得隨機數值
	function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

	// 遊戲初始化設定
	function startGameInit() {
		for (let i = 0; i < $stone.length; i = i + 1) {
			$stone[i].target.css('left', `${$stone[i].posX}px`);
		}

		$startBtn.click(function () {
			$startBtn.hide();
			isActive = true;
			if (dev) {
				console.log('StartGameInit', $startBtn, isActive);
			}
			$scoreTimer.text(`剩 ${currentTime} 秒`);

			const pointTimer = setInterval(() => {
				currentTime = currentTime - 1;
				if (currentTime < 0) {
					isActive = false;
					alert(`你的得分是 ${scorePoint} 分`);
					clearInterval(pointTimer);
					return;
				}
				$scoreTimer.text(`剩 ${currentTime} 秒`);
			}, 1000);
		})
	}

	// 人物移動控制
	function manKeyPressControl() {
		$window.on('keypress', function (e) {
			if (e.keyCode === 97 || e.keyCode === 12551) {
				// alert('to left')
				moveLong = moveLong - manSpeed;
				if (moveLong <= 0) { moveLong = 0; }
				if (dev) {
					console.log('moveLong', moveLong);
				}
				$man.css('left', `${moveLong}px`);
			}
			if (e.keyCode === 100 || e.keyCode === 12558) {
				// alert('to right')
				moveLong = moveLong + manSpeed;
				if (moveLong >= $maxSceneWidth) { moveLong = $maxSceneWidth; }
				$man.css('left', `${moveLong}px`);
			}

		})
	}

	// 隨機磚塊掉落
	function randomFallStone() {
		requestAnimationFrame(randomFallStone);

		if (!isActive) {
			return;
		}

		
		for (let i = 0; i < $stone.length; i = i + 1) {
			$stone[i].posY = $stone[i].posY + $stone[i].speed;
			if ($stone[i].posY >= 500) {
				$stone[i].posY = -120
				$stone[i].posX = getRandomArbitrary(0, $scene.width() - 47);
				$stone[i].speed = getRandomArbitrary(5, 12);
				scorePoint = scorePoint + 1;
				if (dev) {
					console.log('Check posY >= 500', $stone[i].posX, scorePoint);
				}
			}
			$stone[i].target.css('top', `${$stone[i].posY}px`);
			$stone[i].target.css('left', `${$stone[i].posX}px`);
		}
		$scoreBoard.text(`得分 ${scorePoint}`);
	}

	startGameInit();
	manKeyPressControl();
	randomFallStone();
})