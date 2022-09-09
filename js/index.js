// //Object.assgin()   合并对象
// let obja={
//     name:"lily"
// }
// let objb={
//     age:18
// }
// let objc={
//     sex:"女"
// }

// console.log(Object.assign(obja,objb,objc))


//数组降维


// //闭包
// function aa(a){
//     return function(b){
//         return function(c){
//            return a+b+c
//         }
//     }

// }
// console.log(aa(1)(2)(3))



// //二次排序
// function axe(arr){
//     var arrA=[],arrB=[],arrC=[],arra=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].substr(0,1)=="A"){
//             arrA.push(arr[i])
//         }
//         if(arr[i].substr(0,1)=="B"){
//             arrB.push(arr[i])
//         }
//         if(arr[i].substr(0,1)=="C"){
//             arrC.push(arr[i])
//         }
//         }
//         function ax(arr1,e,s,w,n){
//             var rese=[],ress=[],resw=[],resn=[]
//                     for(let i=0; i<arr1.length; i++){
//             if(arr1[i].substr(2,1)==e){
//                 rese.push(arr1[i])
//             }
//             else if(arr1[i].substr(2,1)==s){
//                 ress.push(arr1[i])
//             }
//             else if(arr1[i].substr(2,1)==w){
//                 resw.push(arr1[i])
//             }
//             else if(arr1[i].substr(2,1)==n){
//                 resn.push(arr1[i])
//             }
//         }
//         return rese.concat(ress).concat(resw).concat(resn)
//         }
//        return ax(arrA,"东","南","西","北").concat(ax(arrB,"东","南","西","北")).concat(ax(arrC,"东","南","西","北"));
//     }
//     function pai(arr){
//         return arr.sort()     //能直接排序出ABC
//     }
// let arr1=["A华南","B华西","C华北","A华北","A华西","B华东","C华南","C华西","B华南","B华北"];
// // console.log(axe(arr1));
// console.log(pai(arr1))




/**
* 第一题：
* 说明：实现一个方法，用于比较两个版本号（version1、version2），
* 如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0。
* 版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位。
*
* 示例：
* compareVersion('0.1', '1.1.1'); // 返回-1
* compareVersion('13.37', '1.2 '); // 返回1
* compareVersion('1.1', '1.1.0'); // 返回0
*/
// function ax(version1,version2){
//     let a,b,c;
//     if(version1>version2){



//     }

// }


// //分割字符串
// var compareVersion = function(version1, version2) {
//     const v1 = version1.split('.');
//     const v2 = version2.split('.');
//     for (let i = 0; i < v1.length || i < v2.length; ++i) {
//         let x = 0, y = 0;
//         if (i < v1.length) {
//             x = parseInt(v1[i]);
//         }
//         if (i < v2.length) {
//             y = parseInt(v2[i]);
//         }
//         if (x > y) {
//             return 1;
//         }
//         if (x < y) {
//             return -1;
//         }
//     }
//     return 0;
// };

// console.log(compareVersion('1.2', '1.0'))



// //双指针
// var compareVersion = function(version1, version2) {
//     const n = version1.length, m = version2.length;
//     let i = 0, j = 0;
//     while (i < n || j < m) {
//         let x = 0;
//         for (; i < n && version1[i] !== '.'; ++i) {
//             x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
//         }
//         ++i; // 跳过点号
//         let y = 0;
//         for (; j < m && version2.charAt(j) !== '.'; ++j) {
//             y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
//         }
//         ++j; // 跳过点号
//         if (x !== y) {
//             return x > y ? 1 : -1;
//         }
//     }
//     return 0;
// };







