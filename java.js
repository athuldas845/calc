        let inputs = [];
        let num = [];
        let sign = [];
        var i = 0, numlength = 0, signlength = 0, power = 0;
        const clicksound = new Audio("clicksound.mp3");
        const onsound = new Audio("ui.mp3");
        function start() {
            if (power == 0) {
                onsound.play();
                document.res.in_num1.value = "       WELCOME";
                setTimeout(() => {
                    document.res.in_num1.value = "";
                }, 2000);
            }
            power = 1;
        }
        function stop() {
            clearinput();
            if (power == 1) {
                document.res.in_num1.value = "    SEE U SOON";
                setTimeout(() => {
                    document.res.in_num1.value = "";
                }, 2000);
            }
            power = 0;
        }
        function clearinput() {
            clicksound.play();
            document.res.in_num1.value = "";
            document.res.result.value = "";
            inputs = [];
            num = [];
            sign = [];
            i=0; numlength = 0; signlength = 0;
        }
        function remove() {
            i--;
            inputs[i] = "";
            displayoninputbox();
        }
        function input(ch) {
            clicksound.play();
            if (power == 1) {
                inputs[i] = document.res[ch].value;
                i++;
                displayoninputbox();
            }
        }
        function displayoninputbox() {
            var display = "", j = 0;
            while (j < i) {
                display += inputs[j];
                j++;
            }
            document.res.in_num1.value = display;
        }
        function split() {///split the inputs array to num array & sign array
            var index = 0, lastindex = 0;
            while (index < inputs.length) {
                num[numlength] = "";
                if (inputs[index] == '+' || inputs[index] == '-' || inputs[index] == 'x' || inputs[index] == '%') {
                    while (lastindex < index) {//concatenating numbers up to th sign(before the sign)
                        num[numlength] += inputs[lastindex];
                        lastindex++;
                    }
                    sign[signlength] = inputs[lastindex];//storing sign
                    lastindex++; numlength++; signlength++;
                }
                index++;
            }
            if (lastindex < inputs.length) {//concatenating the last numbers (afer the sign)
                while (lastindex < inputs.length) {
                    num[numlength] += inputs[lastindex];
                    lastindex++;
                }
            }
        }

        function resultant() {
            clicksound.play();
            if (power == 1) {
                var lastanswer = 0, firstnumindex = 0, secondnumindex = 1, currentsign, indexofsign = 0, num1, num2;
                split();
                lastanswer = Number(num[firstnumindex]);
                while (secondnumindex < num.length) {
                    num1 = lastanswer;
                    num2 = Number(num[secondnumindex]);
                    currentsign = sign[indexofsign];
                    switch (currentsign) {
                        case '+':
                            lastanswer = num1 + num2;
                            break;
                        case '-':
                            lastanswer = num1 - num2;
                            break;
                        case 'x':
                            lastanswer = num1 * num2;
                            break;
                        case '%':
                            lastanswer = num1 / num2;
                            break;
                        default:
                            lastanswer = "SOMETHING MISSING!!"
                    }
                    secondnumindex++;
                    indexofsign++;
                }
                document.res.result.value = lastanswer;
                num = [];
                sign = [];
                numlength = 0; signlength = 0;
            }
        }
