var ary1 = ['sato','takea','osada','hiro','saitoh','sato']
var ary2 = ['yabuki', 'aoki', 'moriyama', 'yamada']
/*
console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.indexOf('sato'));
console.log(ary1.lastIndexOf('sato'));
*/
//console.log(ary1.concat(ary2));

console.log(ary1.join('/'));

console.log(ary1.slice(1));//1だけだと1~最後まで抜き出す？
console.log(ary1.slice(1,2)); //インデックスで2~3抜き出す
console.log(ary1.splice(1,2,'kakeya','yamaguchi')); //インデックス1~2までをそのあとの要素と置き換え
console.log(ary1);
 
console.log(Array.of(20,40,60));
console.log(ary1.copuWithin(1,3,5)); //4~6を2にもって来る
console.log(ary1);
console.log(ary2.fill('suzuki',1,3));

