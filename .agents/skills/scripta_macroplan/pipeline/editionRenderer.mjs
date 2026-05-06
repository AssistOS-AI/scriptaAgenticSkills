import { escapeHtml } from '../core/text.mjs';
import { localizeEditorialProfile } from './bookWriterLanguage.mjs';

export function renderPlainManuscript(edition) {
  return [
    `# ${edition.title}`,
    '',
    edition.premise,
    '',
    ...edition.chapters.flatMap((chapter) => [
      `## ${chapter.displayTitle}`,
      '',
      ...chapter.paragraphs,
      ''
    ])
  ].join('\n').trimEnd() + '\n';
}

export function renderBookHtml(edition) {
  const pack = edition.languagePack;
  const coverSvg = renderCoverSvg(edition);
  const toc = edition.chapters.map((chapter) => `<li><a href="#${escapeHtml(chapter.id)}">${escapeHtml(chapter.displayTitle)}</a></li>`).join('');
  const chapters = edition.chapters.map((chapter) => `
      <article id="${escapeHtml(chapter.id)}" class="chapter page-break">
        <h2>${escapeHtml(chapter.displayTitle)}</h2>
        ${chapter.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n        ')}
      </article>`).join('\n');
  const metadata = {
    targetLanguage: edition.requestedLanguage,
    contentLanguage: edition.contentLanguage,
    mode: edition.mode,
    translationInstruction: edition.translationInstruction,
    generatedWith: edition.generatedWith
  };

  return `<!DOCTYPE html>
<html lang="${escapeHtml(edition.contentLanguage)}" dir="${escapeHtml(pack.direction)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(edition.title)}</title>
  <meta name="description" content="${escapeHtml(edition.premise)}">
  <style>
    :root {
      color-scheme: light;
      --bg: ${edition.coverPalette.background};
      --paper: #faf7f2;
      --ink: #181818;
      --muted: #6b625a;
      --accent: ${edition.coverPalette.accent};
      --accent-soft: ${edition.coverPalette.accentSoft};
      --cover-ink: ${edition.coverPalette.ink};
      --line: rgba(0, 0, 0, 0.12);
    }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: linear-gradient(180deg, #ebe6dd 0%, #f7f3ee 100%); color: var(--ink); }
    .reader { width: min(100%, 980px); margin: 0 auto; padding: 32px 18px 64px; }
    .sheet { background: var(--paper); box-shadow: 0 18px 54px rgba(17, 18, 22, 0.12); border-radius: 24px; overflow: hidden; }
    .cover { background: var(--bg); color: var(--cover-ink); min-height: 100svh; display: grid; grid-template-columns: 1.1fr 0.9fr; }
    .cover__copy { display: flex; flex-direction: column; justify-content: center; gap: 18px; padding: 48px; }
    .eyebrow { font-family: "Helvetica Neue", Arial, sans-serif; letter-spacing: 0.18em; text-transform: uppercase; font-size: 0.72rem; opacity: 0.86; }
    .cover h1, .title-page h1 { font-size: clamp(2.6rem, 6vw, 4.6rem); line-height: 0.95; margin: 0; }
    .cover p, .title-page p, .imprint p, nav, .notice { font-family: "Helvetica Neue", Arial, sans-serif; }
    .cover__tagline { font-size: 1.05rem; line-height: 1.55; max-width: 28ch; }
    .body { padding: 40px 44px 56px; }
    .title-page, .imprint, nav, .appendix-block { border-bottom: 1px solid var(--line); padding: 18px 0 24px; }
    .imprint-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px 24px; }
    .imprint-grid dt { font-weight: 700; margin-bottom: 4px; color: var(--muted); }
    .imprint-grid dd { margin: 0; }
    nav ol { margin: 10px 0 0; padding-left: 1.25rem; }
    nav li + li { margin-top: 8px; }
    nav a { color: inherit; text-decoration: none; border-bottom: 1px solid transparent; }
    nav a:hover { border-color: var(--accent); }
    .chapter { max-width: 760px; margin: 0 auto; padding: 34px 0 14px; }
    .chapter h2 { font-size: 1.9rem; margin-bottom: 1.3rem; }
    .chapter p { font-size: 1.08rem; line-height: 1.9; margin: 0 0 1.05rem; text-wrap: pretty; }
    .notice { background: #fff4dd; border: 1px solid #e9c27a; border-radius: 14px; padding: 12px 14px; line-height: 1.55; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin: 0; }
    .metrics-grid div { background: rgba(0, 0, 0, 0.035); border-radius: 14px; padding: 10px 12px; }
    .metrics-grid dt { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 0.74rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
    .metrics-grid dd { margin: 6px 0 0; font-size: 1.18rem; font-weight: 700; }
    @media (max-width: 820px) {
      .cover { grid-template-columns: 1fr; }
      .cover__copy, .body { padding: 28px 22px 36px; }
    }
    @media print {
      body { background: #fff; }
      .reader { width: 100%; margin: 0; padding: 0; }
      .sheet { box-shadow: none; border-radius: 0; }
      .page-break { break-before: page; }
      .cover { min-height: auto; break-after: page; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <main class="reader">
    <div class="sheet">
      <section class="cover">
        <div>${coverSvg}</div>
        <div class="cover__copy">
          <div class="eyebrow">${escapeHtml(edition.profileLabel)}</div>
          <h1>${escapeHtml(edition.title)}</h1>
          <p class="cover__tagline">${escapeHtml(edition.profileFlavor.coverTagline)}</p>
          <p>${escapeHtml(pack.ui.coverLine)}</p>
        </div>
      </section>
      <div class="body">
        <section class="title-page">
          <p class="eyebrow">${escapeHtml(pack.ui.titlePage)}</p>
          <h1>${escapeHtml(edition.title)}</h1>
          <p>${escapeHtml(edition.subtitle)}</p>
          <p>${escapeHtml(edition.premise)}</p>
        </section>
        <section class="imprint page-break">
          <p class="eyebrow">${escapeHtml(pack.ui.imprint)}</p>
          ${edition.unsupportedNote ? `<p class="notice">${escapeHtml(edition.unsupportedNote)}</p>` : ''}
          <dl class="imprint-grid">
            <div><dt>${escapeHtml(pack.ui.profile)}</dt><dd>${escapeHtml(edition.profileLabel)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.workForm)}</dt><dd>${escapeHtml(edition.workForm)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.editorialProfile)}</dt><dd>${escapeHtml(localizeEditorialProfile(edition.editorialProfile, edition.contentLanguage))}</dd></div>
          </dl>
          <p>${escapeHtml(pack.ui.colophon)}</p>
        </section>
        <nav class="page-break">
          <p class="eyebrow">${escapeHtml(pack.ui.contents)}</p>
          <ol>${toc}</ol>
        </nav>
${chapters}
      </div>
    </div>
  </main>
  <script type="application/json" id="scripta-edition-metadata">${escapeHtml(JSON.stringify(metadata))}</script>
</body>
</html>`;
}

