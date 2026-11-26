const keywordStyles = new Map([
  ['화상', 'burn'],
  ['출혈', 'bleed'],
  ['진동', 'tremor'],
  ['파열', 'rupture'],
  ['침잠', 'sinking'],
  ['호흡', 'poise'],
  ['충전', 'charge'],
]);

const selectedKeywords = new Set();
const selectedCosts = new Set();
const sortedCatalog = catalog.map(({ sinner, identities }) => ({
  sinner,
  identities: [...identities].sort((a, b) => (a.cost ?? Infinity) - (b.cost ?? Infinity)),
}));
const search = createIdentitySearch(sortedCatalog);
const keywordButtons = document.querySelector('#keyword-buttons');
const costButtons = document.querySelector('#cost-buttons');
const resetButton = document.querySelector('#reset');
const searchInput = document.querySelector('#identity-search');
const clearSearchButton = document.querySelector('#clear-search');
const results = document.querySelector('#results');
const resultCount = document.querySelector('#result-count');
const details = document.querySelector('#details');
const detailName = document.querySelector('#detail-name');
const detailCost = document.querySelector('#detail-cost');
const detailSinner = document.querySelector('#detail-sinner');
const affiliations = document.querySelector('#affiliations');
const noAffiliations = document.querySelector('#no-affiliations');
const cardDetails = new WeakMap();
let activeCard;
let press;
let backdropPressed = false;

function element(tag, className, label) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (label !== undefined) node.textContent = label;
  return node;
}

function showDetails(card) {
  if (details.open) return;
  const { sinner, identity } = cardDetails.get(card);
  activeCard = card;
  detailSinner.textContent = sinner;
  detailName.textContent = identity.name;
  detailCost.hidden = identity.cost == null;
  detailCost.textContent = detailCost.hidden ? '' : `${identity.cost}코스트`;
  affiliations.replaceChildren(...identity.affiliations.map(name => element('li', '', name)));
  affiliations.hidden = identity.affiliations.length === 0;
  noAffiliations.hidden = !affiliations.hidden;
  details.showModal();
}

function makeCard(sinner, identity) {
  const card = element('button', 'identity');
  card.type = 'button';
  card.setAttribute('aria-haspopup', 'dialog');
  const heading = element('span', 'identity-heading');
  heading.append(element('span', 'identity-name', identity.name));
  if (identity.cost != null) heading.append(element('span', 'cost', `${identity.cost}코스트`));
  const tags = element('span', 'tags');
  for (const keyword of identity.keywords) {
    const tag = element('span', `tag ${keywordStyles.get(keyword)}`, keyword);
    tag.classList.toggle('matched', selectedKeywords.has(keyword));
    tags.append(tag);
  }
  card.append(heading, tags);
  cardDetails.set(card, { sinner, identity });
  return card;
}

function renderResults() {
  const fragment = document.createDocumentFragment();
  const allKeywords = selectedKeywords.size === 0;
  const allCosts = selectedCosts.size === 0;
  const matchesSearch = search(searchInput.value);
  let count = 0;

  for (const { sinner, identities } of sortedCatalog) {
    const matching = identities.filter(identity =>
      (allKeywords || identity.keywords.some(keyword => selectedKeywords.has(keyword))) &&
      (allCosts || selectedCosts.has(identity.cost)) && matchesSearch(identity));
    if (matching.length === 0) continue;

    const group = element('section', 'sinner');
    const heading = element('h3', 'sinner-name', sinner);
    const grid = element('div', 'identity-grid');
    grid.append(...matching.map(identity => makeCard(sinner, identity)));
    heading.append(element('span', 'sinner-count', `${matching.length}개`));
    group.append(heading, grid);
    fragment.append(group);
    count += matching.length;
  }

  if (count === 0) fragment.append(element('p', 'empty', '선택한 조건에 해당하는 인격이 없습니다.'));
  results.replaceChildren(fragment);
  resultCount.textContent = `${count}개`;
  resetButton.disabled = allKeywords && allCosts;
  clearSearchButton.disabled = searchInput.value.length === 0;
}

function addFilterButtons(container, selection, options) {
  for (const { value, label, style } of options) {
    const button = element('button', `filter-button ${style}`, label);
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      if (!selection.delete(value)) selection.add(value);
      button.setAttribute('aria-pressed', String(selection.has(value)));
      renderResults();
    });
    container.append(button);
  }
}

const keywordOptions = Array.from(keywordStyles, ([value, style]) => ({
  value, label: value, style: `keyword-button ${style}`,
}));
const costs = catalog.flatMap(({ identities }) => identities.map(({ cost }) => cost));
const costOptions = [...new Set(costs.filter(cost => cost != null))]
  .sort((a, b) => a - b)
  .map(value => ({ value, label: `${value}코스트`, style: 'cost-button' }));
addFilterButtons(keywordButtons, selectedKeywords, keywordOptions);
addFilterButtons(costButtons, selectedCosts, costOptions);

resetButton.addEventListener('click', () => {
  const pressedButtons = document.querySelectorAll('.filter-button[aria-pressed="true"]');
  selectedKeywords.clear();
  selectedCosts.clear();
  for (const button of pressedButtons) button.setAttribute('aria-pressed', 'false');
  pressedButtons[0]?.focus({ preventScroll: true });
  renderResults();
});

searchInput.addEventListener('input', renderResults);
clearSearchButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  renderResults();
});

function cancelPress() {
  if (!press) return;
  clearTimeout(press.timer);
  press = null;
}

results.addEventListener('pointerdown', event => {
  const card = event.target.closest('.identity');
  if (!card || !event.isPrimary || event.button !== 0) return;
  cancelPress();
  press = {
    pointer: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    timer: setTimeout(() => {
      cancelPress();
      if (card.isConnected) showDetails(card);
    }, 450),
  };
});

window.addEventListener('pointermove', event => {
  if (press?.pointer !== event.pointerId) return;
  if (Math.hypot(event.clientX - press.x, event.clientY - press.y) > 9) cancelPress();
});

for (const eventType of ['pointerup', 'pointercancel']) {
  window.addEventListener(eventType, event => {
    if (press?.pointer === event.pointerId) cancelPress();
  });
}
window.addEventListener('blur', cancelPress);

results.addEventListener('contextmenu', event => {
  const card = event.target.closest('.identity');
  if (!card) return;
  event.preventDefault();
  cancelPress();
  showDetails(card);
});

results.addEventListener('click', event => {
  const card = event.target.closest('.identity');
  if (card) showDetails(card);
});

details.addEventListener('pointerdown', event => {
  backdropPressed = event.target === details;
});
details.addEventListener('click', event => {
  if (backdropPressed && event.target === details) details.close();
  backdropPressed = false;
});
details.addEventListener('close', () => {
  backdropPressed = false;
  activeCard?.focus({ preventScroll: true });
});

renderResults();
