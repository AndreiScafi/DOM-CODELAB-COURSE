// DOM Manipulation

// getElementById()

const title = document.getElementById('main-heading')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {

    if (title.innerText === 'Franquias de filmes favoritos') {
        title.innerText = 'Favourite Movie Franchise'
    } else {
        title.innerText = 'Franquias de filmes favoritos'
    }
})


// getElementsByClassName()

/* const listItems = document.getElementsByClassName('list-items'); */

// return an array with objects inside.



// getElementByTagName()

const listItems = document.getElementsByTagName('li');

// return an array with objects inside.



// querySelector()

const container = document.querySelector('div');

console.log(container)



// querySelectorAll()

const AllListItems = document.querySelectorAll('.list-items')

console.log(AllListItems) // return an array with objects inside - Nodelist

