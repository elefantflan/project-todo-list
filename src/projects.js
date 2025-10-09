import { dropMenu } from "./index.js"

const content = document.querySelector('.content')
const page = document.createElement('div')
page.className="tab"
const border = document.createElement('div')
border.className="border"
border.style.display="none"
const addButton = document.createElement('button')
addButton.textContent="+"
addButton.id="add"

function Project(title){
    this.title=title
}

function getPageProjects(){
    page.append(border)
    page.append(addButton)
    return page;
}

addButton.addEventListener('click', function(){
    border.append(createForm())
    border.style.display="block"
})

function createForm(){
    const form = document.createElement('form')
    const input = document.createElement('input')
    const submit = document.createElement('button')

    form.append(input,submit)
    
    submit.textContent="+"
    submit.type = "submit"
    input.type="text"

    submit.addEventListener('click', function(e){
        e.preventDefault()
        const value = input.value.trim()
        if(value===''){
        alert("Please enter a valid name")
        }
        else{
        createProject(input.value)
        form.remove()
        }
    })

    return form
}

function createProject(title){
    const project = new Project(title)

    const div = document.createElement('div')
    div.className = "project"
    div.textContent = title
    
    border.append(div)
    dropMenu.appendChild(div)
    content.append(createTodoList(title))

    border.style.display="block"
    
    saveProject(project)
}

function createTodoList(title){
    const div = document.createElement('div')
    div.className = "todo-list"
    const name = document.createElement('h1')
    name.textContent = title
    div.append(name)
    return div
}

function saveProject(project){
    const projects = JSON.parse(localStorage.getItem("project")) || [];
    projects.push(project)
    localStorage.setItem("project", JSON.stringify(projects))
}

function loadProject(){
    const projects = JSON.parse(localStorage.getItem("project")) || []
    projects.forEach(project=>{
        const div = document.createElement('div')
        div.className = "project"
        div.textContent = project.title
        border.append(div)
    })
        if(projects.length !==0){
        border.style.display="block"
    }
}



window.addEventListener('DOMContentLoaded', loadProject)
export{getPageProjects}