/**
* 第二题：
* 简单实现一个queryString对象，具有parse和stringify的能力。
* 
* parse，用于把一个URL查询字符串解析成一个键值对的集合。
* 输入：查询字符串 'foo=bar&abc=xyz&abc=123'
* 输出：一个键值对的对象
* {
* foo: 'bar',
* abc: ['xyz', '123'],
* }
* stringify，相反的，用于序列化给定对象的自身属性，生成URL查询字符串。
* 输入：一个键值对的对象
* {
* foo: 'bar',
* abc: ['xyz', '123'],
* }
* 输出：查询字符串 '?foo=bar&abc=xyz&abc=123'
*

* 测试代码
* QueryString.parse('foo=bar&abc=xyz&abc=123');

* QueryString.stringify({ foo: 'bar', abc: ['xyz', '123'], });
*/









// // /**
// // * 第三题：
// // * 请您设计一个给字符串脱敏的函数，中间「5个字符用 * 号代替」
// // * 输入1：'13912345678'，输出为：'139*****678' 
// // * 输入2：'阿里巴巴'，输出为：'****' // 4个 * 号
// // */
// function tm(str,val,val1){
//     return str.replaceAll(val,val1);
// }

// console.log(tm('13912345678','12345','*****'))
// console.log(tm('阿里巴巴','阿里巴巴','****'))

// //Symbol数据类型
// var aa=Symbol('123')
// console.log(aa)

// //Set    类数组，伪数组
// let arr=new Set([1,2,3,4])             //set数据结构不允许有重复的数值，能直接实现去重
// arr.add(7)                              //添加7
// arr.delete(1)                             //删除1
// arr.clear();                              //清空这个数组
// console.log(arr)


// let arr1=[...new Set([1,2,3,4])];        //将上边的arr进行解构赋值，转换成数组，外边写中括号，里边解构为1，2，3，4
// console.log(arr1)


// //map           类数据对象
// const map=new Map([
//     ['name','张三'],
//     ['title','Author']
// ]);
// map.set('sex','男');
// console.log(map.get('sex'))
// console.log(map)          //键值对形式

// //WeakSet        
// const ws=new WeakSet([
//     ['name','张三'],
//     ['title','Author']

// ])
// console.log(ws)


// //promise
// var p=new Promise(function(resolve,reject){
//     reject();
// })
// p.then(()=>{
//     console.log('执行成功')
// },()=>{
//     console.log('执行失败')
// });



// //promise封装ajax
// function ajax(type,url){
//     return new Promise((resolve,reject)=>{
//         //1、创建ajax对象
//         let xml=new XMLHttpRequest();
//         //2、设置提交方式
//         xml.open(type,url)
//         //3、设置头部信息
//         xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
//         //4、发送请求
//         xml.send();
//         //5、响应处理函数
//         xml.onreadystatechange=function(){
//             if(xml.readyState==4){
//                 if(xml.status==200){
//                     resolve(xml.responseText)
//                 }else{
//                     reject(new Error(xml.status))
//                 }
//             }
//         }
//     })
// }

// ajax('get','../js/a.json').then(res=>{
//     console.log(res)
// }).catch(value=>{
//     console.log(value)
// })



// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(reject,ms,'done');
//     });
// }

// timeout(2000).then((value)=>{
//     console.log(value);
// }).catch(res=>{
//     console.log(res);
// });


 
// //promise嵌套
// let p=new Promise((resolve,reject)=>{
//     resolve('成功');
// })
// p.then(res=>{
//     console.log(res)
//     return new Promise((resolve,reject)=>{
//         resolve('第二次成功')
//     })
// }).then(res=>{
//     console.log(res)
//     return new Promise((resolve,reject)=>{
//         resolve('第三次成功')
//     })
// }).then(res=>{
//     console.log(res);
// })


// //异步加载图片
// function loadImageAsync(url){
//     return new Promise(function(resolve,reject){
//         const image=new Image();
//         image.onload=function(){
//             resolve(image);
//         };
//         image.onerror=function(){
//             reject(new Error('Could not load image at'+url));
//         };
//         image.src=url;
//     });
// }


// loadImageAsync('img/email.png').then(image=>{
//     console.log(image)
//     $("body").append(image)
// })


