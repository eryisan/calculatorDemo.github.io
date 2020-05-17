/* // 最容易做到的
// button添加onclick事件
// 获取元素
    var calculator   = document.querySelector("#calculator");
    var formerInput  = calculator.querySelector(".formerInput");
    var laterInput   = calculator.querySelector(".laterInput");
    var sign         = calculator.querySelector(".sign");
    var resultOutput = calculator.querySelector(".resultOutput");

// 加
function addHandler(){
    sign.innerHTML = "+";
    resultOutput.innerHTML = +formerInput.value + +laterInput.value;
}

// 减
function subtractHandler(){
    sign.innerHTML = "-";
    resultOutput.innerHTML = formerInput.value - laterInput.value;
}

// 乘
function multiplyHandler(){
    sign.innerHTML = "×";
    resultOutput.innerHTML = formerInput.value * laterInput.value;
}

// 除
function divideHandler(){
    sign.innerHTML = "÷";
    resultOutput.innerHTML = formerInput.value / laterInput.value;
} */

// -------------------------------------------------------------------------------------------
/* // 第一次改进---结构和行为分离
var calculator   = document.querySelector("#calculator");
var formerInput  = calculator.querySelector(".formerInput");
var laterInput   = calculator.querySelector(".laterInput");
var sign         = calculator.querySelector(".sign");
var resultOutput = calculator.querySelector(".resultOutput");
var btns         = calculator.querySelectorAll(".btn");

// 绑定事件
// +
btns[0].onclick = addHandler;
// -
btns[1].onclick = subtractHandler;
// ×
btns[2].onclick = multiplyHandler;
// ÷
btns[3].onclick = divideHandler;

// 加
function addHandler(){
sign.innerHTML = "+";
resultOutput.innerHTML = +formerInput.value + +laterInput.value;
}

// 减
function subtractHandler(){
sign.innerHTML = "-";
resultOutput.innerHTML = formerInput.value - laterInput.value;
}

// 乘
function multiplyHandler(){
sign.innerHTML = "×";
resultOutput.innerHTML = formerInput.value * laterInput.value;
}

// 除
function divideHandler(){
sign.innerHTML = "÷";
resultOutput.innerHTML = formerInput.value / laterInput.value;
} */


// // --------------------------------------------------------------------------------------------
// // 第二次改进---绑定事件使用循环
// var calculator   = document.querySelector("#calculator");
// var formerInput  = calculator.querySelector(".formerInput");
// var laterInput   = calculator.querySelector(".laterInput");
// var sign         = calculator.querySelector(".sign");
// var resultOutput = calculator.querySelector(".resultOutput");
// var btns         = calculator.querySelectorAll(".btn");

// // 绑定事件
// for(var i=0;i<btns.length;i++){
//     btns[i].onclick = function(){
//         switch(this.title){
//             case "add":
//                 addHandler();
//                 break;
//             case "subtract":
//                 subtractHandler();
//                 break;
//             case "multiply":
//                 multiplyHandler();
//                 break;
//             case "divide":
//                 divideHandler();
//                 break;
//         }
//     } 
// }

// /* // +
// btns[0].onclick = addHandler;
// // -
// btns[1].onclick = subtractHandler;
// // ×
// btns[2].onclick = multiplyHandler;
// // ÷
// btns[3].onclick = divideHandler; */

// // 加
// function addHandler(){
// sign.innerHTML = "+";
// resultOutput.innerHTML = +formerInput.value + +laterInput.value;
// }

// // 减
// function subtractHandler(){
// sign.innerHTML = "-";
// resultOutput.innerHTML = formerInput.value - laterInput.value;
// }

// // 乘
// function multiplyHandler(){
// sign.innerHTML = "×";
// resultOutput.innerHTML = formerInput.value * laterInput.value;
// }

// // 除
// function divideHandler(){
// sign.innerHTML = "÷";
// resultOutput.innerHTML = formerInput.value / laterInput.value;
// }



// --------------------------------------------------------------------------------------------
// 第三次改进---提取函数
var calculator   = document.querySelector("#calculator");
var formerInput  = calculator.querySelector(".formerInput");
var laterInput   = calculator.querySelector(".laterInput");
var sign         = calculator.querySelector(".sign");
var resultOutput = calculator.querySelector(".resultOutput");
var btns         = calculator.querySelectorAll(".btn");

// 遍历
function each(array,fn){
    for(var i=0;i<array.length;i++){
        fn(i,array[i]);
    }
}

// 绑定事件
each(btns,function(index,elem){
    elem.onclick = function(){
        switch(this.title){
            case "add":
                addHandler();
                break;
            case "subtract":
                subtractHandler();
                break;
            case "multiply":
                multiplyHandler();
                break;
            case "divide":
                divideHandler();
                break;
        }
    }; 
});

// 更新符号
function updateSign(symbol){
    sign.innerHTML = symbol;
}

// 加法运算
function add(num1,num2){
    return +num1 + +num2;
}
// 减法运算
function subtract(num1,num2){
    return num1 - num2;
}
// 乘法运算
function multiply(num1,num2){
    return num1 * num2;
}
// 除法运算
function divide(num1,num2){
    return num1 / num2;
}

// 输出结果
function outputResult(result){
    resultOutput.innerHTML = result;
}

// 加
function addHandler(){
    updateSign("+");
    outputResult( add(formerInput.value,laterInput.value) );
}

// 减
function subtractHandler(){
    updateSign("-");
    outputResult( subtract(formerInput.value,laterInput.value) );
}

// 乘
function multiplyHandler(){
    updateSign("×");
    outputResult( multiply(formerInput.value,laterInput.value) );
}

// 除
function divideHandler(){
    updateSign("÷");
    outputResult( divide(formerInput.value,laterInput.value) );
}