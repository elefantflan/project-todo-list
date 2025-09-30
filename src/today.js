const header=document.createElement('h2')
header.textContent="Today"
const container = document.createElement('div')
container.className="todo-list"
const btnAdd = document.createElement('button')
btnAdd.textContent="+"
btnAdd.id="add"

function getPageToday(){
    const page = document.createElement('div')

    page.append(header)
    page.append(container)
    page.append(btnAdd)

    return page;
}

function getForm(){
    const form = document.createElement('form')
    form.className="task"

    const labelTitle = document.createElement('label')
    labelTitle.setAttribute('for','title')
    labelTitle.textContent="Title: "
    const title = document.createElement('input')
    title.setAttribute('type','text')
    title.setAttribute('id','title')

    const labelTime = document.createElement('label')
    labelTime.for="time"
    labelTime.textContent="Due: "
    const time = document.createElement('input')
    time.setAttribute('type','time')
    time.setAttribute('id', 'time')
    
    const labelPriority = document.createElement('label')
    labelPriority.textContent="Priority: "
    labelPriority.setAttribute('for', 'priority')
    const fieldset = document.createElement('fieldset')
    const priority = document.createElement('div')
    priority.className="priority"
    const urgent = document.createElement('input')
    urgent.type = "radio"
    urgent.value = "urgent!"
    urgent.name = "priority"
    const important = document.createElement('input')
    important.type = "radio"
    important.value = "important!"
    important.name = "priority"
    const normal = document.createElement('input')
    normal.type = "radio"
    normal.value = "normal."
    normal.name = "priority"
    const labelTag = document.createElement('label')
    labelTag.textContent="Tag: "
    labelTag.setAttribute('for','tag')
    
    const tag = document.createElement('input')
    tag.setAttribute('type', 'text')
    tag.setAttribute('id', 'tag')


    form.append(labelTitle,title,labelTime,time,labelPriority,fieldset,priority,labelTag,tag)
    fieldset.append(priority)
    priority.append(urgent,important,normal)
    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.addEventListener('click',()=>{
        //radio value
        const selectedPriority = form.querySelector('input[type="radio"]:checked')?.value||"none"
        // submit form
        const info = `${title.value} due at ${time.value}, ${selectedPriority} tag: ${tag.value}`
        form.textContent = info;

        //remove btn
        const deleteButton = document.createElement('button')
        deleteButton.className="delete-button"
        deleteButton.textContent = "-"
        form.append(deleteButton)

        deleteButton.addEventListener('click',function(){
            this.closest(".task").remove();
        })
        
        // checkbox
        const checkBox = document.createElement('input')
        checkBox.classList.add("check-box")
        checkBox.type="checkbox"
        form.append(checkBox)

        // input to Task object
        const taskObject = new Task(title.value, time.value, priority.value)

        // create an array of things to do
        todoList.push(taskObject);
        console.log(todoList);
    })
    submit.textContent="Enter"
    form.append(submit)

    return form
}

function Task(title, date, priority){
    this.title=title;
    this.date=date;
    this.priority=priority;
    this.info=function(){
        return `Task: ${this.title} Priority: ${this.priority}`
    }
}

const todoList = [];

function appendArray(){
    todoList.map(function(item){
        const div = document.createElement('div');
        div.className = "task"
        div.textContent = todoList.info();
        return div;
    })
}

export {btnAdd, header, container}
export {getPageToday, getForm, appendArray}