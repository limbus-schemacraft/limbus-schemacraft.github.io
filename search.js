const hangulInitials = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';

function searchWords(text) {
  return text.normalize('NFKC').toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
}

function initialKey(text) {
  return Array.from(text, character => {
    const code = character.codePointAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) {
      return hangulInitials[Math.floor((code - 0xac00) / 588)];
    }
    if (code >= 0x1100 && code <= 0x1112) return hangulInitials[code - 0x1100];
    return character;
  }).join('');
}

function withinOneEdit(left, right) {
  if (left.length > right.length) return withinOneEdit(right, left);
  const extra = right.length - left.length;
  if (extra > 1) return false;

  let index = 0;
  while (index < left.length && left[index] === right[index]) index++;
  if (index === left.length) return true;
  if (extra === 1) return left.slice(index) === right.slice(index + 1);
  if (left.slice(index + 1) === right.slice(index + 1)) return true;
  return left[index] === right[index + 1] && left[index + 1] === right[index] &&
    left.slice(index + 2) === right.slice(index + 2);
}

function createIdentitySearch(groups) {
  const index = new Map();
  for (const { sinner, identities } of groups) {
    for (const identity of identities) {
      const affiliations = identity.affiliations.map(name => name.replace(/<[^>]*>/g, ''));
      const fields = [sinner, identity.name, ...affiliations].map(searchWords);
      const compact = fields.map(words => words.join(''));
      index.set(identity, {
        compact,
        initials: compact.map(initialKey),
        words: [...new Set(fields.flat())].map(word => word.normalize('NFD')),
      });
    }
  }

  return query => {
    const tokens = query.trim().split(/\s+/u).map(term => searchWords(term).join('')).filter(Boolean);
    const terms = tokens.map(text => ({
      text,
      initials: /^[ᄀ-ᄒ]+$/u.test(text) ? initialKey(text) : null,
      fuzzy: /^(?:[가-힣]{2,}|[a-z][a-z0-9]{3,})$/u.test(text) ? text.normalize('NFD') : null,
    }));

    return identity => {
      if (terms.length === 0) return true;
      const entry = index.get(identity);
      return terms.every(({ text, initials, fuzzy }) => {
        if (entry.compact.some(field => field.includes(text))) return true;
        if (initials) return entry.initials.some(field => field.includes(initials));
        return fuzzy !== null && entry.words.some(word => withinOneEdit(fuzzy, word));
      });
    };
  };
}
