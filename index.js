const waveTextAnimation = (container, options = {}) => {
  const defaults = {
    delay: 0.015,
    duration: 0.5
  };
  const settings = { ...defaults, ...options };
  container.style.position = 'relative';
  const originalText = container.textContent.trim();
  const letters = originalText.split('');
  container.innerHTML = '';
  const divOne = document.createElement('span');
  divOne.className = 'text-wave-one';
  const divTwo = document.createElement('span');
  divTwo.className = 'text-wave-two';
  divTwo.style.position = 'absolute';
  divTwo.style.top = '0';
  divTwo.style.left = '0';
  container.append(divOne, divTwo);
  const divs = [divOne, divTwo];
  divs.forEach((div) => {
    div.innerHTML = '';
    letters.forEach((letter, index) => {
      if (letter === ' ') {
        div.innerHTML += `<span style="
          display: inline-block; 
          transition-duration: ${settings.duration}s; 
          will-change: transform;
        ">&nbsp;</span>`;
      } else {
        div.innerHTML += `<span style="
          display: inline-block; 
          transition-delay: ${index * settings.delay}s; 
          transition-duration: ${settings.duration}s; 
          will-change: transform;
        ">${letter}</span>`;
      }
    });
  });
  const divOneSpans = divOne.querySelectorAll('span');
  divOneSpans.forEach(span => {
    span.style.transformOrigin = 'bottom';
  });
  const divTwoSpans = divTwo.querySelectorAll('span');
  divTwoSpans.forEach(span => {
    span.style.transformOrigin = 'top';
    span.style.transform = 'translateY(100%) rotateX(-90deg)';
  });
  container.addEventListener('mouseenter', () => {
    divOneSpans.forEach(span => {
      span.style.transform = 'translateY(-100%) rotateX(-90deg)';
    });
    divTwoSpans.forEach(span => {
      span.style.transform = 'translateY(0) rotateX(0deg)';
    });
  });
  container.addEventListener('mouseleave', () => {
    divOneSpans.forEach(span => {
      span.style.transform = 'translateY(0) rotateX(0deg)';
    });
    divTwoSpans.forEach(span => {
      span.style.transform = 'translateY(100%) rotateX(-90deg)';
    });
  });
  return container;
};
export default waveTextAnimation;
