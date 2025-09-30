import "./styles/main.scss"
import { getPageToday, getForm, appendArray } from "./today.js"
import {header, btnAdd, container} from "./today"

const content = document.querySelector('.content')
const btnToday = document.querySelector('.button-today')
const btnScheduled = document.querySelector('.button-schedule')
const btnProject = document.querySelector('.button-project')
const btnTags = document.querySelector('.button-tag')
const todoList = document.getElementById('.todo-list')

content.append(getPageToday());

btnToday.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageToday())
})

const addBtn = document.getElementById('add')
addBtn.addEventListener('click',()=>{
  container.append(getForm())
})