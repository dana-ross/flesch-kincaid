/*eslint prefer-const: "error", sourceType: "module" */
/*eslint-env es6*/
const syllables = x => (x.replace(/e$/i, '').match(/[aeiouy]+/gi) || ['']).length
const words = x => (x.split(/\s+/) || ['']).length
const sentences = x => (x.split('. ') || ['']).length
const syllablesPerWord = x => syllables(x) / words(x)
const wordsPerSentence = x => words(x) / sentences(x)

export const rate = x => 206.835 - 1.015 * wordsPerSentence(x) - 84.6 * syllablesPerWord(x)
export const grade = x => 0.39 * wordsPerSentence(x) + 11.8 * syllablesPerWord(x) - 15.59
const test = (fn, x,y) => console.log(x + (Math.round(fn(x)) === y ? 'Pass' : 'Fail (' + fn(x) + ')'))

// test(syllables,"The cat sat on the mat.", 6);
// test(words, "The cat sat on the mat.", 6);
// test(sentences, "The cat sat on the mat.", 1);
// test(rate, "The cat sat on the mat.", 116);

// test(words, "This sentence, taken as a reading passage unto itself, is being used to prove a point.", 16);
// test(syllables, "This sentence, taken as a reading passage unto itself, is being used to prove a point.", 23);
// test(rate, "This sentence, taken as a reading passage unto itself, is being used to prove a point.", 74);

// test(rate, "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature.", 37);
// test(grade, "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature.", 13);