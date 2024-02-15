# Wave Text Animation

![Wave Text Animation](typo-anime.gif)

>npm i wave-text-animation

>import package

```js
import waveTextAnimation from 'wave-text-animation';
```

>calling waveTextAnimation function from a package with text to animate

```js
waveTextAnimation('hello world');
````

>Add this container in html - div or p or whatever you want but with<mark> id="text-container" class="text-container"</mark> 

```html
<div id="text-container" class="text-container"></div>
```

>Place this CSS in a file

```css
.pTwo span {
  transform: translateY(100%) rotateX(-90deg);
}
.text-container:hover .pOne span {
  transform: translateY(-100%) rotateX(-90deg);
}
.text-container:hover .pTwo span {
  transform: translateY(0%) rotateX(0deg);
}
```