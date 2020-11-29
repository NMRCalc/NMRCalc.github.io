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
            res1        = document.querySelector("#res1"),
            res2        = document.querySelector("#res2")
    

  
           //Check for errors in input data
           const validate = function(mode) {
            
            if(inputs[0].value == '') {
              return false
            }
            
            for(let i = 1; i < inputs.length ; i++) {
              
              if(i == 6) {
                if(inputs[i].value > 0 || inputs[i].value === '') {
                  
                  return false         
                  
                }
              } else if (i == 9) {
                if(Number.isInteger(Number(inputs[i].value)) == false || Number(inputs[i].value) <= 0 || inputs[i].value === '') {
                 
                  return false
                }
              } else {
                if(inputs[i].value < 0 || inputs[i].value === '') {
                  
                  return false
                }
              }
            }
            return true
          }

          // CALCULATE OUTPUT AND PRINT IT OUT
            const outputCalc = function(mode) {
              
              if(validate(mode) == false) {
                spans.forEach(span => {
                  span.textContent = 'NaN'
                })
                res1.style.display = "none"
                res2.style.display = "none"
              } else {
                  ans = F1(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value), Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value), Number(inputs[9].value), mode)

                res1.style.display = "none"
                res2.style.display = "none"
              
                fhwl.textContent = ans[0].toFixed(4)
                fhwdB.textContent = lin_2_dB(ans[0], 'power').toFixed(4)
              
                Fl.textContent = ans[1].toFixed(4)
                FdB.textContent = lin_2_dB(ans[1], 'power').toFixed(4)
      
                SNRl.textContent = ans[2].toFixed(4)
                SNRdB.textContent = lin_2_dB(ans[2], 'power').toFixed(4)

                if(lin_2_dB(ans[2], 'power') >= 9.12) {
                  res1.style.display = "block"
                } else {
                  res2.style.display = "block"
                }
          }
        }
 

      //Validacija podataka 

      form.addEventListener("submit", function(e) {

        e.preventDefault()
      })

    //Racunanje


    submitBtn.addEventListener("click", function() {
      mode = 1
      outputCalc(mode)

        
    })

}








