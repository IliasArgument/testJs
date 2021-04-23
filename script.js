const firsthr = document.querySelector('.hour'),
	dbhr = document.querySelector('.hour-double'),
	min = document.querySelector('.min'),
	dbmin = document.querySelector('.min-double');

function blat() {
	let data = new Date();
	let newHours = data.getHours();
	let newMinut = data.getMinutes();
	let hours = [...(newHours + '')];
	let minut = [...(newMinut + '')];
	let hr1 = hours[0];
	let hr2 = hours[1];
	let min1 = minut[0];
	let min2 = minut[1];

	return {
		hr1,
		hr2,
		min1,
		min2,
		data,
		minut,
		hours,
	};
}

const newArr = () => {
	const arr = blat();
	if (arr.hours.length <= 1) {
		firsthr.innerHTML = `<span>${0}</span>`;
		dbhr.innerHTML = `<span>${arr.hr1}</span>`;
	} else {
		firsthr.innerHTML = `<span>${arr.hr1}</span>`;
		dbhr.innerHTML = `<span>${arr.hr2}</span>`;
	}
	if (arr.minut.length <= 1) {
		min.innerHTML = `<span>${0}</span>`;
		dbmin.innerHTML = `<span>${arr.min1}</span>`;
	} else {
		min.innerHTML = `<span>${arr.min1}</span>`;
		dbmin.innerHTML = `<span>${arr.min2}</span>`;
	}
};

newArr();
setInterval(() => newArr(), 1000);

const deg = 6;
const hr = document.querySelector('#hr');

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
});
