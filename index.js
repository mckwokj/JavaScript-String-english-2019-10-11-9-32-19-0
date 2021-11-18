// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...

function capStr(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function capSentence(sentence) {
  const strings = sentence.split(" ")
  return strings.map(str => capStr(str)).join(" ")
}

console.log(capSentence(sentence))


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.slice(1))
