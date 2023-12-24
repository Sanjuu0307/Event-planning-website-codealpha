const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    const eventDate = document.getElementById("eventDate").value;

    if (inputBox.value === '' || eventDate === '') {
        alert("Enter both event date and description");
    } else {
        const taskObject = { date: eventDate, description: inputBox.value };
        let li = document.createElement("li");
        li.innerHTML = `${taskObject.date}: ${taskObject.description}`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();
