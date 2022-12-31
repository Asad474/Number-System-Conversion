let decinput = document.querySelector('#dec-inp')
let bininput = document.querySelector('#bin-inp')
let octinput = document.querySelector('#oct-inp')
let hexinput = document.querySelector('#hdec-inp')
let errmsg = document.querySelector('.err-msg')


decinput.addEventListener('input',(e) => {
    let decvalue = parseInt(e.target.value) 
    decinput.value = decvalue
    bininput.value = decvalue.toString(2)
    octinput.value = decvalue.toString(8)
    hexinput.value = decvalue.toString(16)
})


bininput.addEventListener('input',(e) => {
    if (binValidator(e.target.value)){
        let binvalue = parseInt(e.target.value)
        bininput.value = binvalue
        decinput.value = parseInt(binvalue,2)
        octinput.value = parseInt(binvalue,2).toString(8)
        hexinput.value = parseInt(binvalue,2).toString(16)
        errmsg.innerHTML = ''
    }

    else{
        decinput.value = 0
        hexinput.value = 0
        octinput.value = 0
        errmsg.innerHTML = 'Please enter valid binary input!!!'
    }    
})


octinput.addEventListener('input',(e) => {
    if (octValidator(e.target.value)){
        let octvalue = parseInt(e.target.value)
        octinput.value = octvalue
        decinput.value = parseInt(octvalue,8)
        bininput.value = parseInt(octvalue,8).toString(2)
        hexinput.value = parseInt(octvalue,8).toString(16)
        errmsg.innerHTML = ''
    }

    else{
        decinput.value = 0
        bininput.value = 0
        hexinput.value = 0
        errmsg.innerHTML = 'Please enter valid octet input!!!'
    }    
})


hexinput.addEventListener('input',(e) => {
    if (hexValidator(e.target.value)){
        let hexvalue = e.target.value
        hexinput.value = hexvalue
        decinput.value = parseInt(hexvalue,16)
        bininput.value = parseInt(hexvalue,16).toString(2)
        octinput.value = parseInt(hexvalue,16).toString(8)
        errmsg.innerHTML = ''
    }

    else{
        decinput.value = 0
        bininput.value = 0
        octinput.value = 0
        errmsg.innerHTML = 'Please enter valid hexadecimal input!!!'
    }    
})


let binValidator = (num) => {
    for (let i=0 ; i<num.length ; i++){
        if (num[i] != '0' && num[i] != '1' && num[i] != '.')
           return false 
    }

    return true
}


let octValidator = (num) => {
    for (let i=0 ; i<num.length ; i++){
        if (num[i] > '7')
            return false
    }

    return true
}


let hexValidator = (num) => {   
    for (let i=0 ; i<num.length ; i++){
        if (!(num[i] <= '9' || (num[i].toLowerCase() >= 'a' && num[i].toLowerCase() <= 'f')))
            return false
    }

    return true
}