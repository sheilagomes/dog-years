const humanYears = document.getElementById('input-human');
const convertHuman = document.querySelector('.button-human');
const finalHuman = document.getElementById('result-human');
const dogYears = document.getElementById('input-dog');
const convertDog = document.querySelector('.button-dog');
const finalDog = document.getElementById('result-dog');
const flipButton = document.getElementsByClassName('fa-sync');
const flipCard = document.querySelector('.flip-card .flip-card-inner');

function convertToDogYears(numberYears) {
	return Math.round(Math.pow(Math.E, (Math.log(Math.E)*((numberYears - 31)/16))));
}

function convertToHumanYears(numberYears) {
	return Math.round((16*(Math.log(numberYears)/Math.log(Math.E))) + 31);
}

convertHuman.addEventListener('click', () => {
	let convertedYears = convertToDogYears(humanYears.value);
	finalHuman.innerHTML = `${convertedYears}`;
});

convertDog.addEventListener('click', () => {
	let convertedYears = convertToHumanYears(dogYears.value);
	finalDog.innerHTML = `${convertedYears}`;
});

for (let i = flipButton.length - 1; i >= 0; i--) {
	flipButton[i].addEventListener('click', () => {
		flipCard.classList.toggle('flip-button');
	});
}