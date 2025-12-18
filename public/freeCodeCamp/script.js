const container = document.getElementById('container')

const projects = [
    {id: 1, name: "Iphone Like Calculator", link: "Iphone Calculator/index.html", img: "img/calculatorImg.jpg"},
    {id: 2, name: "Palindrome Checker", link: "./palindrome checker/index.html", img: "img/palindromeImg.jpg"},
    {id: 3, name: "Roman Calculator", link: "./roman calculator/index.html", img: "img/romanImg.jpg"},
    {id: 4, name: "RPG Search Creature", link: "./rpg search creature/index.html", img: "img/creatures.jpg"},
    {id: 5, name: "Todo App", link: "./todo app/index.html", img: "img/todoPic.jpg"},
]

projects.forEach(project => {
    container.innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${project.img} class="card-img-top" alt=${project.name} image>
        <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">FreeCodeCamp</p>
            <a href="${project.link}" class="btn btn-primary" target=”_blank”>View Project</a>
        </div>
    </div>`
})
