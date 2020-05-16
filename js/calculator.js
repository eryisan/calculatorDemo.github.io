// 最容易做到的
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
}