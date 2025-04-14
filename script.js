const eventInput = document.getElementById("eventInput");
const eventDate = document.getElementById("eventDate");
const eventPeople = document.getElementById("eventPeople");
const eventType = document.getElementById("eventType");
const eventList = document.getElementById("eventList");

function loadEvents() {
  const rawEvents = localStorage.getItem("events");
  if (!rawEvents) {
    return [];
  }
  const loadedEvents = JSON.parse(rawEvents);
  return loadedEvents;
}

function saveEvent(event) {
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
}

const events = loadEvents();
renderEvents();

function addEvent() {
  const name = eventInput.value.trim();
  const date = eventDate.value;
  const people = eventPeople.value;
  const type = eventType.value;

  if (name === "" || date === "" || people === "" || type === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const newEvent = {
    name,
    date,
    people,
    type,
  };

  saveEvent(newEvent);
  renderEvents();

  eventInput.value = "";
  eventDate.value = "";
  eventPeople.value = "";
  eventType.value = "";
}

function renderEvents() {
  eventList.innerHTML = "";
  events.forEach((evt) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${evt.name}</strong><br />
      📅 ${evt.date} | 👥 ${evt.people} pessoas | 🎉 ${evt.type}
    `;
    eventList.appendChild(li);
  });
}
