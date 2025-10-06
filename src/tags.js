const header=document.createElement('h2')
header.textContent="Category"
const container = document.createElement('div')
container.className="todo-list"
const btnAdd = document.createElement('button')
btnAdd.textContent="+"
btnAdd.id="add"

function getPageTags(){
    const page = document.createElement('div')

    page.append(header)
    page.append(container)
    page.append(btnAdd)

    return page;
}

btnAdd.addEventListener('click',function(){
    container.append(getForm());
})


export{getPageTags}