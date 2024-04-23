const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
console.log(slides);
/*Les variables*/
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const fragment = document.createDocumentFragment()
/*Variable pour la bannière initial*/
let actualSlide = 0
/*Affichage de l'écouteur d'évènement du click droit*/

	arrowRight.addEventListener("click",()=>{
		
		const slidesDots = document.querySelectorAll(".dot");
		slidesDots[actualSlide].classList.remove("dot_selected");
		actualSlide++;
		if (actualSlide > slides.length - 1) {
			actualSlide = 0;
		}
		img.src = `./assets/images/slideshow/${slides[actualSlide].image}`;
		text.innerHTML = slides[actualSlide].tagLine;
		slidesDots[actualSlide].classList.add("dot_selected");
	});

/*Affichage de l'écouteur d'évènement du click gauche*/

	arrowLeft.addEventListener("click",()=> {
		
		const slidesDots = document.querySelectorAll(".dot");
		slidesDots[actualSlide].classList.remove("dot_selected");
		actualSlide--;
		if (actualSlide < 0) {
			actualSlide = slides.length - 1;
		}
		img.src = "./assets/images/slideshow/" + slides[actualSlide].image;
		text.innerHTML = slides[actualSlide].tagLine;
		slidesDots[actualSlide].classList.add("dot_selected");
	});


/*Affichage des bullets point*/


	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		fragment.appendChild(dot);
		if (i == actualSlide) {
			dot.classList.add("dot_selected");
		}
	}
	dots.appendChild(fragment);


	






		
	


