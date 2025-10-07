const todoContainer = document.createElement('div')
todoContainer.style.display="none"
todoContainer.className="todo-list"
const btnAdd = document.createElement('button')
btnAdd.textContent="+"
btnAdd.id="add"

function getPageProjects(){
    const page = document.createElement('div')
    page.append(todoContainer)
    page.append(btnAdd)

    return page;
}

function projectFolder(){
    const form = document.createElement('form')
    const submit = document.createElement('button')
    const label = document.createElement('label')
    const input = document.createElement('input')   

    submit.type = "submit"
    input.type="text"

    label.for="title"
    input.id="title"

    submit.textContent="Enter"
    label.textContent="Title:"

    form.append(label, input, submit)

    submit.addEventListener('click', function(){
        const folder = document.createElement('div')
        const drop = document.createElement('form')
        const detail = document.createElement('textarea')
        const submit = document.createElement('button')

        folder.className = "folder"

        form.textContent=`${input.value}`
        submit.textContent="Enter"

        todoContainer.append(folder)
        folder.append(form)
    })
    return form
}

btnAdd.addEventListener('click',function(){
    todoContainer.append(projectFolder());
    todoContainer.style.display="block";
})

export{getPageProjects}