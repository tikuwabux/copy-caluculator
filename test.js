/*
//値渡し
let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);
//参照渡し
let c = { value: 1 };
let d = c;
c.value = 2;
console.log(c.value);
console.log(d.value);
*/

/*
let number = parseFloat("1*2+3+4/2", 10);
console.log(number);
//=> 1（先頭の数値だけがぬきだせれている）。ボツ
*/

//関数の引数に入れたら、文字列全部数値になる説

/*
let number = "1*2+3+4/2";

function equal_calc(number) {
  return number
}

console.log(number);
// => 1*2+3+4/2 。だめだわ引数にいれても数値にならねえ。ボツ。
*/

/* もうわかった。コンパイラが頑張って数値とかいい感じしてくれる
//コピペのなぜか文字列が数値に変わるコード
let number = new Function('return ' + "1*2+3+4/2")();
console.log(number);
*/

//console.log(1234 == "0");
/*
let result = {value: 18};
console.log(result.value);          //=> 黄色の18（他の文章と違う色）
console.log(typeof(result.value));  //=> number

result.value = "18";
console.log(result.value);          //=> 白の18(他の文章と同じ色)
console.log(typeof(result.value));  //=> string

result.value = 18;
console.log(result.value);          //=> 黄色の18
console.log(typeof(result.value));  //=> number
*/
/*
//= をおすと。result.value = temp(number)のはずなのに
//result.value == "temp"(string)となってしまうエラーを簡略化
let result = "";

let temp = 10;
result.value = temp;

console.log(result.value);
console.log(typeof(result.value));

//いや普通に問題なくresult.value == temp == 10となってるわ。
//これと同じことやってるはずのなのに、メインの方だとresult.value = "10" になるんよな。。。
*/

/* 　以下のように全く同じように再現してもresult2.value == 10となry
let result2 = "";
window.onload = function () {
  result2 = document.getElementById('result');
};

let temp = 10;
result2 = temp;

console.log(result2);
console.log(typeof(result2));
*/


/*
let result = {value: "18"};
console.log(result.value);
console.log(typeof(result.value));
*/