function addEvent() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let desc = document.getElementById("description").value;

    if (title == "" || date == "") return;

    let list = document.getElementById("eventList");

    if (list.querySelector(".empty")) list.innerHTML = "";
    
    list.innerHTML += createEventBox(title, date, category, desc);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function createEventBox(title, date, category, desc) {
    return `
  <div class="event-box">
    <span class="delete-btn" onclick="removeEvent(this)">❌</span>
    <h3>${title}</h3>
    <p><b>Date:</b> ${date}</p>
    <p><b>Category:</b> ${category}</p>
    <p>${desc}</p>
  </div>`;
}

function removeEvent(btn) {
    btn.parentElement.remove();
    checkEmpty();
}

function clearEvents() {
    document.getElementById("eventList").innerHTML =
        "<p class='empty'>No events yet. Add your first event!</p>";
}

function addSample() {

    document.getElementById("eventList").innerHTML = "";
    
    let samples = [
        ["AI Research", "2026-05-17", "Workshop", "Research On Artificial Intelligence"],
        ["Tech Nexus", "2026-04-17", "Hackathon", "36-hour long hackathon "]
    ];

    samples.forEach(e => {
        document.getElementById("eventList").innerHTML +=
            createEventBox(e[0], e[1], e[2], e[3]);
    });
}

function checkEmpty() {
    let list = document.getElementById("eventList");

    if (list.querySelectorAll(".event-box").length === 0) {
        list.innerHTML = "<p class='empty'>No events yet. Add your first event!</p>";
    }
}