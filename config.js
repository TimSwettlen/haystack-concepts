// Haystack concept prototypes: use a PUBLIC event calendar or published Google Sheet.
// Never put private Google Calendar URLs, passwords, credentials, or API keys here.
window.HAYSTACK_SCHEDULE_CONFIG = {
  // Paste the Google Calendar Embed URL from Settings > Integrate calendar, e.g.
  // "https://calendar.google.com/calendar/embed?src=PUBLIC_CALENDAR_ID&ctz=America%2FDenver"
  calendarEmbedUrl: "",
  // Or Google Sheets > File > Share > Publish to web > Embed: copy just the iframe src URL.
  sheetEmbedUrl: "",
  // For the prototype page, choose "calendar" or "sheet" for its default view once configured.
  preferredSource: "calendar"
};
