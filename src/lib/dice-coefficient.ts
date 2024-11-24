// Finds degree of similarity between two strings, based on Dice's Coefficient algorithm.
// @see https://github.com/aceakash/string-similarity/blob/master/src/index.js

function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

function createBigrams(str: string): Map<string, number> {
  const bigrams = new Map<string, number>();
  for (let i = 0; i < str.length - 1; i++) {
    const bigram = str.substring(i, i + 2);
    const count = bigrams.has(bigram) ? bigrams.get(bigram)! + 1 : 1;

    bigrams.set(bigram, count);
  }
  return bigrams;
}

function getIntersectionSize(
  first: Map<string, number>,
  second: Map<string, number>,
): number {
  let intersectionSize = 0;
  for (const [bigram, count] of second) {
    if (first.has(bigram)) {
      intersectionSize += Math.min(count, first.get(bigram)!);
    }
  }
  return intersectionSize;
}

export function compareTwoStrings(str1: string, str2: string): number {
  const first = removeWhitespace(str1);
  const second = removeWhitespace(str2);

  if (first === second) return 1;
  if (first.length < 2 || second.length < 2) return 0;

  const firstBigrams = createBigrams(first);
  const secondBigrams = createBigrams(second);

  const intersectionSize = getIntersectionSize(firstBigrams, secondBigrams);

  return (2.0 * intersectionSize) / (first.length + second.length - 2);
}
