function foo() {
    var a =1
    console.log(a);
}
foo()
var a = 1
function fun(a) {
    var a = 2
    function a() {}
    var b = a
    console.log(a);
}
function fn(a) {
    console.log(a); // 
    var a = 123
    console.log(a); // 
    function a() {}
    console.log(a);  // 
    var b = function() {}
    console.log(b);  // 
    function d() {}
    var d = a
    console.log(d);  // 
  }
  fn(1)
function foo(a,b) {
    console.log(a);
    c = 0
    var c
    a = 3
    b = 2
    console.log(b);
    function b() {}
    function d() {}
    console.log(b);
}
foo(1)
//AO  = {
//a: undefined,1, 3
//b: undefined,function b(), 2
//c: undefined,0
//}
global = 100
function fn() {
    console.log(global);
    global = 200
    console.log(global);
    var global = 300
}
fn()
var global
//AO = {
//global = undefined,200,300
//}
//Go = {
//global: undefined,100
//fn: function fn()
//}