const input = document.querySelector('.todo__action-input')
const addEdit = document.querySelector('.todo__action-addEdit')
const content = document.querySelector('.todo__content')
let count = 1

function createElements() {
	const divek = document.createElement('div')
	const divek2 = document.createElement('div')
	const divBox = document.createElement('div')
	const spanNum = document.createElement('span')
	const spanDot = document.createElement('span')
	const para = document.createElement('p')
	const btn1 = document.createElement('button')
	const btn2 = document.createElement('button')
	const btn3 = document.createElement('button')
	content.append(divek)
	divek.append(divBox, divek2)
	divBox.append(spanNum, spanDot, para)
	divek2.append(btn1, btn2, btn3)
	divek.classList.add('todo__content-item')
	divBox.classList.add('todo__content-box')
	divek2.classList.add('todo__content-btns')
	btn1.classList.add('todo__content-btns-edit', 'btn')
	btn2.classList.add('todo__content-btns-delete', 'btn')
	btn3.classList.add('todo__content-btns-addEdit')
	para.classList.add('todo__content-text')
	btn1.textContent = 'edit'
	btn2.textContent = 'delete'
	btn3.textContent = 'Add edited'
	para.setAttribute('data-id', count)
	spanDot.innerHTML = '.&nbsp;'
	spanNum.innerHTML = count++
	para.innerHTML = input.value
	input.value = ''
}

function check(e) {
	if (e.target.matches('.todo__action-add')) {
		createElements()
	} else if (e.target.matches('.todo__content-btns-edit')) {
		input.value = e.target.parentElement.previousElementSibling.lastElementChild.innerText
		e.target.nextElementSibling.nextElementSibling.style.zIndex = '1'
	} else if (e.target.matches('.todo__content-btns-addEdit')) {
		e.target.parentElement.previousElementSibling.lastElementChild.textContent = input.value
		input.value = ''
	} else if (e.target.matches('.todo__content-btns-delete')) {
		e.target.parentElement.parentElement.remove()
		if (content.children.length < 1) {
			count = 1
		}
	}
}

document.body.addEventListener('click', check)
