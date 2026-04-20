let str = "";
let input = document.querySelector("input");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        let value = btn.innerText;

        if (value === "=") {
            try {
                input.value = eval(str);
                str = input.value;
            } catch (err) {
                input.value = "Error";
                str = "";
            }
        }

        else if (value === "clr") {
            str = "";
            input.value = "";
        }

        else if (value === "del") {
            str = str.slice(0, -1);
            input.value = str;
        }

        else {
            str += value;
            input.value = str;
        }

    });
});