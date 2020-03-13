window.onload = function(){
    const   inputs      = document.querySelectorAll('input[type="number"]'),
            spans       = document.querySelectorAll('span'),
            submitBtn   = document.querySelector('button'),
            fhwl        = document.querySelector("#fhwl"),
            fhwdB       = document.querySelector("#fwhdB"),
            Fl          = document.querySelector("#Fl"),
            FdB         = document.querySelector("#FdB"),
            SNRl        = document.querySelector("#SNRl"),
            SNRdB       = document.querySelector("#SNRdB"),
            form        = document.querySelector("form"),
            btnPath2    = document.querySelector("#model1path2btn")

  
           //Check for errors in input data
           const validate = () => {
            
            for(var i = 0; i < inputs.length; i++) {
              if(i !== 6) {
                if(inputs[i].value < 0) {
                  return false         
                  
                }
              } else {
                if(inputs[i].value >= 0) {
                  return false
                }
              }
            }
            return true
          }


            const outputCalc = function(mode) {
              if(validate() == false) {
                spans.forEach(span => {
                  span.textContent = 'NaN'
                })
                return false
              } else {
                let ans = F1(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value), Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value), Number(inputs[9].value), mode)
              
                fhwl.textContent = ans[0].toFixed(4)
                fhwdB.textContent = lin_2_dB(ans[0], 'power').toFixed(4)
              
                Fl.textContent = ans[1].toFixed(4)
                FdB.textContent = lin_2_dB(ans[1], 'power').toFixed(4)
      
                SNRl.textContent = ans[2].toFixed(4)
                SNRdB.textContent = lin_2_dB(ans[2], 'power').toFixed(4)
              }
              
          }
      
 

      //Validacija podataka 

      form.addEventListener("submit", function(e) {

        e.preventDefault()
      })

    //Racunanje
    submitBtn.addEventListener("click", function() {
      let mode = 1
      outputCalc(mode)

        
    })
    btnPath2.addEventListener("click", function() {
      let mode = 2
      outputCalc(mode)

        
    })



    

}