// //封装
// var flage=true;
// function ajax(type,url){
//     return new Promise((resolve,reject)=>{
//         //1、创建ajax对象
//         let xml=new XMLHttpRequest();
//         //2、设置提交方式
//         xml.open(type,url)
//         //3、设置头部信息
//         xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
//         //4、发送请求
//         xml.send();
//         //5、响应处理函数
//         xml.onreadystatechange=function(){
//             if(xml.readyState==4){
//                 if(xml.status=200){
//                     resolve(xml.responseText);

//                 }else{
 
//                     reject(new Error(xml.status))
//                     flage=false;

//                 }
//             }
//         }
//     })
// }

// var p1=ajax("get","js/a.json");
// var p2=ajax("get","js/a.json");
// var p3=ajax("get","js/a.json")
// // //Promise.race    只显示执行的第一个Promise的实例对象
// // var p=Promise.race([p1,p2,p3])

// // //Promise.all      显示所有的Promise的实例对象
// // var p=Promise.all([p1,p2,p3])

// p.then(res=>{
//     console.log(res)
// })



//异步Generator
// function *test(){
//     yield "a"
//     yield "n"
//     yield "c"
// }
// var a=test()
// // console.log(a.next())
// // console.log(a.next())
// // console.log(a.next())
// for(let i of test()){
//     console.log(i)
// }

// function *test(){
//     yield ajax("get","js/a.json")
//     yield ajax("get","js/a.json")
//     yield ajax("get","js/a.json")
    
// }
// test().next().then(res=>{
//     console.log(res)
// })


// for(let i of test()){
//     i.then(res=>{
//         console.log(res)
//     })
//     console.log(i)

// }
// ajax("get","n").then(res=>{
//     console.log(res);
//     if(flage){
//         ajax("get"," https://mock.presstime.cn/mock/6298303a11e39f002156f040/example/students").then(res=>{
//             console.log(res)
//         }).catch(val=>
//             console.log(val))
//         console.log(flage)

//     }else{
//         console.log('a')
//     }

// }).catch(val=>{
//     console.log(val)
// })



// //创建类
// class star{
//     constructor(name,age){
//         this.name=name;                           //new   star这个构造函数的时候，会自动生成一个construction这个函数，是它本身自带的
//         this.age=age;
//     }
//     sing(song){
//         console.log(this.name+song)                //函数或方法能够传递参数，
//     }
// }
// var lzc=new star('李泽诚',18);
// console.log(lzc.name)
// var ldh=new star('刘德华',20);
// console.log(ldh.age)
// ldh.sing('冰雨')                                    //调用方法的时候传实参


// //extends继承
// class Father{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
        
//     }
//     money(num){
//         console.log(num)
//     }
//     sum(){
//         console.log(this.x+this.y)
//     }
// }
// class Son extends Father{
//     constructor(x,y){
//         super(x,y)                                 //利用super关键字，来调用父类的普通函数和构造函数
//     }
//                                                    //因为extends的继承，里面的属性和方法可以不写；
    
// }
// var a1=new Son(1,2)
// var a2=new Son(7,8);
// a1.sum()
// a2.sum();
// a1.money(100);
// // console.log(a1.name)



// //super关键字
// class Father{
//     say(){
//         return '我是爸爸';                                    //要加return将 我是爸爸 返回给say这个函数
//     }
// }
// class Son extends Father{
//     say(){
//         console.log(super.say()+'的儿子')                    //利用super关键字，在子类里调用父类say这个方法
//     }
// }
// var son1=new Son();
// son1.say()





// let classA={
//     name:'lily',
//     age:20
// }
// classA.name='tom';
// let classB={
//     sex:'女',
//     talk(){
//         return super.name                       //只是给classB了一个原型对象
//     }
// }
// Object.setPrototypeOf(classB,classA);           //给classB这个对象设置了一个原型对象classA
// console.log(classB.talk());




