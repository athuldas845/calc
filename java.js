var op, num = "", flag = 0, power = 0;
const clicksound = new Audio("clicksound.mp3");
const onsound = new Audio("ui.mp3");
function start() {
    if (power == 0) {
        onsound.play();
        document.res.in_num2.value = "::::::::::::::::::CASIO:::::::::::::::::::::::";
        setTimeout(() => {
            document.res.in_num2.value = "";
        }, 2000);
    }
    power = 1;
}
function stop() {
    clearinput();
    if (power == 1) {
        document.res.in_num2.value = "::::::::::::::Bye::::::::::::::::::::";
        setTimeout(() => {
            document.res.in_num2.value = "";
        }, 2000);
    }
    power = 0;
}
function clearinput() {
    clicksound.play();
    document.res.in_num1.value = "";
    document.res.in_num2.value = "";
    document.res.result.value = "";
    document.res.sym.value = "";
    num = "";
    enter('n');
}
function enter(ch) {
    clicksound.play();
    if (ch == 'c') {
        if (flag == 0) {
            flag = 1;
            num = "";
        }
        else {
            flag = 0;
            num = "";
        }
    }
    else {
        if (flag == 1) {
            flag = 0;
            num = "";
        }
        num = "";
    }
}
function input(ch) {
    clicksound.play();
    if (power == 1) {
        num += document.res[ch].value;
        if (flag == 0) {
            document.res.in_num1.value = num;
        }
        else { document.res.in_num2.value = num; }
    }
}
function sign(x) {
    clicksound.play();
    if (power == 1) {
        document.res.sym.value = x;
        enter('c');
    }
}
function output() {
    if (power == 1) {
        var ch, num1, num2;
        num1 = Number(document.res.in_num1.value);
        num2 = Number(document.res.in_num2.value);
        ch = document.res.sym.value;
        switch (ch) {
            case '+':
                op = num1 + num2;
                break;
            case '-':
                op = num1 - num2;
                break;
            case 'x':
                op = num1 * num2;
                break;
            case '%':
                op = num1 / num2;
                break;
            default:
                op = "SOMETHING MISSING!!"
        }
        document.res.result.value = op;
        enter('n');
    }
}
