// データ
var result = "";
// =で計算したかどうか
var is_calc = false;

// 初期表示
window.onload = function () {
  result = document.getElementById('result');
};

// Cキー押下
function c_click(){
  result.value = "0";
  is_calc = false;
}

// 数字キー押下
function num_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value == "0" && val == "0"){
    result.value = "0";
  }else if(result.value == "0" && val == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = val;
  }  
  //小数点連打禁止追加
  /*これだと連続では打てないけど、数字挟めばふくすうの小数点がうててしまう。
  }else if(result.value.slice(-1) == "." && val == "."){
    result.value = result.value.slice(0, -1) + val;
  */
   else if (result.value.toString().includes(".") && val == "."){
    val = null;
    result.value = result.value;
  }//少数点連打禁止終わり
  
   //大きな値で小数点２個目打つと、「0.」になってしまう問題解消
   //
   else{
    result.value += val;
  }
  //result.value = "押した数値"　確認。違った、result.value = 押した数値（文字列ではなく、数値）だった・
  console.log(result.value);
  // いや違った。文字列であってた
  console.log(typeof(result.value));
  // => string
}

// 演算子キー押下
function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
  
  //result.value が文字列か確認。
  console.log(result.value);
  console.log(typeof(result.value));
  //=> string
  
}

// =キークリック
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);
  /*
  //result.valueの値確認
  var temp = result.value.replaceAll("×", "*").replaceAll("÷", "/");
  console.log(temp);
  console.log(typeof(temp));
  // => string
  
  //result.value = result.value.replaceAll("×", "*").replaceAll("÷", "/")();
  //console.log(result.value);
  temp = "return " + result.value.replaceAll("×", "*").replaceAll("÷", "/");
  console.log(temp);
  console.log(typeof(temp));
  // => string
  
  temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  console.log(typeof(temp));
  
  // => numberになってる！！！やはりstring　→ number　への変化は、new Function(--)();のパワー
  */
  //下のreturn、文末に半角スペースないとエラー発生するで
  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  //上のやつを２つの文に分割してみる。これは１つめ
  // 関数じゃなくて変数にしてみたけどだめ　var temp = result.value.replaceAll("×", "*").replaceAll("÷", "/");
  //var temp = equal_calc();
  //var temp = equal_calc(result)
  
  //ボツ
 // var temp = equal_calc();
  
  console.log(temp);
  console.log(typeof(temp));
  // => numberになってる！！！！！
  
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
  
 console.log(result.value);
 console.log(typeof(result.value));
 //ありゃなぜかstringになってる。
 
 console.log(temp);
 console.log(typeof(temp));
 // => result.valueに代入してるtempは変わらずnumber
}

// 入力されている値が演算子かどうか
function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}

/*
//これは２つめ
function equal_calc(){
  //"return "+result.value.replaceAll("×", "*").replaceAll("÷", "/");
  "return " + result.value.replaceAll("×", "*").replaceAll("÷", "/");
}
*/
/*最初の1文字目の数字しか取り出せないからボツ
function equal_calc() {
  parseInt(result.value.replaceAll("×", "*").replaceAll("÷", "/"), 10);
}
*/

/*
function equal_calc() {
  result.value.replaceAll("×", "*").replaceAll("÷", "/");
}
*/
//resultがvalueプロパティであることと、そのvalueプロパティのvalue値（文字列）とval(文字列)の足し算が+でできるかの確認
/*
result = {value: "0"};
let val = "+";
result.value = result.value + val; 
console.log(result)
*/
//結果はvalue: "0+"　となり問題なくできることが確認できたj。

// ["+","-","×","÷"].includes(result.value.toString().slice(-1)); の理解
/*
result = {value: "0"};
let val = "+";
result.value = result.value + val; 

let a = ["+","-","×","÷"].includes(result.value.toString().slice(-1));
console.log(a);

let b = ["+","-","×","÷"].includes(result.value.toString());
console.log(b);

//result.value.toString().slice(-1); の理解
let c = ["+","-","×","÷"].includes(result.value);
console.log(c);

let d = result.value.toString().slice(-1);
console.log(d);

let e = result.value.toString();
console.log(e);

let f = result.value;
console.log(f);
*/

/*
//これtrueだった....びっくり。== では文字列か数値かっていうオブジェクトの違いは考慮されないのか
console.log(0 == "0")
*/