# Wave Text Animation
![Wave Text Animation](typo-anime.gif)
> npm import wave-text-animation

> add this class <mark>class="text-container"</mark>  to all the texts you want to animate. 
```html
<div class="text-container"></div>
```
> import the package in your js file
```js
import waveTextAnimation from 'wave-text-animation';
```
> target the texts you want to animate.
> for one 
```js
const myTextContainer = document.querySelector('.text-animation')
```
> for multiple
```js
const myTextContainers = document.querySelectorAll('.text-animation')
```
> calling waveTextAnimation function

```js
waveTextAnimation(myTextContainer)
```
>or for multiple
```js
textContainers.forEach(textContainer => {
  waveTextAnimation(textContainer);
});
```
>with options (optional)
```js
waveTextAnimation(myTextContainer, {
  delay: 0.015,
  duration: 0.5
})
```