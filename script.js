function cosineLaw() {
    var a = parseFloat(document.getElementById('sideA').value);
    var b = parseFloat(document.getElementById('sideB').value);
    var c = parseFloat(document.getElementById('angleC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for Side A, Side B, and Angle C.");
        return;
    }

    var angleCRadians = c * (Math.PI / 180);
    var sideC = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angleCRadians));

    document.getElementById('sideC').value = sideC.toFixed(2);
}

function asymptoteFinder() {
    var m = parseFloat(document.getElementById('mvalue').value);
    var n = parseFloat(document.getElementById('nvalue').value);
    var output = "";

    if (isNaN(m) || isNaN(n)) {
        alert("Please enter valid numbers for n Value and m Value.");
        return;
    }

    if (m === n) {
        output = "The asymptote is horizontal";
    } else if (n > m) {
        output = "The asymptote is the x-axis";
    } else if (m > n) {
        var difference = m - n;
        if (difference === 1) {
            output = "Linear";
        } else if (difference === 2) {
            output = "Quadratic";
        } else if (difference === 3) {
            output = "Cubic";
        } else if (difference === 4) {
            output = "Quartic";
        } else if (difference === 5) {
            output = "Quintic";
        } else if (difference === 6) {
            output = "Sextic";
        } else if (difference === 7) {
            output = "Septic";
        } else if (difference === 8) {
            output = "Octic";
        } else if (difference === 9) {
            output = "Nonic";
        } else if (difference === 10) {
            output = "Decic";
        } else {
            output = "Undefined";
        }
    }

    document.getElementById('atype').value = output;
}

function piApprox() {
    let pi = 0;
    var n = parseFloat(document.getElementById('Nvalue').value);

    if (isNaN(n)) {
        alert("Please enter a valid number for n Value.");
        return;
    }
    
    for (let i = 0; i <= n; i++) {
        pi += (Math.pow(-1, i)) / ((2 * i) + 1);
    }

    pi = pi * 4;
    document.getElementById('piapprox').value = pi.toFixed(6);
}
