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


// --------------------------------------------------------------------------------------------
// 第二次改进---绑定事件使用循环
var calculator   = document.querySelector("#calculator");
var formerInput  = calculator.querySelector(".formerInput");
var laterInput   = calculator.querySelector(".laterInput");
var sign         = calculator.querySelector(".sign");
var resultOutput = calculator.querySelector(".resultOutput");
var btns         = calculator.querySelectorAll(".btn");

// 绑定事件
for(var i=0;i<btns.length;i++){
    btns[i].onclick = function(){
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
    } 
}

/* // +
btns[0].onclick = addHandler;
// -
btns[1].onclick = subtractHandler;
// ×
btns[2].onclick = multiplyHandler;
// ÷
btns[3].onclick = divideHandler; */

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
}