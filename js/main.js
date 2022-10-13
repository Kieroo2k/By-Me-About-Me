let burgerBtn
let barsIco
let xIco
let nav
let navLinks
let footerYear

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	handleCurrentYear()
}

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.burger')
	barsIco = document.querySelector('.fa-bars')
	xIco = document.querySelector('.fa-times')
	nav = document.querySelector('.nav-bar')
	navLinks = document.querySelectorAll('.nav-link')
	footerYear = document.querySelector('.footer-year')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', handleNav)

	navLinks.forEach(e => {
		e.addEventListener('click', handleNav)
	})
}

const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

document.addEventListener('DOMContentLoaded', main)
