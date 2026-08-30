const root = document.querySelector('#workspace');
const slug = new URLSearchParams(location.search).get('project');
const project = window.workspaces?.find(item => item.slug === slug);
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[character]));

if (!project) {
  document.title = 'Workspace unavailable | Khalid Eldhrawy';
  root.innerHTML = `<section class="state"><p>/ SHARED WORKSPACE</p><h1>THIS LINK IS<br>NOT AVAILABLE.</h1><span>Check that the complete link was copied correctly.</span></section>`;
} else {
  document.title = `${project.share.title} | Khalid Eldhrawy`;
  root.innerHTML = `
    <header><a class="wordmark" href="../" aria-label="Khalid Eldhrawy portfolio">KHALID<br>ELDHRAWY</a><p>/ SHARED WORKSPACE &nbsp; / &nbsp; ${escapeHTML(project.visibility).toUpperCase()}</p></header>
    <section class="intro"><p class="mono">${escapeHTML(project.industry)} &nbsp; / &nbsp; ${escapeHTML(project.period)}</p><h1>${escapeHTML(project.title)}</h1><h2>${escapeHTML(project.subtitle)}</h2><p>${escapeHTML(project.summary)}</p></section>
    <section class="metrics">${project.metrics.map(([value, label]) => `<article><strong>${escapeHTML(value)}</strong><span>${escapeHTML(label)}</span></article>`).join('')}</section>
    <section class="sections">${project.sections.map((section, index) => `<article><p class="mono">0${index + 1} / ${escapeHTML(section.label)}</p><h3>${escapeHTML(section.title)}</h3><p>${escapeHTML(section.body)}</p></article>`).join('')}</section>
    <section class="evidence"><p class="mono">/ EVIDENCE ROOM</p><div>${project.assets.map((asset, index) => `<figure><span>0${index + 1}</span><figcaption>${escapeHTML(asset)}</figcaption></figure>`).join('')}</div></section>
    <footer><p>${escapeHTML(project.share.note)}</p><span>BUILT BY KHALID ELDHRAWY</span></footer>`;
}
