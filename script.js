const panels = document.querySelectorAll('.panel')
const head = document.querySelector('h1')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        head.innerHTML = '<h3>Selected Image</h3>'
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}