// シンプルなイベントリストを自動生成
const events = [
  { date: "2025-11-10", title: "English Conversation Meetup" },
  { date: "2025-11-17", title: "Game Night in English" },
  { date: "2025-12-01", title: "Christmas Special!" }
];

const eventList = document.getElementById("event-list");
events.forEach(e => {
  const li = document.createElement("li");
  li.textContent = `${e.date}: ${e.title}`;
  eventList.appendChild(li);
});
