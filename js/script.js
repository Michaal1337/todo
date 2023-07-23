const input = document.querySelector('.todo__action-input')
const add = document.querySelector('.todo__action-add')
const content = document.querySelector('.todo__content')

let count = 1
// const item = document.querySelector('.todo__content-item')


function addBtn() {
	const divek = document.createElement('div')
	const divek2 = document.createElement('div')
	const para = document.createElement('p')
	const btn1 = document.createElement('button')
	const btn2 = document.createElement('button')
	content.append(divek)
	divek.append(para, divek2)
	divek2.append(btn1, btn2)
	divek.classList.add('todo__content-item')
	divek2.classList.add('todo__content-btns')
	btn1.classList.add('todo__content-btns-edit', 'btn')
	btn2.classList.add('todo__content-btns-delete', 'btn')
	para.classList.add('todo__content-text')
	btn1.textContent = 'edit'
	btn2.textContent = 'delete'
	para.setAttribute('id', count)
	para.innerHTML = count++ + '. ' + input.value
	input.value = ''
}

function check (e) {
    console.log(e.target);
}

const editBtn = (e) => {
if (e.target.matches('.todo__content-btns-edit')) {
	input.value = e.target.parentElement.previousElementSibling.innerHTML

}
}

add.addEventListener('click', addBtn)
document.body.addEventListener('click', check)
content.addEventListener('click', editBtn)

