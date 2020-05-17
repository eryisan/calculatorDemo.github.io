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



/* // --------------------------------------------------------------------------------------------
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
 */


/* 
// --------------------------------------------------------------------------------------------
// 第四次改进---管理代码(找到组织)
var wrapElem = document.querySelector("#calculator");
var calculatorElem = {
    formerInput   : wrapElem.querySelector(".formerInput"),
    laterInput    : wrapElem.querySelector(".laterInput"),
    sign          : wrapElem.querySelector(".sign"),
    resultOutput  : wrapElem.querySelector(".resultOutput"),
    btns          : wrapElem.querySelectorAll(".btn")
}

// 遍历
function each(array,fn){
    for(var i=0;i<array.length;i++){
        fn(i,array[i]);
    }
}

// 绑定事件
each(calculatorElem.btns,function(index,elem){
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
    calculatorElem.sign.innerHTML = symbol;
}


var operation = {
    add : function(num1,num2){
        return +num1 + +num2;
    },
    subtract : function(num1,num2){
        return num1 - num2;
    },
    multiply : function(num1,num2){
        return num1 * num2;
    },
    divide : function(num1,num2){
        return num1 / num2;
    }
}

// 输出结果
function outputResult(result){
    calculatorElem.resultOutput.innerHTML = result;
}

// 加
function addHandler(){
    updateSign("+");
    outputResult( operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 减
function subtractHandler(){
    updateSign("-");
    outputResult( operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 乘
function multiplyHandler(){
    updateSign("×");
    outputResult( operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 除
function divideHandler(){
    updateSign("÷");
    outputResult( operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}
 */



// // --------------------------------------------------------------------------------------------
// // 第五次改进---开放与封闭原则 Open Closed principle   OCP原则
// var wrapElem = document.querySelector("#calculator");
// var calculatorElem = {
//     formerInput   : wrapElem.querySelector(".formerInput"),
//     laterInput    : wrapElem.querySelector(".laterInput"),
//     sign          : wrapElem.querySelector(".sign"),
//     resultOutput  : wrapElem.querySelector(".resultOutput"),
//     btns          : wrapElem.querySelectorAll(".btn")
// }

// // 遍历
// function each(array,fn){
//     for(var i=0;i<array.length;i++){
//         fn(i,array[i]);
//     }
// }

// // 绑定事件
// each(calculatorElem.btns,function(index,elem){
//     elem.onclick = function(){
//         updateSign(this.value);
//         outputResult(operate(this.title,calculatorElem.formerInput.value,calculatorElem.laterInput.value));
//         /* switch(this.title){
//             case "add":
//                 // addHandler();
//                 outputResult( operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
//                 break;
//             case "subtract":
//                 // subtractHandler();
//                 outputResult( operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
//                 break;
//             case "multiply":
//                 // multiplyHandler();
//                 outputResult( operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
//                 break;
//             case "divide":
//                 // divideHandler();
//                 outputResult( operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
//                 break;
//             case "mod":
//                 // divideHandler();
//                 outputResult( operation.mod(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
//                 break;
//         } */
//     }; 
// });

// // 更新符号
// function updateSign(symbol){
//     calculatorElem.sign.innerHTML = symbol;
// }

// //  运算
// function operate(name,num1,num2){
//     if(!operation[name]) throw new Error("不存在名为" + name + "的运算方法");
//     return operation[name](num1,num2);
// }


// var operation = {
//     add : function(num1,num2){
//         return +num1 + +num2;
//     },
//     subtract : function(num1,num2){
//         return num1 - num2;
//     },
//     multiply : function(num1,num2){
//         return num1 * num2;
//     },
//     divide : function(num1,num2){
//         return num1 / num2;
//     },
//     addOperation:function(name,fn){
//         if(!this[name]){
//             this[name] = fn;
//         }
//         return this;
//     }
// }

// // 添加
// operation.addOperation("mod",function(num1,num2){
//     return num1 % num2;
// }).addOperation("power",function(base,power){
//     return Math.pow(base,power);
// });



// // 输出结果
// function outputResult(result){
//     calculatorElem.resultOutput.innerHTML = result;
// }

/* // 加
function addHandler(){
    updateSign("+");
    outputResult( operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 减
function subtractHandler(){
    updateSign("-");
    outputResult( operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 乘
function multiplyHandler(){
    updateSign("×");
    outputResult( operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
}

// 除
function divideHandler(){
    updateSign("÷");
    outputResult( operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value) );
} */



// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// 第六次改进---模块化

(function(){
    var wrapElem = document.querySelector("#calculator");
    var calculatorElem = {
        formerInput   : wrapElem.querySelector(".formerInput"),
        laterInput    : wrapElem.querySelector(".laterInput"),
        sign          : wrapElem.querySelector(".sign"),
        resultOutput  : wrapElem.querySelector(".resultOutput"),
        btns          : wrapElem.querySelectorAll(".btn")
    }
    
    // 遍历
    function each(array,fn){
        for(var i=0;i<array.length;i++){
            fn(i,array[i]);
        }
    }
    
    // 绑定事件
    each(calculatorElem.btns,function(index,elem){
        elem.onclick = function(){
            updateSign(this.value);
            outputResult(operate(this.title,calculatorElem.formerInput.value,calculatorElem.laterInput.value));
        }; 
    });
    
    // 更新符号
    function updateSign(symbol){
        calculatorElem.sign.innerHTML = symbol;
    }
    
    //  运算
    var operate = (function(){
        var operation = {
            add : function(num1,num2){
                return +num1 + +num2;
            },
            subtract : function(num1,num2){
                return num1 - num2;
            },
            multiply : function(num1,num2){
                return num1 * num2;
            },
            divide : function(num1,num2){
                return num1 / num2;
            },
            addOperation:function(name,fn){
                if(!operation[name]){
                    operation[name] = fn;
                }
                return operation;
            }
        };

        /* function operate(name,num1,num2){
            if(!operation[name]) throw new Error("不存在名为" + name + "的运算方法");
            return operation[name](num1,num2);
        }

        return operate; */
        
        /* return function(name,num1,num2){
            if(!operation[name]) throw new Error("不存在名为" + name + "的运算方法");
            return operation[name](num1,num2);
        }; */

        /* function operate(name,num1,num2){
            if(!operation[name]) throw new Error("不存在名为" + name + "的运算方法");
            return operation[name](num1,num2);
        } */
        function operate(name){
            if(!operation[name]) throw new Error("不存在名为" + name + "的运算方法");
            return operation[name].apply(operation,[].slice.call(arguments,1,arguments.length));
        }

        operate.addOperation = operation.addOperation;

        return operate;
        
    })();
    
    
    // 添加
    operate.addOperation("mod",function(num1,num2){
        return num1 % num2;
    }).addOperation("power",function(base,power){
        return Math.pow(base,power);
    }).addOperation("invert",function(num){
        return 1/num;
    });
    
    
    
    // 输出结果
    function outputResult(result){
        calculatorElem.resultOutput.innerHTML = result;
    }        
})();



