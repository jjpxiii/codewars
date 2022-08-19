function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 1; i > 0; i--) {
    const line = pyramid[i];
    for (let j = 0; j < line.length - 1; j++) {
      let upper = pyramid[i - 1][j];
      if (line[j] > line[j + 1]) {
        pyramid[i - 1][j] += line[j];
      } else {
        pyramid[i - 1][j] += line[j + 1];
      }
    }
  }
  return pyramid[0][0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
