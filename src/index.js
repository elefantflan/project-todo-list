const body = document.body;
const page = document.createElement('div')
page.className="page"
const header = document.createElement('div')
header.className="header"
const title = document.createElement('div')
title.className="title"
const main = document.createElement('div')
main.className="main"
const side = document.createElement('div')
side.className="side"
const nav = document.createElement('div')
nav.className="nav"
const content = document.createElement('div');
content.className="content"
const folder = document.createElement('div');
folder.className="list"
const footer = document.createElement('div')
footer.className="footer"

const btnToday = document.createElement('button');
btnToday.textContent="Today"


const btnProjects = document.createElement('button');
btnProjects.textContent="Projects"


const btnAddFolder = document.createElement('button')
btnAddFolder.className="button folder"
btnAddFolder.textContent="+"

const btnAddTask = document.createElement('button')
btnAddTask.className="button todo"
btnAddTask.textContent="+"

title.textContent="Todo List"
footer.textContent="copyright by Michelle Heo"

body.append(page)
page.append(header)
header.append(title)
page.append(main)
main.append(side)
side.append(nav)
side.append(btnAddFolder)
nav.append(btnToday)
nav.append(btnProjects)
main.append(content)
content.append(folder)
content.append(btnAddTask)
page.append(footer)

import "./styles/main.scss";
import { getNewTask } from "./task";


btnAddTask.addEventListener('click',()=>{
    // creates new form to add task
    folder.append(getNewTask());
})