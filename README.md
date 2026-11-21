# Haystack Muay Thai — website concept prototypes

This package contains **three working, mobile-responsive HTML/CSS design explorations** using the 21 gym photographs provided by a member. It is **not the official gym site**. Nothing here changes haystackmuaythai.com.

## Preview

Open `index.html` to compare:

- `/concept-a/`: Raw Energy — dark and athletic
- `/concept-b/`: Community First — warm, friendly, family-oriented
- `/concept-c/`: Modern Academy — lively, graphic sports branding
- `/schedule/`: Haystack's currently published weekly class timetable, archived October 2026 monthly plan, and slots for Google Calendar or Sheet embeds

All concepts use the same real gym images in `/assets/`. They're resized/optimized for web.

## Schedule source and limitations

The schedule prototype now contains **28 weekly class entries** transcribed from the photograph embedded on [Haystack's schedule page](https://haystackmuaythai.com/haystack-class-schedule/). The pictured timetable was uploaded under `/2026/03/`, and its exact effective date is not specified. It is a faithful representation of what the public page displays, **not verified as the current week by Scott**. Confirm it before presenting the prototype as an official schedule.

The Monthly Plan tab faithfully represents the **archived October 2026** schedule shown on the same page, including the theme 'Attitude · Round 10 · Safety Month,' weekly training topics, Popsicle Day on October 21, and Halloween Extravaganza at 11 AM on October 24. Do not present this as the current month.

For future edits, the transcribed data is in both `/schedule/schedule-data.json` and `/schedule/schedule-data.js`. The JS version runs locally without a web server, and the JSON version makes later migration to a generated feed easier. Keep them consistent if manually modifying the prototype. The Google Calendar/Sheet tabs are still unconfigured until Scott provides a shareable public schedule.

The published image notes: **Ninjas 4–7, Juniors 7–13, Adults 14+**, afternoon one-on-one/small-group appointments, and call/text reservations for Adult Kickboxing only.

## Publishing on GitHub Pages

1. Create a new repo, for example `haystack-concepts`.
2. Upload the **contents** of this folder to the repository root, including `index.html`, `.nojekyll`, `config.js`, the `assets/` directory, the three concept directories, and `schedule/`.
3. In **Settings → Pages**, choose **Deploy from a branch**, the `main` branch and the `/ (root)` folder; save.
4. Visit `https://YOUR-GITHUB-USERNAME.github.io/haystack-concepts/` when the deployment succeeds.
5. Share `/concept-a/`, `/concept-b/`, `/concept-c/`, and `/schedule/` links with Scott.

GitHub Pages generally publishes these static files without a build process. The website does not require Node, React, databases, API keys, or server hosting.

## Connecting Google Calendar (recommended for class events)

1. In Google Calendar, create a **separate calendar** named e.g. `Haystack Public Class Schedule` (do not publish Scott's personal calendar).
2. Set timezone to **America/Denver**. Enter recurring classes, holiday closures, special sessions, and event exceptions. Scott can maintain these in Google Calendar.
3. Under **Settings → [public schedule calendar] → Access permissions**, make it public after verifying it contains no private information.
4. Under **Settings → Integrate calendar**, get the **Embed code**. Copy the URL from inside the iframe's `src="..."` field.
5. Paste that URL into `calendarEmbedUrl` in the repo's root `config.js`.
6. Set `preferredSource: "calendar"`. Push the change. The `/schedule/` page then displays the live calendar iframe automatically.

Example `config.js` (use your actual public calendar link):

```js
window.HAYSTACK_SCHEDULE_CONFIG = {
  calendarEmbedUrl: "https://calendar.google.com/calendar/embed?src=PUBLIC_ID&ctz=America%2FDenver",
  sheetEmbedUrl: "",
  preferredSource: "calendar"
};
```

**Benefit:** Scott makes edits only in Google Calendar; the published embedded schedule updates without GitHub changes. Visitors can switch views and may subscribe to the public schedule through Google Calendar.

## Connecting Google Sheets (alternative)

If Scott prefers a master spreadsheet:

1. Create a separate public-facing Google Sheet (no student names, phone numbers, financial info, or other confidential data).
2. Use **File → Share → Publish to web → Embed** and publish the relevant tab.
3. Copy only the iframe's `src="..."` URL into `sheetEmbedUrl` in `config.js` and set `preferredSource: "sheet"`.

**Trade-off:** Sheets is easy for grid-based monthly planning, but its raw embed is less friendly on a phone. A later version can parse a Sheet and render a polished, mobile-first class list; that requires a carefully designed public data feed, e.g. a published CSV or read-only Apps Script endpoint.

## Photo / copy considerations

The supplied photos show the floor, gear, training bags, artwork and belt-progression posters. They help ground these mockups in the real space. **Action photos showing actual people training** would be more engaging for the final homepage; please get permission from any identifiable members, and parental permission for minors.

Copy and classes are based on the gym's public website as viewed Nov 2026. Programs: Ninjas (ages 4–7), Juniors (ages 7–13), Adult Muay Thai (ages 14+), Kickboxing, and Boot Camp. Verify offerings, names, and contact details with Scott before launch.

## Suggested next iteration

- Scott verifies the existing weekly timetable and provides the new monthly calendar or an editable Google Calendar/Sheet for future updates.
- Pick 1–2 visual directions, or combine parts of each.
- Add training photos and instructor portraits.
- Convert the schedule into a polished mobile weekly view backed by an editable public source.
- Connect a real inquiry form or booking flow before launch.

**Safety:** This is a public static site. Do not commit secret calendar URLs, passwords, tokens, or private data. Even draft GitHub Pages sites are publicly accessible after publishing.
