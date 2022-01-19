const breakSentences = (phrase) => {
  const splited = phrase.split(/(\d*x .* .\d+\,\d*.)/); 
  const result = splited.filter((item) => {if(item.trim().length >= 1) return item})
  return result;
};

module.exports = breakSentences;