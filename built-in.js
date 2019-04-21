console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floow(3.9)", Math.floor(3.9));

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

//오브젝트를 쓰지 않아도 아래와 같이 사용가능하나
//매우 불편하다.
var MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}