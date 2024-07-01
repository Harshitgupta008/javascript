let inp = document.querySelector('.inp');
let tt = document.querySelector('.ttarea');
let sele = document.querySelector('.sele');
let btn = document.querySelector('#generateBtn');

inp.addEventListener('input', updateOutput);
sele.addEventListener('input', updateOutput);
btn.addEventListener('click', updateOutput);

function updateOutput() {
    let val;
    const inputVal = parseInt(inp.value);
    if (isNaN(inputVal) || inputVal <= 0) {
        tt.innerHTML = '';
        return;
    }

    if (sele.value === 'even') {
        val = even(inputVal);
    } else if (sele.value === 'odd') {
        val = odd(inputVal);
    } else if (sele.value === 'prime') {
        val = prime(inputVal);
    } else if (sele.value === 'fibonacci') {
        val = fibonacci(inputVal);
    }

    tt.innerHTML = val;
}

function even(inpval) {
    let val = '';
    for (let i = 1; i <= inpval; i++) {
        if (i % 2 === 0) {
            val += i + ", ";
        }
    }
    return val.slice(0, -2);
}

function odd(inpval) {
    let val = '';
    for (let i = 1; i <= inpval; i++) {
        if (i % 2 !== 0) {
            val += i + ", ";
        }
    }
    return val.slice(0, -2);
}

function prime(inpval) {
    let val = '';
    let count = 0;
    let num = 2;
    while (count < inpval) {
        if (isPrime(num)) {
            val += num + ", ";
            count++;
        }
        num++;
    }
    return val.slice(0, -2);
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function fibonacci(inpval) {
    let val = '';
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= inpval; i++) {
        val += n1 + ", ";
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return val.slice(0, -2);
}
