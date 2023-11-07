# 声明提升
var 声明的变量会存在声明提升
函数声明整体提升
# 预编译发生在函数体内时
1.创建函数的AO对象 （Action Object）
2.找形参和变量声明，将形参和变量声明作为AO的属性名，值赋予undefined
3.将形参和实参统一
4.在函数体内找函数声明，将函数名作为AO对象的属性名，值赋予函数体
eg:function foo(a,b) {
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
AO  = {
a: undefined,1, 3
b: undefined,function b(), 2
c: undefined,0
}
# 预编译发生在全局
1.创建GO（Global Object）对象
2.找变量声明，将形参和变量声明作为GO的属性名，值赋予undefined
3.在全局找函数声明，将函数名作为GO对象的属性名，值赋予函数体
global = 100
function fn() {
    console.log(global);
    global = 200
    console.log(global);
    var global = 300
}
fn()
var global
AO = {
global: undefined,200,300
}
Go = {
global: undefined,100
fn: function fn()
}