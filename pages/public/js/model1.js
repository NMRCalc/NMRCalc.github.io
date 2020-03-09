window.onload = function(){
    const   inputs      = document.querySelectorAll('input[type="number"]'),
            submitBtn   = document.querySelector('button'),
            fhwl        = document.querySelector("#fhwl"),
            fhwdB       = document.querySelector("#fwhdB"),
            Fl          = document.querySelector("#Fl"),
            FdB         = document.querySelector("#FdB"),
            SNRl        = document.querySelector("#SNRl"),
            SNRdB       = document.querySelector("#SNRdB"),
            form        = document.querySelector("form")


    
      //Validacija podataka 

      form.addEventListener("submit", function(e) {
        
        e.preventDefault()
      })

    //Racunanje
    submitBtn.addEventListener("click", function() {
        outputCalc()

        
    })

    const outputCalc = function() {
        let ans = nmrCalc.F1(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value, inputs[6].value, inputs[7].value, inputs[8].value, inputs[9].value, 1)
        
        fhwl.textContent = ans[0].toFixed(4)
        fhwdB.textContent = nmrCalc.lin_2_dB(ans[0], 'power').toFixed(4)
        
        Fl.textContent = ans[1].toFixed(4)
        FdB.textContent = nmrCalc.lin_2_dB(ans[1], 'power').toFixed(4)

        SNRl.textContent = ans[2].toFixed(4)
        SNRdB.textContent = nmrCalc.lin_2_dB(ans[2], 'power').toFixed(4)
    }

    

}



