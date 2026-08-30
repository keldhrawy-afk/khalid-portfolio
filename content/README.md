# Content workspace system

`workspaces.js` is the registry for public and unlisted workspaces that are safe to publish in the static site. Each workspace gets a direct link in this format:

`/share/?project=project-slug`

## Visibility rules

- `public`: may be linked from the portfolio and indexed.
- `unlisted`: accessible by a direct link, but do not add it to the main navigation or send sensitive data to the browser.
- `private`: never add its content to `workspaces.js`. Use a protected deployment and server-side access control.

GitHub Pages is static and public. An unlisted link improves presentation but is not access control.
