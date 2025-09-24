const taskList = []

function Task(title, description, dueDate, priority){

}

// form
function getForm(){
    const form = document.createElement('form')
    const labelName = document.createElement('label')
    labelName.setAttribute('for','name')
    labelName.textContent="Title: "
    const name = document.createElement('input')
    name.setAttribute('type', 'text')
    name.setAttribute('id', 'name')
    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for','description')
    labelDescription.textContent="Description: "
    const description = document.createElement('input');
    description.setAttribute('type', 'text')
    description.setAttribute('id', 'description');
    const urgent = document.createElement('radio');
    const important = document.createElement('radio');
    const normal = document.createElement('radio');
    const labelUrgent = document.createElement('label')
    const labelImportant = document.createElement('label')
    const labelNormal = document.createElement('label')
    labelUrgent.textContent="Urgent";
    labelImportant.textContent="Important";
    labelNormal.textContent="Normal";

    form.append(labelName);
    form.append(name);
    form.append(labelDescription);
    form.append(description);
    form.append(labelUrgent);
    form.append(labelImportant);
    form.append(labelNormal);
    labelUrgent.append(urgent);
    labelImportant.append(important);
    labelNormal.append(normal);

    return form;
}

//create new task
function getNewTask(){
    const div = document.createElement('div');
    div.className ="task"
    div.append(getForm());
    return div;
}

export {getNewTask};