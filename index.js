const list = document.querySelector('.list')

const p = document.createElement('p')
p.innerText = '33 gold camos on bo6'
list.appendChild(p)

const p2 = document.createElement('p')
p2.innerText = 'EFJNJNEFNEHJF'
list.insertAdjacentElement('beforeend', p2)

console.log(list.innerHTML)

const newListItemAsHTML = "<p>i don't know</p>"
//list.innerHTML = newListItemAsHTML

list.insertAdjacentHTML('afterbegin', newListItemAsHTML)

const newItems = ['do 5 things', 'sleep', 'eat']

for (const item of newItems) {
	const itemElement = document.createElement('p')
	itemElement.innerText = item
	list.appendChild(itemElement)
}

console.log(list.children.length, list.children)

const ownerTitle = document.querySelector('.owner')
ownerTitle.innerText = 'Sebastian'

const replacement = document.createElement('p')
replacement.innerText = 'I replaced something'
list.replaceChild(replacement, list.children[0])

const replacement2 = document.createElement('p')
replacement2.innerText = 'I replaced the middle one'

const middleOfArrayIdx = Math.floor((list.children.length - 1) / 2)
console.log(middleOfArrayIdx)
list.replaceChild(replacement2, list.children[middleOfArrayIdx])

list.removeChild(list.lastElementChild)
