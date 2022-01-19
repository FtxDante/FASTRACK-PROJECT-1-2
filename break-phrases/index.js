const breakSentences = (phrase) => {
  const splited = phrase.split(/(\.*\d*x.*.\d+\,\d*.*)/); 
  return splited.filter((item) => item.trim());
};

module.exports = breakSentences;