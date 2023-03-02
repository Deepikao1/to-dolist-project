let todolist = document.getElementById("Textarea")
let additem = document.getElementById("additem")
additem.addEventListener("click", () => {
    const todoDiv = document.createElement("div")
    
    todoDiv.classList.add("todo")

    const inputValue = todolist.value

    todoDiv.innerHTML = inputValue

    document.body.appendChild(todoDiv)
    
})