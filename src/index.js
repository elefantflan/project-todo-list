// imports
import "./styles/main.scss"
import { getPageToday, getForm, btnAdd } from "./today.js"
import { getPageScheduled } from "./scheduled"
import { getPageProjects } from "./projects"
import { getPageFinished } from "./finished"

// retrieve sidebar navigation buttons
const content = document.querySelector('.content')
const btnToday = document.querySelector('.button-today')
const btnScheduled = document.querySelector('.button-schedule')
const btnProject = document.querySelector('.button-project')
const btnTags = document.querySelector('.button-tag')
const btnFinished = document.querySelector('.button-finished')
const todoList = document.querySelector('.todo-list')
export const dropMenu = document.querySelector('.dropdown-menu')

// default homepage: Projects
content.append(getPageProjects());

// side panel drop down menu
btnProject.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageProjects())
  if(dropMenu.style.display==="none"){
    dropMenu.style.display="block"
  }

  else if(dropMenu.style.display==="block"){
    dropMenu.style.display="none"
  }
})

// rest of the pages
btnToday.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageToday())
})

btnScheduled.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageScheduled())
})

btnFinished.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageFinished())
})