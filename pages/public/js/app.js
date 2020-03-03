//SELECTING OBJECTS FROM index.html
const   modelBtn        = document.querySelector("#chooseModelButton"),                         //Select button on Choose Model
        formPathModel1  = document.querySelector("#izborSmjeraModel1"),                         //Select form Choose Path for model 1
        formIzborModela = document.querySelector("#izborModela"),                               //Select form Choose Model
        formPathModel2  = document.querySelector("#izborSmjeraModel2"),                         //Select form Choose Path for model 2
        backButtonCP    = document.querySelectorAll(".choosePathModelBackButton")              //Select all back button on Choose Path forms


modelBtn.addEventListener("click", () => {
    formIzborModela.style.display = "none";
    if(document.querySelector("input[name='ChooseModel']:checked").value === "1") {
        formPathModel1.style.display = "flex";
        
    } else {
        formPathModel2.style.display = "flex";
    }
});

backButtonCP[0].addEventListener("click", () => {
    formPathModel1.style.display = "none"
    formIzborModela.style.display = "flex";
})

backButtonCP[1].addEventListener("click", () => {
    formPathModel2.style.display = "none"
    formIzborModela.style.display = "flex";
})