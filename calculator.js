let result = 0;
let operation = '';
let operand1 = '';
let operand2 = '';
let decimalFlag1 = true;
let decimalFlag2 = true;
let operand1Flag = true;
let operand2Flag = false;
let operationFlag = false;
let divideByZeroFlag = false;
const displayElement = document.querySelector('.js-display');
const displayCurrentElement = document.querySelector('.js-current');
const displayPreviousElement = document.querySelector('.js-precious');

function button_input(value){
  if(operand1Flag){
    operand1 += value;
    console.log(operand1); 
  }
  else if(operand2Flag){
    operand2 += value;
    console.log(operand2);
  }
}
function zero_button_input(value){
  let boolval = alreadyZero();
  if(operand1Flag && boolval){
    operand1 += value;
    console.log(operand1); 
  }
  else if(operand2Flag&& boolval){
    operand2 += value;
    console.log(operand2);
  }
}
function decimal_button_input(value){

    if(operand1Flag && decimalFlag1){
      operand1 += value;
      decimalFlag1 = false;
    }
    else if(operand2Flag && decimalFlag2){
      operand2 += value;
      decimalFlag2 = false;
    }
}
function result_button_input(){
  let value1 = Number(operand1);
  let value2 = Number(operand2);
  if(operation == '+'){
      result = value1 + value2;
    }
    else if(operation == '-'){
      result = value1 - value2;
    }
    else if(operation == '*'){
      result = value1 * value2;
    }
    else if(operation == '/'){
      if(value2 !== 0){
        result = value1 / value2;
      }
      else{
        divideByZeroFlag = true;
        
      }
      
    }
    console.log(result);
    
    
  }
  function restset_op(){
    displayPreviousElement.innerHTML = `${operand2}`;
    operationFlag = false;
    operand1 = `${result}`;
    operand2 = '';
    decimalFlag2 = true;
    operand1Flag = false;
    operand2Flag = true;
  }
  function display_current_value(){
    if(operand1Flag){
      console.log(operand1);
      displayCurrentElement.innerHTML = `${operand1}`;
    }
    else if(operand2Flag){
      console.log(operand2);
      displayCurrentElement.innerHTML = `${operand2}`;
    }
    
  }
  function op_display(){
    console.log(operation);
    displayCurrentElement.innerHTML = `${operation}`;
  } 
  function result_display(){
    if(divideByZeroFlag){
      
        allClear();
        displayCurrentElement.innerHTML = "Divide by zero";
        divideByZeroFlag = false;
    }
    else{
      console.log(result);
      displayCurrentElement.innerHTML = `${result}`;

    }
  } 
  
  function op_button_input(value){
    if(operationFlag){
      result_button_input();
      operationFlag = true;
      console.log(operation);
      operand1 = `${result}`;
      displayPreviousElement.innerHTML = `${result}`;
      operand2 = '';
      decimalFlag2 = true;
      operand1Flag = false;
      operand2Flag = true;
    }
    displayPreviousElement.innerHTML = `${operand1}`;
      operation = value;
      operationFlag = true;
      console.log(operation);
      operand1Flag = false;
      operand2Flag = true;
  }
  function allClear(){
    displayPreviousElement.innerHTML = '<br>';
    displayCurrentElement.innerHTML = '<br>';
    result = 0;
    operand1 = '';
    operand2 = '';
    decimalFlag1 = true;
    decimalFlag2 = true;
    operand1Flag = true;
    operand2Flag = false;
    operationFlag = false;
  }
  function alreadyZero(){
    if(operand1 ==='0'&& operand1Flag){
      return false;
    }
    else if(operand2 ==='0'&& operand2Flag){
      return false;
    }
    return true;
  }