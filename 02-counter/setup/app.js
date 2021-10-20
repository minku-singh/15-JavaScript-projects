let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(
    (btn) => {
        btn.addEventListener("click", (e) => {
            let attr = e.currentTarget.classList;
            if(attr.contains("decrease")){
                count--;
            }else if(attr.contains("increase")){
                count++;
            }else{
                count = 0;
            }

            if(count > 0){
                value.style.color = "green";
            }else if(count < 0){
                value.style.color = "red";
            }else{
                value.style.color = "inherit";
            }

            value.textContent = count;
        })
    }
)