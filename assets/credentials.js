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

  document.querySelectorAll('.credential-card').forEach((card) => {
    const mark = card.querySelector('.credential-mark');
    const issuer = card.querySelector('p');
    const title = card.querySelector('h3');
    const issued = card.querySelector('small');
    if (!mark || !issuer || !title || !issued) return;

    const logo = logoUrls[[...mark.classList].find((name) => logoUrls[name])];
    if (logo) {
      mark.classList.add('has-logo');
      mark.innerHTML = `<img src="${logo}" alt="${issuer.textContent.trim()} logo" loading="lazy">`;
    }

    const front = document.createElement('div');
    front.className = 'credential-face credential-front';
    front.append(mark, issuer);
    const frontTitle = title.cloneNode(true);
    const frontIssued = issued.cloneNode(true);
    front.append(frontTitle, frontIssued);

    const back = document.createElement('div');
    back.className = 'credential-face credential-back';
    const backMark = mark.cloneNode(true);
    const backIssuer = issuer.cloneNode(true);
    const backTitle = title.cloneNode(true);
    const backIssued = issued.cloneNode(true);
    back.append(backMark, backIssuer, backTitle, backIssued);
    const hint = document.createElement('span');
    hint.className = 'credential-hint';
    hint.textContent = 'CREDENTIAL';
    back.append(hint);

    const inner = document.createElement('div');
    inner.className = 'credential-card-inner';
    inner.append(front, back);
    card.replaceChildren(inner);
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${title.textContent.trim()} credential`);
    card.setAttribute('aria-pressed', 'false');
    const toggle = () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
    });
  });
})();