function renderCoverSvg(edition) {
  const palette = edition.coverPalette;
  return `<svg viewBox="0 0 800 1080" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(edition.title)}">
  <defs>
    <linearGradient id="cover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.background}" />
      <stop offset="100%" stop-color="${palette.accent}" />
    </linearGradient>
  </defs>
  <rect width="800" height="1080" fill="url(#cover-gradient)" />
  <circle cx="640" cy="180" r="126" fill="${palette.accentSoft}" opacity="0.18" />
  <circle cx="160" cy="920" r="150" fill="${palette.accentSoft}" opacity="0.12" />
  ${coverMotif(edition.bookId, palette)}
</svg>`;
}

function coverMotif(bookId, palette) {
  if (bookId.includes('detective')) {
    return `<path d="M120 860 Q260 720 340 620 T520 430 T700 220" stroke="${palette.accentSoft}" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.72" /><rect x="280" y="270" width="260" height="420" rx="24" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.55" />`;
  }
  if (bookId.includes('scifi')) {
    return `<circle cx="400" cy="520" r="180" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.75" /><ellipse cx="400" cy="520" rx="250" ry="92" fill="none" stroke="${palette.accentSoft}" stroke-width="14" opacity="0.52" /><circle cx="610" cy="470" r="18" fill="${palette.accentSoft}" opacity="0.9" />`;
  }
  if (bookId.includes('fantasy')) {
    return `<path d="M395 220 L550 520 L395 840 L240 520 Z" fill="none" stroke="${palette.accentSoft}" stroke-width="18" opacity="0.72" /><path d="M395 300 L490 520 L395 740 L300 520 Z" fill="${palette.accentSoft}" opacity="0.12" />`;
  }
  if (bookId.includes('romance')) {
    return `<path d="M300 340 C240 250 120 250 120 390 C120 550 300 670 400 770 C500 670 680 550 680 390 C680 250 560 250 500 340 C470 386 430 420 400 460 C370 420 330 386 300 340 Z" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.72" />`;
  }
  return `<path d="M140 760 C260 640 340 610 420 520 S610 340 700 260" stroke="${palette.accentSoft}" stroke-width="20" fill="none" stroke-linecap="round" opacity="0.72" />`;
}
