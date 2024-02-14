const waveTextAnimation = (text) => {
  const textContainer = document.getElementById('text-container');
  const pOne = document.createElement('p');
  pOne.className = 'text pOne';
  const pTwo = document.createElement('p');
  pTwo.className = 'text pTwo';
  textContainer.append(pOne, pTwo);
  pOne.innerText = text;
  pTwo.innerText = text;
  const textContent = pOne.textContent;
  pOne.innerHTML = '';
  const textContent2 = pTwo.textContent;
  pTwo.innerHTML = '';
  const textArray = Array.from(textContent);
  const textArray2 = Array.from(textContent2);
  textArray.forEach((e, i) => {
      const span = document.createElement('span');
      span.style.display = "inline-block";
      span.style.transition = "0.5s";
      span.style.transitionDelay = `${0.03 * i}s`
      span.id = i;
      span.textContent = e;
      pOne.appendChild(span);
  });
  textArray2.forEach((e, i) => {
      const span = document.createElement('span');
      span.style.display = "inline-block";
      span.style.transition = "0.5s";
      span.style.transitionDelay = `${0.03 * i}s`
      span.id = i;
      span.textContent = e;
      pTwo.appendChild(span);
  });
}
export default waveTextAnimation;