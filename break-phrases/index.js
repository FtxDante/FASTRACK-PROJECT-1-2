const breakSentences = (phrase) => {
  const splited = phrase.split(/(\.*\d*x.*.\d+\,\d*.*)/); 
  const result = splited.filter((item) => item.trim())
  return result;
};

module.exports = breakSentences;