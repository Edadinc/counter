let count = 0;

const value = document.querySelector("#count");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            count-- ;
        }else if(styles.contains("increase")){
            count++ ;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "blue";
        }
        if(count < 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count ;
    });
});