const container = document.createElement('div')
container.style.display="none"
container.className="todo-list"
const btnAdd = document.createElement('button')
btnAdd.textContent="+"
btnAdd.id="add"

function getPageProjects(){
    const page = document.createElement('div')
    page.append(container)
    page.append(btnAdd)

    return page;
}

function projectFolder(){
    const form = document.createElement('form')
    const submit = document.createElement('button')
    submit.textContent="Enter"
    submit.type = "submit"
    const label = document.createElement('label')
    label.for="title"
    label.textContent="Title:"
    const input = document.createElement('input')
    input.type="text"
    input.id="title"
    form.append(label, input, submit)
    submit.addEventListener('click', function(){
        const folder = document.createElement('div')
        const drop = document.createElement('div')
        const detail = document.createElement('textarea')
        drop.className = "drop"
        drop.style.display="none"
        drop.append(detail)
        folder.className = "folder"
        container.append(folder)
        folder.append(form)
        folder.append(drop)
        form.textContent=`${input.value}`

        const folders = document.querySelectorAll('.folder')
        folders.forEach(folder=>{
            folder.addEventListener('click',function(){
                const drop = this.querySelector('.drop')
                drop.style.display = "block"
            })
        })
    })
    return form
}



btnAdd.addEventListener('click',function(){
    container.append(projectFolder());
    container.style.display="block";
})

export{getPageProjects}