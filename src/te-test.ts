
//多类型
let nums:string|number;
nums= 2;
nums = '1111';

// 数组
let names:string[];
names = ['a','b'];

//任意类型any
let foo:any='xx';

//任意类型数组
let list:any[]=['1','a'];

//类型用于函数
function fns(person:string):string{
    return 'aaaa'
};

//无返回值
function fn(msg:string):void{

};

//函数如果声明就是必选参
//?号表示可选参数
function say(name:string,age?:number):string {
    console.log(name,age)
}
say('tom',11);
say('tom',);



//重载(名字一样,但是有根据不同的参数的个数和类型,或者返回值来区分同名的函数)
//先声明,再实现

function fn1(a:object):string;
function fn1(a:object):string;

function fn1(a:any):any{
if(type==='object'){
    console.log(1)
}
};
