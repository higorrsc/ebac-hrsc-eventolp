const eventDate = new Date("Jun 06, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCounting = setInterval(function () {
  const now = new Date();
  const actualTimeStamp = now.getTime();

  const diffBetweenTimeStamp = eventTimeStamp - actualTimeStamp;
  const msDays = 1000 * 3600 * 24;
  const msHours = 1000 * 3600;
  const msMinutes = 1000 * 60;

  const daysToEvent = Math.floor(diffBetweenTimeStamp / msDays);
  const hoursToEvent = Math.floor((diffBetweenTimeStamp % msDays) / msHours);
  const minutesToEvent = Math.floor(
    (diffBetweenTimeStamp % msHours) / msMinutes
  );

  const secondsToEvent = Math.floor((diffBetweenTimeStamp % msMinutes) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

  if (diffBetweenTimeStamp < 0) {
    clearInterval(timeCounting);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
