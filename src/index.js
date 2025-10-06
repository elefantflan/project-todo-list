import "./styles/main.scss"
import { getPageToday, getForm, btnAdd } from "./today.js"
import { getPageScheduled } from "./scheduled"
import { getPageProjects } from "./projects"
import { getPageTags } from "./tags"
import { getPageFinished } from "./finished"

const content = document.querySelector('.content')
const btnToday = document.querySelector('.button-today')
const btnScheduled = document.querySelector('.button-schedule')
const btnProject = document.querySelector('.button-project')
const btnTags = document.querySelector('.button-tag')
const btnFinished = document.querySelector('.button-finished')
const todoList = document.querySelector('.todo-list')
const dropMenu = document.querySelector('.dropdown-menu')

content.append(getPageProjects());

btnToday.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageToday())
})

btnScheduled.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageScheduled())
})

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

btnTags.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageTags())
})

btnFinished.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageFinished())
})