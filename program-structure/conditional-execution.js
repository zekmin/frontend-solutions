/*
 * Hello World
 * Write a function that greets the user by name, or by saying "Hello, World!" if no name is given.
 */

String.prototype.endsWith = function (str)
                              {
                                 return this.indexOf(str) == 0;
                              }

exports.heyBob = function (words) {
    if words.endswith("?") {
    return "Sure."
  }
  if words == words.toUpperCase {
    return "Whoa, chill out!"
  }
  if (!words) {
    return "Fine. Be that way!"
  } else {
    return "Whatever."
  }
  
}