// //扩展子类自己独有的方法，同时继承调用父类的
// class Father{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     };
//     sum(){
//         console.log(this.x+this.y)
//     }
// }
// class Son extends Father{
//     constructor(x,y,c){
//         super(x,y)
//         this.c=c;                               //直接在子类调用父类的constructor构造器函数，把子类的参数传进去
       
//     }
//      //重写从父类继承过来的方法
//     sum(){
//         console.log(this.x+this.y+this.c)
//     }
//     //子类自己的方法
//     jf(){
//         console.log(this.x-this.y)
//     }
// }
// var son=new Son(1,2,4);
// son.sum()
// son.jf()






// class Father{

//     sum(x,y){
//         console.log(x+y)
//     }
// }
// class Son extends Father{

// }
// var fa1=new Father();
// fa1.sum(1,2)
// var son1=new Son();
// son1.sum(2,3)



// //async异步
// async function ax(){
//     await console.log(1)
//     await console.log(2)
// }
// ax();


// async function aq(){
//     throw new Error('出现错误');                //throw会直接抛出错误
// }
// aq().then(res=>{
//     console.log(res)
// }).catch(res=>{
//     console.log(res)                            //catch捕获throw抛出的错误
// })


// function timeouta(){
//     return new Promise(()=>{
//         console.log(1)
//     })
// }
// function timeoutb(){
//     return new Promise(()=>{
//         console.log(2)
//     })
// }
// function timeoutc(){
//     return new Promise(()=>{
//         console.log(3)
//     })
// };
// async function aw(){
//     let v=[];
//     await v.push(timeouta())
//     await v.push(timeoutb())
//     await v.push(timeoutc())
// }
// aw()


// function fun1(value){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             resolve(value++)
//         },2000);
//     })
// }
// async function asy(){
//     let v=0;
//     a=await fun1(v)               //返回三个0，await是同步的，但是后面的promise对象实例是异步的所以后面函数是同时进行的，所以返回三个0
//     b=await fun1(v)
//     c=await fun1(v)
//     console.log(a,b,c)
// }
// asy()




// function fun1(value){
//         return setTimeout(function(){
//             return(value++)
//         },2000);
//     }
// async function asy(){
//     let v=0;
//     a=await fun1(v)                //返回1，2，3，await是同步的，所以执行完第一个之后v变成了1，
//     b=await fun1(v)
//     c=await fun1(v)
//     console.log(a,b,c)
// }
// asy()


// function ajax(){
//     return new Promise(resolve=>{
//         $.ajax({
//             url:'js/a.json',
//             dataType:'json',
//             success:res=>{
//                 resolve(res);
//             }
//         })
//     })
// }
// ajax().then(res=>{
//     console.log(res);
//     return new Promise(resolve=>{
//         $.ajax({
//             url:'js/a.json',
//             dataType:'json',
//             success:res=>{
//                 resolve(res)
//             }
//         })
//     }).then(res=>{
//         console.log(res)
//     })


// })
// async function test(){
//     let a,b;
//     b=await ajax('get','js/a.json')
//     a=await ajax('get','js/test.json')
//     console.log(a,b)
// }
// test()


// //throw 
// async function test(){
//     throw new Error('错误');
// }
// test().then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res)
// })




// //模块导入
// import {a,talk} from "./mod.js"
// console.log(a)
// talk();




// //数组降维加去重1
// function jwqc(arr){
//     arr+="";                   //arr+=""  相当于arr.toString()
//     // arr=arr.toString()
//     // console.log(arr)
//     arr=arr.split(',')
//     // console.log(arr)
//     var arr1=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr1.indexOf((parseInt(arr[i])))==-1){
//             arr1.push(parseInt(arr[i]));
//         }
//     }
//     return arr1

// }
// console.log(jwqc([1,2,2,[3,4,5],6,3,[5,[11,12],11]]))



// //数组降维加去重2
// function jwqc1(arr){
//     var newarr=arr.flat(2)
//     newarr=[...new Set(newarr)]
//     return newarr
// }
// console.log(jwqc1([1,2,2,[3,4,5],6,3,[5,[11,12],11]]))