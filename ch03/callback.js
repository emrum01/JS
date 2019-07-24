//任意の関数を使える

var data = [2,3,4,5]

data.forEach(function(value, index, array){
    console.log(value*value);
}); //配列のそれぞれの要素について関数にぶっこんだ結果を返していく。
//帰って来る値はnumber型

//mapメソッドは配列をよみこませて配列を返す
var result = data.map(function(value,index,array){
    return value*value;
});

console.log(result);

//条件文に対する真偽値を返す
var result = data.some(function(value,index,array){
    return value % 3 === 0;
});

if (result) {
    console.log('true');
} else{
    console.log('false');
}

    //ちなみにeveryメソッドはすべての要素が一致するかで判断する

//filterメソッドは条件文に合致した要素を配列として取り出す
var result = data.filter(function(value,index,array){

    return value % 2 === 1;
});

console.log(result);