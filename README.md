# Exclusive Slab Projects — Website demo

A complete static, mobile-first website demo prepared for Exclusive Slab Projects by Devign Digital. This delivery uses only semantic HTML5, CSS3 and vanilla JavaScript. No framework, package manager, build step, installation, backend or paid API is required.

## Open the demo

Unzip the folder and open `index.html` in a modern browser. Keep its files and the `assets` folder together. The website works from a local file. An internet connection is required for optional Google Fonts and WhatsApp; readable system fonts are used if Google Fonts cannot load. WhatsApp must be available to send an enquiry.

## Structure

- `index.html` — complete page, navigation, service proposals, illustrative gallery, about, contact, enquiry form and privacy notice.
- `styles.css` — semantic colour tokens, typography, layout and responsive rules. Mobile contact controls appear below 760px; reduced-motion preferences are respected.
- `script.js` — mobile navigation, current copyright year, privacy notice opening, form validation and WhatsApp message generation.
- `assets/` — three local construction photographs and an SVG favicon matching the wordmark.

## Static hosting / GitHub Pages

Upload these files unchanged to any static web host. All local references are relative, so repository subdirectories work.

For GitHub Pages, put these files at the root of a repository (not inside another nested folder), open Settings → Pages, choose “Deploy from a branch”, then select your branch and `/ (root)`. No workflow or build tools are required. The same files can be deployed to other static hosts.

## Enquiry flow and privacy

The form uses native required-field validation plus checks for whitespace-only required values and contact numbers containing 9–15 digits. It creates a URL-encoded WhatsApp message addressed to `27728432830`, containing the six form fields. Clicking the button opens WhatsApp in another tab; the visitor must review and press Send there. This does not prove that WhatsApp is installed, that the number has a WhatsApp account or that a message was received. No form data is stored, sent to a website backend or put in browser storage. WhatsApp’s privacy terms apply when the visitor uses WhatsApp.

The inline privacy notice is available beside the form and in the footer. Avoid sending sensitive personal information. Telephone links use `tel:+27728432830`. There is no map because precise coordinates have not been verified.

## Demo-only material / before client approval

All construction imagery is AI-generated illustrative content, not evidence of completed Exclusive Slab Projects work. Replace it with authorised, verified business photography before presenting it as an actual portfolio. Each gallery item and the hero carry illustrative labels.

The four service categories are proposals based on the supplied business name and industry. Confirm their availability and scope with the business, then adjust or remove categories both in the service section and project-type dropdown. Service priorities are not independently verified achievements. No years of experience, awards, testimonials, project locations, client logos or guarantees are fabricated.

Contact information is taken from the supplied brief:
- Exclusive Slab Projects
- 072 843 2830
- 29 Kilpview, Liefde En Vrede, Johannesburg South, 2190, South Africa

To update contact details, replace the visible number, telephone URLs, WhatsApp links and the destination in `script.js`. Update the supplied address in the contact/footer. Edit colour and font tokens at the start of `styles.css`. Review the privacy notice with the business before real-world use.

## Quality checks

The live demo and this standalone version were checked at desktop and narrow mobile sizes for image loading, overflow, navigation, quotation validation and URL-encoded WhatsApp handoff. Special characters such as `&`, `%`, `+` and `×` were included in the enquiry test. The actual external send/receipt must be completed by the visitor inside WhatsApp and is not automated.

The Lovable editor preview uses its mandatory TanStack framework; this delivered static website does not depend on that framework and is the version to host on GitHub Pages.
