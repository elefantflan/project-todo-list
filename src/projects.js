import { dropMenu } from "./index.js"
import { getForm } from "./today.js"
import { btnProject } from "./index.js"
const page = document.createElement('div')
page.className="tab"
const container = document.createElement('div')
container.className="todo-list"
container.style.display="none"
const addButton = document.createElement('button')
addButton.textContent="+"
addButton.id="add"

function Project(title){
    this.title=title
}

function getPageProjects(){
    page.append(container)
    page.append(addButton)
    return page;
}

function createForm(){
    const form = document.createElement('form')
    const input = document.createElement('input')
    const submit = document.createElement('button')

    form.append(input,submit)
    
    submit.textContent="+"
    submit.type = "submit"
    input.type="text"

    submit.addEventListener('click', function(e){
        e.preventDefault
        const value = input.value.trim()
        if(value===''){
        alert("Please enter a valid name")
        }
        else{
        createProject(input.value)
        }
    })

    form.remove()
    return form
}

function createProject(title){
    const project = new Project(title)

    const div = document.createElement('div')
    div.className = "project"
    div.textContent = project.title
    container.append(div)
    dropMenu.append(div)
    container.style.display="block"
    saveProject(project)
}

function saveProject(project){
    const projects = JSON.parse(localStorage.getItem("project")) || [];
    projects.push(project)
    localStorage.setItem("project", JSON.stringify(projects))
    if(projects.length !==0){
        container.style.display="block"
    }
}

function loadProject(){
    const projects = JSON.parse(localStorage.getItem("project")) || []
    projects.forEach(project=>{
        const div = document.createElement('div')
        div.className = "project"
        div.textContent = project.title
        container.append(div)
        
    })
        if(projects.length !==0){
        container.style.display="block"
    }
}

addButton.addEventListener('click', function(){
    container.append(createForm())
    container.style.display="block"
})



window.addEventListener('DOMContentLoaded', loadProject)
export{getPageProjects}