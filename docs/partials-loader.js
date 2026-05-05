async function includePartials() {
  const targets = [...document.querySelectorAll('[data-include]')];
  await Promise.all(
    targets.map(async (target) => {
      const includePath = target.getAttribute('data-include');
      if (!includePath) {
        return;
      }

      const response = await fetch(includePath);
      if (!response.ok) {
        target.innerHTML = `<p>Failed to load partial: ${includePath}</p>`;
        return;
      }

      target.innerHTML = await response.text();
    })
  );
}

includePartials().catch((error) => {
  console.error(error);
});
