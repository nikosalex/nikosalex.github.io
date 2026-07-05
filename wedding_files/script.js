const pageLanguage = document.documentElement.lang || "el";

const weddingDetails = {
  coupleNames: document.getElementById("couple-names")?.textContent?.trim() || "Νίκος & Λίνα",
  eventDate: "2026-10-31T17:00:00",
  displayDate: document.getElementById("event-date-text")?.textContent?.trim() || "Σάββατο, 31 Οκτωβρίου 2026",
  displayTime: document.getElementById("event-time-text")?.textContent?.trim() || "17:00",
  venueName: document.getElementById("venue-name")?.textContent?.trim() || "Asteria Seaside Garden",
  venueAddress: document.getElementById("venue-address")?.textContent?.trim() || "Vouliagmeni, Athens, Greece",
  coordinates: {
    latitude: 37.815,
    longitude: 23.7785,
  },
  eventDurationHours: 7,
  nikosPhone: document.getElementById("nikos-phone")?.textContent?.trim() || "Προσθέστε το τηλέφωνο του Νίκου",
  linaPhone: document.getElementById("lina-phone")?.textContent?.trim() || "Προσθέστε το τηλέφωνο της Λίνας",
  rsvpDeadlineDaysBefore: 15,
  rsvpEmail: "rsvp@example.com",
};

