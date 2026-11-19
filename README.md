# Birthday Website Starter 💗

## What's included
- `index.html` - all four website screens and buttons
- `style.css` - complete pink birthday design
- `script.js` - intentionally blank logic, with TODOs for you

## Run it
Open `index.html` in a browser. It will show the welcome page. Buttons won't work yet: that's your assignment!

## Your first task
In `script.js`, select the Start button, then attach a click listener that hides `welcome-screen` and reveals `mood-screen`.

Hint:
```js
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('mood-screen').classList.remove('hidden');
});
```

You can remove this hint if you'd rather solve it completely yourself.
