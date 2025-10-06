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

content.append(getPageToday());

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
})

btnTags.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageTags())
})

btnFinished.addEventListener('click', ()=>{
  content.textContent=''
  content.append(getPageFinished())
})


const btnAddList = document.querySelectorAll('.add-list')
btnAddList.forEach(btn=>{
  btn.addEventListener('click', function(){
    const list = this.closest('.list')
    list.append(getFormList())
    toggleList();
  })
})

function toggleList(){
  const list = this.closest('list')
  if(list.style.display==='none'){
    list.style.display='block'
  }
  else{
    list.style.display = 'none'
  }
}

function getFormList(){
  const form = document.createElement('form')
  const input = document.createElement('input')
  input.type="text"
  const submit = document.createElement('button')
  submit.type="submit"
  submit.textContent="✓"
  submit.addEventListener('click', function(){
    const folder = document.createElement('button')
    folder.textContent=input.value;
    this.closest('.list').append(folder)
  })


  form.append(input)
  form.append(submit)

  return form;
}