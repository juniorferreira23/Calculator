
let inputCalc = ''
let operation = ''
let firstValue = 0
let secondValue = 0

function press(i){
    if(i!='+' & i!='-' & i!='x' & i!='/' & i!='='){
        inputCalc += i
        // console.log(inputCalc)
    }
     

    let viewInput = document.querySelector('.value-calc')
    let viewInputOp = document.querySelector('.operation')
    viewInput.innerHTML = inputCalc

    if(i=='+' | i=='-' | i=='x' | i=='/'){
        if(inputCalc){
            firstValue = parseFloat(inputCalc,10)
        }
        
        operation = i
        inputCalc = ''
        viewInput.innerHTML = ''
        viewInputOp.innerHTML = i
        // console.log(firstValue)
    }

    
    if(i=='='){
        secondValue = parseFloat(inputCalc,10)
        // console.log(secondValue)
        viewInput.innerHTML = ''
        viewInputOp.innerHTML = ''
        inputCalc = ''
        if(operation == '+'){
            console.log('entrou')
            let resp = firstValue + secondValue
            console.log(resp)
            viewInput.innerHTML = resp
            firstValue = resp
        }
        if(operation == '-'){
            console.log('entrou')
            let resp = firstValue - secondValue
            console.log(resp)
            viewInput.innerHTML = resp
            firstValue = resp
        }
        if(operation == 'x'){
            console.log('entrou')
            let resp = firstValue * secondValue
            console.log(resp)
            viewInput.innerHTML = resp
            firstValue = resp
        }
        if(operation == '/'){
            console.log('entrou')
            let resp = firstValue / secondValue
            console.log(resp)
            viewInput.innerHTML = resp
            firstValue = resp
        }
        console.log(firstValue,secondValue)
    }


    if(i=='C'){
        viewInput.innerHTML = '0'
        viewInputOp.innerHTML = ''
        inputCalc = ''
    }

}
