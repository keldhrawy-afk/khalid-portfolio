(() => {
  const logoUrls = {
    hp: 'assets/images/credential-logos/hp-life.png',
    meta: 'assets/images/credential-logos/meta.png',
    li: 'assets/images/credential-logos/linkedin-learning.png',
    yanfaa: 'assets/images/credential-logos/yanfaa.png',
    uol: 'assets/images/credential-logos/university-of-london.png',
    ucd: 'assets/images/credential-logos/uc-davis.png',
    seif: 'assets/images/credential-logos/seif-elshennawy.png'
  };
  const credentialUrls = {
    'HP LIFE::Target Audience': 'https://www.life-global.org/certificate/fdd82df2-0b8e-4d53-b178-32d25dc62859',
    'HP LIFE::Unique Value Proposition': 'https://www.life-global.org/certificate/12715c36-dc8a-4951-b659-22024b20c9dc',
    'SEIFELSHENNawy::Content Marketing': 'https://seifelshennawy.com/certificates/content-marketing/?course_id=5211&cert-nonce=bf624be3e5',
    'YANFAA.COM::E-Store Management': 'https://yanfaa.s3.eu-west-1.amazonaws.com/certificates/4358e40b-b085-4e8f-92c4-b14178f7b6a6.pdf',
    'LINKEDIN LEARNING::SEO Foundations': 'https://www.linkedin.com/learning/certificates/f87365f6ac13d38cbb502ce25293ec2ff6a7be49c98b4937ec2d4c2114172429/',
    'LINKEDIN LEARNING::Social Media Video Strategy': 'https://www.linkedin.com/learning/certificates/d9ac43ed753a853b4c233136529188f6201a8485191f1e59eae13f04c1cc93b9/',
    'YANFAA.COM::Selling Skills': 'https://app.yanfaa.com/storage/certificates/b1c4d0a4-4478-4e84-b628-97bc5ec27fdf.pdf',
    'YANFAA.COM::Facebook Ads': 'https://app.yanfaa.com/storage/certificates/d140c379-6703-44e0-8c24-359145c75e0e.pdf',
    'YANFAA.COM::Social Media Management 101': 'https://app.yanfaa.com/storage/certificates/30b74eba-9bcf-4606-9cea-b7cd08e54e30.pdf',
    'META::Social Media Management': 'https://www.coursera.org/account/accomplishments/certificate/AM7HDJTEQH8A',
    'YANFAA.COM::Understanding Social Media Ads': 'https://app.yanfaa.com/storage/certificates/bc0a3431-7d01-4f16-a131-41f4a98058ab.pdf',
    'YANFAA.COM::Brand Strategy': 'https://app.yanfaa.com/storage/certificates/2d926ac8-4b37-4e42-80b8-5992e667ebb7.pdf',
    'YANFAA.COM::Social Media Strategy': 'https://app.yanfaa.com/storage/certificates/0b279081-62c4-4627-b941-98957f15c991.pdf',
    'UNIVERSITY OF LONDON::Fundamentals of Marketing Strategy': 'https://coursera.org/share/92ce9d0603817f55d71032829cb0a18b',
    'UNIVERSITY OF CALIFORNIA, DAVIS::Introduction to Google SEO': 'https://coursera.org/share/08aab5527283cd2ef08160cf58c830d3',
    'META::Introduction to Social Media Marketing': 'https://coursera.org/share/8c78b9ffb3f29b6dffd54bafa920da63'
  };
  const issuerInfo = [
    { id: 'HP LIFE', label: 'HP LIFE', logo: logoUrls.hp },
    { id: 'YANFAA.COM', label: 'YANFAA', logo: logoUrls.yanfaa },
    { id: 'LINKEDIN LEARNING', label: 'LINKEDIN', logo: logoUrls.li },
    { id: 'META', label: 'META', logo: logoUrls.meta },
    { id: 'UNIVERSITY OF LONDON', label: 'U. LONDON', logo: logoUrls.uol },
    { id: 'UNIVERSITY OF CALIFORNIA, DAVIS', label: 'UC DAVIS', logo: logoUrls.ucd }
  ];
  const grid = document.querySelector('.credential-grid');
  let issuerHub;
  let issuerPanel;
  const credentials = [];
  if (grid) {
    issuerHub = document.createElement('div');
    issuerHub.className = 'issuer-hub';
    issuerHub.setAttribute('aria-label', 'Choose an issuer to verify credentials');
    issuerHub.innerHTML = `<div class="issuer-hub-copy"><span>/ VERIFY BY ISSUER</span><p>Choose a logo, then open the original credential.</p></div><div class="issuer-tiles">${issuerInfo.map((issuer) => `<button class="issuer-tile" type="button" data-issuer="${issuer.id}" aria-pressed="false"><img src="${issuer.logo}" alt="${issuer.label}"><small>${String(Object.keys(credentialUrls).filter((key) => key.startsWith(`${issuer.id}::`)).length).padStart(2, '0')}</small></button>`).join('')}</div>`;
    grid.before(issuerHub);
    issuerPanel = document.createElement('div');
    issuerPanel.className = 'issuer-panel';
    issuerPanel.hidden = true;
    issuerHub.after(issuerPanel);
  }

  document.querySelectorAll('.credential-card').forEach((card) => {
    const mark = card.querySelector('.credential-mark');
    const issuer = card.querySelector('p');
    const title = card.querySelector('h3');
    const issued = card.querySelector('small');
    if (!mark || !issuer || !title || !issued) return;

    const logo = logoUrls[[...mark.classList].find((name) => logoUrls[name])];
    const issuerName = issuer.textContent.trim();
    card.dataset.issuer = issuerName;
    const credentialUrl = credentialUrls[`${issuerName}::${title.textContent.trim()}`];
    credentials.push({ issuer: issuerName, title: title.textContent.trim(), issued: issued.textContent.trim(), url: credentialUrl });
    if (logo) {
      mark.classList.add('has-logo');
      mark.innerHTML = `<img src="${logo}" alt="${issuer.textContent.trim()} logo" loading="lazy">`;
    }

    const front = document.createElement('div');
    front.className = 'credential-face credential-front';
    if (credentialUrl) {
      const verifyLink = document.createElement('a');
      verifyLink.className = 'credential-verify';
      verifyLink.href = credentialUrl;
      verifyLink.target = '_blank';
      verifyLink.rel = 'noopener';
      verifyLink.setAttribute('aria-label', `View ${title.textContent.trim()} credential`);
      verifyLink.append(mark);
      front.append(verifyLink, issuer);
    } else {
      front.append(mark, issuer);
    }
    const frontTitle = title.cloneNode(true);
    const frontIssued = issued.cloneNode(true);
    front.append(frontTitle, frontIssued);

    const back = document.createElement('div');
    back.className = 'credential-face credential-back';
    const backMark = mark.cloneNode(true);
    const backIssuer = issuer.cloneNode(true);
    const backTitle = title.cloneNode(true);
    const backIssued = issued.cloneNode(true);
    if (credentialUrl) {
      const backVerifyLink = document.createElement('a');
      backVerifyLink.className = 'credential-verify';
      backVerifyLink.href = credentialUrl;
      backVerifyLink.target = '_blank';
      backVerifyLink.rel = 'noopener';
      backVerifyLink.setAttribute('aria-label', `View ${title.textContent.trim()} credential`);
      backVerifyLink.append(backMark);
      back.append(backVerifyLink, backIssuer, backTitle, backIssued);
    } else {
      back.append(backMark, backIssuer, backTitle, backIssued);
    }
    const hint = document.createElement('span');
    hint.className = 'credential-hint';
    hint.textContent = 'CREDENTIAL';
    back.append(hint);

    const inner = document.createElement('div');
    inner.className = 'credential-card-inner';
    inner.append(front, back);
    card.replaceChildren(inner);
    card.tabIndex = 0;
    card.setAttribute('role', credentialUrl ? 'link' : 'group');
    card.setAttribute('aria-label', credentialUrl ? `Open original ${title.textContent.trim()} credential` : `${title.textContent.trim()} credential`);
    if (credentialUrl) card.classList.add('has-direct-link');
    card.addEventListener('click', (event) => { if (credentialUrl && !event.target.closest('a')) window.open(credentialUrl, '_blank', 'noopener'); });
    card.addEventListener('keydown', (event) => {
      if (credentialUrl && !event.target.closest('a') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); window.open(credentialUrl, '_blank', 'noopener'); }
    });
  });

  grid?.remove();

  issuerHub?.querySelectorAll('.issuer-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const issuer = tile.dataset.issuer;
      issuerHub.querySelectorAll('.issuer-tile').forEach((item) => {
        const active = item === tile;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      const items = credentials.filter((credential) => credential.issuer === issuer && credential.url);
      issuerPanel.hidden = false;
      issuerPanel.innerHTML = `<div class="issuer-panel-heading"><span>/ ORIGINAL CREDENTIALS</span><b>${tile.querySelector('img')?.alt || issuer}</b></div><div class="issuer-panel-list">${items.map((credential) => `<a href="${credential.url}" target="_blank" rel="noopener"><span>${credential.title}</span><small>${credential.issued} &nbsp; / &nbsp; OPEN ORIGINAL ↗</small></a>`).join('')}</div>`;
    });
  });
})();
