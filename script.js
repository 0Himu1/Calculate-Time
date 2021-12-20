//Cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});

window.addEventListener("scroll", () => {
  const fromTop = parseInt(cursor.getAttribute("data-fromTop"));
  cursor.style.top = `${fromTop + scrollY}px`;
  console.log(scrollY, fromTop);
});

//Clock

function updateclock() {
  let now = new Date();
  let dayName = now.getDay();
  let dateName = now.getDate();
  let monthName = now.getMonth();
  let yearName = now.getFullYear();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let ids = ["day", "month", "date", "year", "hour", "minute", "seconds"];
  let values = [
    dayNames[dayName],
    monthNames[monthName],
    dateName,
    yearName,
    hr,
    min,
    sec,
  ];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).innerText = values[i];
  }
}

window.setInterval(updateclock, 100);
