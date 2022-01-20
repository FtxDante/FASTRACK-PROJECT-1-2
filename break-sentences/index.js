const breakSentences = phrase => phrase.split(/(?=sem)/)
const text = '4x de R$ 17,48* sem juros no Cartão Renner';

module.exports = breakSentences;