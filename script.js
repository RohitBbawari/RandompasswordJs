        const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerSet = "abcdefghijklmnopqrstuvwxyz";
        const numberSet = "1234567890";
        const symbolSet = "~!@#$%^&*()_+/";

        const passBox = document.getElementById("pass-box");
        const totalChar = document.getElementById("total-char");
        const upperInput = document.getElementById("upper-case");
        const lowerInput = document.getElementById("lower-case");
        const numberInput = document.getElementById("numbers");
        const symbolInput = document.getElementById("symbols");

        const getRandomData = (dataSet) => {
            return dataSet[Math.floor(Math.random() * dataSet.length)]
        };

        const generatePassword = () => {
            let password = "";
            let possibleCharacters = "";

            if (upperInput.checked) {
                possibleCharacters += upperSet;
            }
            if (lowerInput.checked) {
                possibleCharacters += lowerSet;
            }
            if (numberInput.checked) {
			
                possibleCharacters += numberSet;
            }
            if (symbolInput.checked) {
                possibleCharacters += symbolSet;
            }

            for (let i = 0; i < totalChar.value; i++) {
                password += getRandomData(possibleCharacters);
            }

            passBox.innerText = password;
        };

        document.getElementById("btn").addEventListener("click", generatePassword);
        generatePassword();