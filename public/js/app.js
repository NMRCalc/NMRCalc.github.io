//SELECTING OBJECTS FROM index.html
const   modelBtn        = document.querySelector("#chooseModelButton"),            //Select button on Choose Model
        formPathModel1  = document.querySelector("#izborSmjeraModel1"),            //Select form Choose Path for model 1
        formIzborModela = document.querySelector("#izborModela"),                  //Select form Choose Model
        formPathModel2  = document.querySelector("#izborSmjeraModel2"),            //Select form Choose Path for model 2
        backButtonCP    = document.querySelectorAll(".choosePathModelBackButton"), //Select all back button on Choose Path forms
        pathModelBtn1   = document.querySelector('#choosePathModel1Button'),         //Select submit btn on path model 1
        pathModelBtn2   = document.querySelector('#choosePathModel2Button')


//Choose what model to show after clicking submit btn
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

//Choose what Path is picked up and render that path
pathModelBtn1.addEventListener('click', () => {
    if(document.querySelector("input[name='pathModel1']:checked").value === "1") {
        pathModelBtn1.setAttribute('href', 'Model1Path1.html')
    } else {
        pathModelBtn1.setAttribute('href', 'Model1Path2.html')
    }
})

//Choose what Path is picked up and render that path
pathModelBtn2.addEventListener("click", () => {
    if(document.querySelector("input[name='pathModel2']:checked").value == "1") {
        pathModelBtn2.setAttribute('href', 'Model2Path1.html')
    } else {
        pathModelBtn2.setAttribute('href', 'Model2Path2.html')
    }
})