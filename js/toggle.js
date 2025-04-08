const getElement = (selector) => {
const element = document.querySelector(selector)

if (element) return element
throw Error(
    `Please double check your class names, there is no ${selector} class`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
links.classList.toggle('show-links') 
})

// const links_1 = getElement('#la')
// const nav_1 = getElement('#2')

// nav_1.addEventListener('click', () => {
// links_1.classList.toggle('show-links') 
// })