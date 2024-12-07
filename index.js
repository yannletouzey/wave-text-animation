const waveTextAnimation = (container) => {
  container.style.position = 'relative';
  container.style.display = 'block';
  const originalText = container.textContent.trim();
  const letters = originalText.split('');
  container.innerHTML = '';
  const divOne = document.createElement('div');
  divOne.className = 'text-wave-one';
  const divTwo = document.createElement('div');
  divTwo.className = 'text-wave-two';
  divTwo.style.position = 'absolute';
  divTwo.style.top = '0';
  divTwo.style.left = '0';
  divTwo.style.width = '100%';
  container.append(divOne, divTwo);
  const divs = [divOne, divTwo];
  divs.forEach((div) => {
    div.innerHTML = '';
    letters.forEach((letter, index) => {
      if (letter === ' ') {
        div.innerHTML += `<span style="display:inline-block; width:0.5em; transition-duration: 0.5s; will-change: transform; display: inline-block">&nbsp;</span>`;
      } else {
        div.innerHTML += `<span style="display: inline-block; transition-delay: ${index * 0.015}s; transition-duration: 0.5s; will-change: transform; display: inline-block">${letter}</span>`;
      }
    });
  });
  const divOneSpans = divOne.querySelectorAll('span');
  divOneSpans.forEach(span => {
    span.style.transformOrigin = 'bottom';
  })
  const divTwoSpans = divTwo.querySelectorAll('span');
  divTwoSpans.forEach(span => {
    span.style.transformOrigin = 'top';
    span.style.transform = 'translateY(100%) rotateX(-90deg)';
  })
  container.addEventListener('mouseenter', () => {
    divOneSpans.forEach(span => {
      span.style.transform = 'translateY(-100%) rotateX(-90deg)';
    })
    divTwoSpans.forEach(span => {
      span.style.transform = 'translateY(0) rotateX(0deg)';
    })
  })

  container.addEventListener('mouseleave', () => {
    divOneSpans.forEach(span => {
      span.style.transform = 'translateY(0) rotateX(0deg)';
    })
    divTwoSpans.forEach(span => {
      span.style.transform = 'translateY(100%) rotateX(-90deg)';
    })
  })

  return container;
};
export default waveTextAnimation;
