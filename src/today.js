const header=document.createElement('h1')
header.textContent="Today"
const container = document.createElement('div')
container.className="todo-list"
container.style.display="none"
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

    const removeTask = document.createElement('button')
    removeTask.className="remove"
    removeTask.textContent="X"
    form.append(removeTask)
    removeTask.addEventListener('click',function(){
    this.closest('.task').remove()
    const tasks = container.querySelectorAll('.task');
    if (tasks.length === 0) {
        container.style.display = 'none'; // hide when no tasks left
    } else {
        container.style.display = 'block'; // show if there are tasks
     }
    })
    const divTitle = document.createElement('div')
    const divDate = document.createElement('div')
    const divPriority = document.createElement('div')
    const divTag = document.createElement('div')

    const labelTitle = document.createElement('label')
    labelTitle.setAttribute('for','title')
    labelTitle.textContent="Title:"
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
    const radios = document.querySelectorAll('input[type="radio"][name="priority"]');

    const labelTag = document.createElement('label')
    labelTag.textContent="Tag:"
    labelTag.setAttribute('for','tag')
    
    const tag = document.createElement('input')
    tag.setAttribute('type', 'text')
    tag.setAttribute('id', 'tag')


    divTitle.append(labelTitle,title)
    divDate.append(labelTime, time)
    divPriority.append(labelPriority, priority)
    divTag.append(labelTag,tag)
    priority.append(urgent,important,normal)
    form.append(divTitle,divDate,divPriority,divTag)
    const submit = document.createElement('button')
    submit.id="submit"
    submit.setAttribute('type', 'submit')
    submit.addEventListener('click',()=>{
        //radio value
        const selectedPriority = form.querySelector('input[type="radio"]:checked')?.value||"none"
        // submit form
        const info = `${title.value} due at ${time.value}: ${selectedPriority} tag: ${tag.value}`
        form.textContent = info;
        
        // checkbox
        const checkBox = document.createElement('input')
        checkBox.classList.add("check-box")
        checkBox.type="checkbox"
        form.append(checkBox)

        // input to Task object
        const taskObject = new Task(title.value, time.value, priority.value)
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

btnAdd.addEventListener('click',function(){
    container.append(getForm())
    container.style.display="block";
})


export {btnAdd, header, container}
export {getPageToday, getForm}