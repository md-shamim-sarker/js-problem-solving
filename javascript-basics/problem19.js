// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  const func = (x) => x.replace("%", "");
  const first = func(a);
  const second = func(b).split("").reverse().join("");
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

let result = myFunction("c%ountry", "edis");
console.log(result);

/*
Basic:
------
let str = "Sn@e%h!a$ @M$o&n#y";
let newStr = str.replace(/[^a-zA-Z ]/g, "");
console.log(str);
console.log(newStr);

let str2 = "Shamim";
let str3 = str2.split("").reverse().join("");
console.log(str3);
*/
