var num1 = 255;
console.log(num1.toString(16));
console.log(num1.toString(8));

var num2 = 123.45678;
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(7));

// 文字列をすうちに変換
var n = '123xxx';
console.log(Number(n)); //単純なキャスト
console.log(Number.parseFloat(n)); //先頭から数値と判断できるものを取り出して数値化
console.log(Number.parseInt(n));

var d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

var h = '0x10';
console.log(Number(h));
console.log(Number.parseFloat(h)); // parseFloatでは16進数のxは文字と認識されてしまう
console.log(Number.parseInt(h));

var b = '0b11';
console.log(Number(b)); //二進数と八進数はnumberでしか表示できない
console.log(Number.parseFloat(b));
console.log(Number.parseFloat(b));

var e = '1.02e+2';
console.log(Number(e));　 //parseFloatとNumberは普通に100をかけた数が表示される
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e)); //小数点を切り捨ててから100倍した数になっている