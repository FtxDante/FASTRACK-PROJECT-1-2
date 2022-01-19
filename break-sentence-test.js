const breakSentences = require('./break-phrases')
const text = 'Compre já essa camisa somente hoje 3x sem juro de $ 22,55*';
const text2 = '4x de R$ 17,48* sem juros no Cartão Renner'
const text3 = 'Sem juros no Cartão Renner 4x de R$ 17,48* '
const text4 = 'Compre já essa camisa por 3x sem juro de $ 22,55* somente hoje';

console.log(breakSentences(text));
console.log(breakSentences(text2));
console.log(breakSentences(text3));
console.log(breakSentences(text4));
