const header=document.createElement('h2')
header.textContent="Scheduled"
const container = document.createElement('div')
container.className="todo-list"
const btnAdd = document.createElement('button')
btnAdd.textContent="+"
btnAdd.id="add"

function getPageScheduled(){
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
    
    const labelDate = document.createElement('label')
    labelDate.for="date"
    labelDate.textContent="Due: "
    const date = document.createElement('input')
    date.setAttribute('type','date')
    date.setAttribute('id', 'date')

    const labelTime = document.createElement('label')
    labelTime.for="time"
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


    form.append(labelTitle,title,labelDate, date, labelTime,time,labelPriority,fieldset,priority,labelTag,tag)
    fieldset.append(priority)
    priority.append(urgent,important,normal)
    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.addEventListener('click',()=>{
        //radio value
        const selectedPriority = form.querySelector('input[type="radio"]:checked')?.value||"none"
        // submit form
        const info = `${title.value} due at ${date.value}, ${time.value}: ${selectedPriority} tag: ${tag.value}`
        form.textContent = info;
        
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

btnAdd.addEventListener('click',function(){
    container.append(getForm());
})


export{getPageScheduled, getForm}