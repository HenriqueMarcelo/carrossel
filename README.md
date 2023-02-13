# Rotating Banner Project in JavaScript

This is a simple rotating banner project created in pure JavaScript, without the use of external libraries. It aims to display images interspersed in a specific area of a web page.
Its main purpose is to display wide images with fixed height in which its main content is in the center and therefore its edges can be cropped.
It is perfectly compatible with the container functionality of frameworks like bootstrap and tailwind, making integration even easier and more practical.

## Features

- Display of multiple images;
- Automatic image switching every 5 seconds (configurable time);
- Navigation by "previous" and "next" buttons.
- Display of indicators of which image is being displayed (bullets)

## How to use

To use this project on your site, just follow these steps:

1. Download the files of this project;
2. Add the carrossel.css and carrossel.js files to your HTML page;
3. Insert the following code in your HTML page where you want to display the rotating banner
```
<div class="carrossel">
    <div class="itens">
        <a style="background:transparent url('deep-pink.png') center center"></a>
        <a style="background:transparent url('deep-sky-blue.png') center center"></a>
        <a style="background:transparent url('dim-gray.png') center center"></a>
    </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function(event) {
		carrossel = new Carrossel({
		classe:"carrossel",
		tempo:"5",
		infinito:true,
		indicadores:false,
		setas: true
		});
	});
<script />
```

## Sites using our library
 - https://follybohrer.com.br/
 - https://pontaladministradora.com.br/
 - https://www.valescamarotti.com.br/
 - https://www.glauberbraga.com.br/
 - https://www.toyoserra.com.br/


## Tasks
 - Transform to a more modern syntax to be used with JS import
 - Submit the project to NPM
 - Create more detailed documentation
 - Be compatible with more user gestures

## Contributions
This is an open-source project and all contributions are welcome! If you find a bug or have a suggestion for improvement, please open an issue here on GitHub.
