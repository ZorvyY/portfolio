// Create a javascript function that, when called, embeds its own definition in a string.


function embedString() {
  const string = `function embedSelf(prefix, suffix) { return prefix + self + suffix; }`;
  return function embedSelf(prefix, suffix) {
    return prefix + string + suffix;
  }
}

module.exports = embedString();


