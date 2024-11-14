document.addEventListener("DOMContentLoaded", function () {

	new WOW().init();

	function getRandomChar() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
		return chars.charAt(Math.floor(Math.random() * chars.length));
	}

	function startRandomizingChars() {
			const charElements = document.querySelectorAll('span.char');

			setInterval(() => {
					charElements.forEach(element => {
							element.textContent = getRandomChar();
					});
			}, 150);
	}

	startRandomizingChars();


		const timer = document.querySelector(".hero__timer");
		const targetDateStr = timer.getAttribute("data-target-date");
		const targetDateParts = targetDateStr.split('/');

		const targetDate = new Date(`${targetDateParts[2]}-${targetDateParts[1]}-${targetDateParts[0]}T00:00:00`);

		function formatNumber(number, isDay) {
				if (isDay) {
						return number;
				}
				return number < 10 ? `0${number}` : number;
		}

		function updateTimer() {
				const currentTime = new Date();
				const timeDiff = targetDate - currentTime;

				if (timeDiff <= 0) {
						clearInterval(timerInterval);
						timer.querySelector(".hero__timer-item-num.days").textContent = '00';
						timer.querySelector(".hero__timer-item-num.hours").textContent = '00';
						timer.querySelector(".hero__timer-item-num.minutes").textContent = '00';
						timer.querySelector(".hero__timer-item-num.seconds").textContent = '00';
						return;
				}

				const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

				timer.querySelector(".hero__timer-item-num.days").textContent = formatNumber(days, true); // Для днів не форматувати
				timer.querySelector(".hero__timer-item-num.hours").textContent = formatNumber(hours, false);
				timer.querySelector(".hero__timer-item-num.minutes").textContent = formatNumber(minutes, false);
				timer.querySelector(".hero__timer-item-num.seconds").textContent = formatNumber(seconds, false);
		}

		const timerInterval = setInterval(updateTimer, 1000);
		updateTimer();


	//prevent drag img and a
	const imagesAndLinks = document.querySelectorAll('img, a');
	if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
			item.addEventListener('dragstart', function (e) {
				e.preventDefault();
			})
    });
  }

	


});
