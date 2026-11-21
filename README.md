# Haystack Muay Thai — Version 5 (authentic gym photography)

**This package is a GitHub Pages-ready design preview, not the official Haystack website.**

## What changed in V5

- All three concepts now use authentic Haystack training and community images supplied from Scott's Facebook page for design review.
- Concept A leads with adult kickboxing and emphasizes energy and technique.
- Concept B leads with an instructor coaching a young student and emphasizes warmth, belonging, and youth programs.
- Concept C leads with a knee-strike pad drill and emphasizes modern academy energy inspired by the gym's real mural.
- All concepts now include distinctive photo-story sections and links to the supplied Facebook profile.
- The comparison homepage now previews all three directions with real photos.
- The belt-levels page now includes a training milestone photo. The searchable interactive explorer, 161 draft requirements, and print output are **unchanged**. The class schedule is also **unchanged**.

## Permission / editorial review before publishing as an official site

The eight new photographs were supplied from Haystack's Facebook page. Ask Scott to confirm the academy has permission to reuse them on the public site, especially photographs featuring minors, and that all featured imagery is current. These images are provisionally included in this **public GitHub Pages concept preview**; remove or replace any image if permission is not granted. Don't claim these are live social-media embeds; they are locally hosted static assets.

Photo assets and source mapping:

| File in `assets/community/` | Source user-uploaded file | Suggested use |
|---|---|---|
| `technique-drills.webp` | hs1.jpg | Elbow technique |
| `knee-pad-training.webp` | hs2.jpg | Muay Thai pad technique |
| `belt-celebration.webp` | hs3.jpg | Student progress and milestones |
| `kickboxing-class.webp` | hs5.jpg | Adult kickboxing group |
| `bag-work-class.webp` | hs6.jpg | More adult bag work |
| `youth-teamwork.webp` | hs7.jpg | Youth program community |
| `conditioning-class.webp` | hs8.jpg | Strength and conditioning |
| `youth-coaching.webp` | hs9.jpg | Coach helping a young student |

## GitHub Pages deployment

1. Extract this ZIP.
2. In `TimSwettlen/haystack-concepts` upload **all files and folders from inside** the extracted V5 folder (not the parent folder).
3. When GitHub identifies existing file paths, commit the changes to `main`. The new `assets/community/` folder must be uploaded as well.
4. Keep GitHub Pages set to **Deploy from a branch → main → /(root)**.
5. Visit https://timswettlen.github.io/haystack-concepts/ after deployment.

**Important:** GitHub's browser uploader is not always convenient for overwriting many existing files. The reliable alternative is GitHub Desktop (clone the repo, copy the V5 files over, commit, push) or Git CLI. If GitHub's web uploader refuses an overwrite, do not delete the entire repository; use GitHub Desktop or edit/update the files individually.

---

# Haystack Muay Thai — design concepts + interactive belt explorer (V4)

**Unofficial working prototype for Scott's review**, not the current official Haystack website. GitHub Pages friendly; no framework, build tools, accounts, or API keys required.

## What's new in V4

- `/belt-levels/` is now an interactive curriculum explorer rather than a gallery of photos.
- **161 searchable entries** across **nine ranks**: White, Yellow, Orange, Green, Blue, Purple, Red, Brown, and Camo. Long kata and pad-work sequences are kept as complete entries instead of split into potentially misleading steps.
- Filter by belt and by the photographed headings: Fitness Requirements, Kata, Thai Pad Combo, Self Defense, Kick Defense, and Combinations.
- Searches automatically span all nine ranks, and matching words are highlighted.
- Practice checkboxes save *only in that person's browser* (localStorage). They are personal notes, **not a certification**, attendance record, or coach approval, and do not sync between devices.
- **Print selected belt** and **Print all belts** create clear, text-based sheets with an empty checklist for each technique. A browser print dialog allows printing to paper or saving as PDF. The printouts show **DRAFT — SCOTT TO REVIEW** until he signs off.
- Each belt provides the original source photo for comparison, along with alerts when glare or obstruction obscured text. `Black Belt and Beyond` remains separate pending confirmation.
- Concepts A, B, and C now advertise the interactive belt guide; original gym photos, schedule demo, Instagram, and Facebook links are retained.

## Critical source and accuracy note

The 161 entries were manually transcribed from photographs taken in the gym November 19, 2026. This is a **working transcription**, not a verified curriculum. The images are partly obscured by glare and objects; White (jab defense), Yellow (fitness time), Orange (wrist defense wording), and Camo (lower-right details) have specific review notes. Scott should review all nine belts against his original documents **before printing official handouts**. No content was invented to fill illegible gaps. Small editorial changes such as standardized capitalization and writing "two-hand" for "2 hand" were made for readability.

The source material is split between:

- `belt-levels/requirements.js` — data actually loaded by the static website.
- `belt-levels/requirements.json` — a JSON copy for structured editing or future integration.
- `assets/belts/<belt>.webp` — optimized source photos for nine belt sheets.

**Keep requirements.js and requirements.json in sync whenever Scott corrects the copy** (a developer can regenerate the JS file from JSON by prefixing `window.HAYSTACK_BELT_DATA = ` and adding `;` after the JSON). Each category holds a list of strings in order. Don't put unpublished private member information into the public source files.

## How to print belt sheets

1. Open `/belt-levels/` and select the belt, e.g. Blue.
2. Choose **Print Blue belt** or **Print all belts**.
3. In the browser's print dialog, print to paper, or choose **Save as PDF**.
4. Once Scott has approved all contents, the draft banner can be removed from `belts.js` print templates and `index.html`; until then keep the approval marks.

## Updating the live GitHub Pages prototype

1. Download and extract this ZIP.
2. Open `https://github.com/TimSwettlen/haystack-concepts` (not the existing Haystack site).
3. Upload the **contents** of this ZIP to the repository root on `main`, replacing prior files. Keep `index.html` directly in the repository root; do not add an extra containing folder.
4. GitHub Pages should deploy the new version. Visit `https://timswettlen.github.io/haystack-concepts/belt-levels/`.

If browser uploading cannot overwrite multiple existing files comfortably, using GitHub Desktop to replace tracked local files and commit is a good alternative.

---

## Original project information and schedule setup

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
