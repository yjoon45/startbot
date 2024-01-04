$(() => {
  const logo = $('.logo-animation');
  let initialSlide = 100 / 219;
  let percentage = 0;
  let interval: NodeJS.Timeout;

  function stepAnimation() {
    logo.css({
      '--x': `-${percentage}%`,
    });

    if (percentage >= 100 - initialSlide) {
      percentage = 0;

      return;
    }

    percentage = Math.min(100, (percentage += initialSlide));
  }

  interval = setInterval(stepAnimation, 60);
});
