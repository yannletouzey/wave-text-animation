const waveTextAnimation = (text) => {
  const textContainer = document.getElementById('text-container');
  textContainer.style.position = 'relative';
  textContainer.style.margin = 0;
  textContainer.style.padding = 0;

  const pOne = document.createElement('p');
  pOne.className = 'text pOne';
  const pTwo = document.createElement('p');
  pTwo.style.margin = 0;
  pTwo.style.position = 'absolute';
  pTwo.style.top = 0;
  pTwo.style.left = 0;
  pTwo.style.width = '100%';
  pTwo.className = 'text pTwo';
  textContainer.append(pOne, pTwo);
  pOne.innerText = text;
  pTwo.innerText = text;
  const textContent = pOne.textContent;
  pOne.innerHTML = '';
  const textArray = Array.from(textContent);
  textArray.forEach((e, i) => {
    const span = document.createElement('span');
    span.style.transformOrigin = 'bottom';
    span.style.display = "inline-block";
    span.style.transition = "0.5s";
    span.style.transitionDelay = `${0.03 * i}s`
    span.id = i;
    span.textContent = e;
    pOne.appendChild(span);
  });
  const textContent2 = pTwo.textContent;
  pTwo.innerHTML = '';
  const textArray2 = Array.from(textContent2);
  
  textArray2.forEach((e, i) => {
    const span = document.createElement('span');
    span.style.transformOrigin = 'top';
    span.style.display = "inline-block";
    span.style.transition = "0.5s";
    span.style.transitionDelay = `${0.03 * i}s`
    span.id = i;
    span.textContent = e;
    pTwo.appendChild(span);
  });
  const pOneSpans = pOne.querySelectorAll('.pOne span');
  const pTwoSpans = pTwo.querySelectorAll('.pTwo span');
  pTwoSpans.forEach((e, i) => {    
    e.style.transform = `translateY(100%) rotateX(-90deg)`;
  });
  textContainer.addEventListener('mouseover', () => {
    pOneSpans.forEach((e, i) => {
      e.style.transform =  `translateY(-100%) rotateX(-90deg)`;
    })
    pTwoSpans.forEach((e, i) => {
      e.style.transform = `translateY(0%) rotateX(0deg)`;
    });
  });
  textContainer.addEventListener('mouseout', () => {
    pOneSpans.forEach((e, i) => {
      e.style.transform =  `translateY(0%) rotateX(0deg)`;
    })
    pTwoSpans.forEach((e, i) => {
      e.style.transform = `translateY(100%) rotateX(-90deg)`;
    });
  });
}
export default waveTextAnimation;