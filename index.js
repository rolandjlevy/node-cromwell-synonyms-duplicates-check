const { synonyms } = require('./src/synonyms');
const { keywords } = require('./src/keywords');

const duplicates = keywords.filter(item => {
  const found = synonyms
    .filter(n => n
      .split(',')
      .find((str, index) => index === 0 && str === item));
  return found.length && found;
});

console.log(duplicates.join('\n'));