const elements = {
  names: document.getElementById("couple-names"),
  dateText: document.getElementById("event-date-text"),
  timeText: document.getElementById("event-time-text"),
  venueName: document.getElementById("venue-name"),
  venueAddress: document.getElementById("venue-address"),
  coordinatesText: document.getElementById("coordinates-text"),
  mapLink: document.getElementById("map-link"),
  googleCalendarLink: document.getElementById("google-calendar-link"),
  outlookCalendarLink: document.getElementById("outlook-calendar-link"),
  yahooCalendarLink: document.getElementById("yahoo-calendar-link"),
  appleCalendarLink: document.getElementById("apple-calendar-link"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  countdownMessage: document.getElementById("countdown-message"),
  rsvpDeadline: document.getElementById("rsvp-deadline"),
  nikosPhone: document.getElementById("nikos-phone"),
  linaPhone: document.getElementById("lina-phone"),
  rsvpForm: document.getElementById("rsvp-form"),
  formStatus: document.getElementById("form-status"),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat(pageLanguage, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getRsvpDeadline() {
  const deadline = new Date(weddingDetails.eventDate);
  deadline.setDate(deadline.getDate() - weddingDetails.rsvpDeadlineDaysBefore);
  return deadline;
}

function getEventEndDate() {
  const endDate = new Date(weddingDetails.eventDate);
  endDate.setHours(endDate.getHours() + weddingDetails.eventDurationHours);
  return endDate;
}

function formatCalendarDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeIcsText(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function buildGoogleCalendarUrl() {
  const startDate = new Date(weddingDetails.eventDate);
  const endDate = getEventEndDate();
  const title = `Γάμος ${weddingDetails.coupleNames}`;
  const details = `Γαμήλια γιορτή για τους ${weddingDetails.coupleNames}.`;
  const location = `${weddingDetails.venueName}, ${weddingDetails.venueAddress}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}`,
    details,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildOutlookCalendarUrl() {
  const startDate = new Date(weddingDetails.eventDate);
  const endDate = getEventEndDate();
  const title = `Γάμος ${weddingDetails.coupleNames}`;
  const description = `Γαμήλια γιορτή για τους ${weddingDetails.coupleNames}.`;
  const location = `${weddingDetails.venueName}, ${weddingDetails.venueAddress}`;
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: startDate.toISOString(),
    enddt: endDate.toISOString(),
    body: description,
    location,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

function buildYahooCalendarUrl() {
  const startDate = new Date(weddingDetails.eventDate);
  const title = `Γάμος ${weddingDetails.coupleNames}`;
  const description = `Γαμήλια γιορτή για τους ${weddingDetails.coupleNames}.`;
  const location = `${weddingDetails.venueName}, ${weddingDetails.venueAddress}`;
  const duration = String(weddingDetails.eventDurationHours).padStart(2, "0") + "00";
  const params = new URLSearchParams({
    v: "60",
    view: "d",
    type: "20",
    title,
    st: formatCalendarDate(startDate),
    dur: duration,
    desc: description,
    in_loc: location,
  });

  return `https://calendar.yahoo.com/?${params.toString()}`;
}

function buildIcsFile() {
  const startDate = new Date(weddingDetails.eventDate);
  const endDate = getEventEndDate();
  const title = `Γάμος ${weddingDetails.coupleNames}`;
  const location = `${weddingDetails.venueName}, ${weddingDetails.venueAddress}`;
  const description = `Γαμήλια γιορτή για τους ${weddingDetails.coupleNames}.`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nikos and Lina Wedding//EL",
    "BEGIN:VEVENT",
    `UID:${startDate.getTime()}@nikos-lina-wedding`,
    `DTSTAMP:${formatCalendarDate(new Date())}`,
    `DTSTART:${formatCalendarDate(startDate)}`,
    `DTEND:${formatCalendarDate(endDate)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `LOCATION:${escapeIcsText(location)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

function populateDetails() {
  const {
    coupleNames,
    displayDate,
    displayTime,
    venueName,
    venueAddress,
    coordinates,
    nikosPhone,
    linaPhone,
  } = weddingDetails;
  const coordinateText = `${coordinates.latitude.toFixed(4)}, ${coordinates.longitude.toFixed(4)}`;
  const rsvpDeadline = getRsvpDeadline();

  elements.names.textContent = coupleNames;
  elements.dateText.textContent = displayDate;
  elements.timeText.textContent = displayTime;
  elements.venueName.textContent = venueName;
  elements.venueAddress.textContent = venueAddress;
  elements.coordinatesText.textContent = coordinateText;
  elements.rsvpDeadline.textContent = formatLongDate(rsvpDeadline);
  elements.nikosPhone.textContent = nikosPhone;
  elements.linaPhone.textContent = linaPhone;
  elements.mapLink.href = `https://maps.google.com/?q=${coordinates.latitude},${coordinates.longitude}`;
  elements.googleCalendarLink.href = buildGoogleCalendarUrl();
  elements.outlookCalendarLink.href = buildOutlookCalendarUrl();
  elements.yahooCalendarLink.href = buildYahooCalendarUrl();
  elements.appleCalendarLink.href = buildIcsFile();
}

function updateCountdown() {
  const eventTime = new Date(weddingDetails.eventDate).getTime();
  const now = Date.now();
  const distance = eventTime - now;

  if (distance <= 0) {
    elements.days.textContent = "00";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    elements.countdownMessage.textContent = "Η μέρα έφτασε. Ανυπομονούμε να γιορτάσουμε μαζί σας.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  elements.days.textContent = pad(days);
  elements.hours.textContent = pad(hours);
  elements.minutes.textContent = pad(minutes);
  elements.seconds.textContent = pad(seconds);
}

function setupRsvpForm() {
  elements.rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(elements.rsvpForm);
    const guestName = formData.get("guestName");
    const guestEmail = formData.get("guestEmail");
    const guestPhone = formData.get("guestPhone");
    const guestCount = formData.get("guestCount");
    const guestMessage = formData.get("guestMessage");
    const subject = encodeURIComponent(`Wedding RSVP - ${guestName}`);
    const body = encodeURIComponent(
      [
        `Name: ${guestName}`,
        `Email: ${guestEmail}`,
        `Phone: ${guestPhone}`,
        `Number of Guests: ${guestCount}`,
        "",
        "Message:",
        guestMessage || "No additional message.",
      ].join("\n")
    );

    elements.formStatus.textContent = `Ανοίγει η εφαρμογή email για την απάντηση του/της ${guestName}.`;
    window.location.href = `mailto:${weddingDetails.rsvpEmail}?subject=${subject}&body=${body}`;
  });
}

populateDetails();
updateCountdown();
setupRsvpForm();
window.setInterval(updateCountdown, 1000);