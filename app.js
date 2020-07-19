

// Show Search
const showSearch = document.querySelector('.show-search')
const showSearchs = document.querySelector('.show-search-1')
const fullSearch = document.querySelector('.full-search')
const closeSearch = document.querySelector('.close-search')

showSearch.addEventListener('click', function () {
    fullSearch.classList.add('show')
})
showSearchs.addEventListener('click', function (e) {
    e.preventDefault()
    fullSearch.classList.add('show')
})
closeSearch.addEventListener('click', function () {
    fullSearch.classList.remove('show')
})

// Subnav
const leftNav = document.querySelector('.shows')
const subNavs = document.querySelectorAll('.sub-nav')

leftNav.addEventListener('mouseover', function (e) {
    const id = e.target.dataset.id
    if (id) {
        subNavs.forEach(function (btn) {
            btn.classList.remove('shows')
            const element = document.getElementById(id)
            element.classList.add('shows')
        })
    }
})

leftNav.addEventListener('mouseleave', function () {
    subNavs.forEach(function (nav) {
        nav.classList.remove('shows')
    })
})
subNavs.forEach(function (nav) {
    nav.addEventListener('mouseover', function (e) {
        e.target.classList.toggle('shows')
    })
})





// Show toggle
const toggleNav = document.querySelector('.toggle-nav')
const fullNav = document.querySelector('.full-search-mob')
const closeNav = document.querySelector('.close-nav')

toggleNav.addEventListener('click', function () {
    fullNav.classList.add('show-mob')
})
closeNav.addEventListener('click', function () {
    fullNav.classList.remove('show-mob')
})


// Date Year

const year = document.querySelector('.year')

year.innerHTML = new Date().getFullYear()







