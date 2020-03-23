window.onload = function(){
    const   inputs      = document.querySelectorAll('input[type="number"]'),
            spans       = document.querySelectorAll('span'),
            fhwl        = document.querySelector("#fhwl"),
            fhwdB       = document.querySelector("#fwhdB"),
            Fl          = document.querySelector("#Fl"),
            FdB         = document.querySelector("#FdB"),
            SNRl        = document.querySelector("#SNRl"),
            SNRdB       = document.querySelector("#SNRdB"),
            form        = document.querySelector("form"),
            submitBtnP2 = document.querySelector("#submitBtnP2M1")

    

  
           //Check for errors in input data
           const validate = function(mode) {
            console.log('mode 2 = ' + mode)
           
            if(inputs[9].value === '') {
                return false
            }
            
            for(let i = 0; i < inputs.length - 1; i++) {
              
              if(i == 5) {
                if(inputs[i].value >= 0) {
                  
                  return false         
                  
                }
            
              } else if (i == 8) {
                if(Number.isInteger(Number(inputs[i].value)) == false || Number(inputs[i].value) <= 0) {
                  
                  return false
                }
              } else {
                if(inputs[i].value < 0) {
                  
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
                
              } else {
 
                  ans = F1(Number(inputs[9].value), Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value), Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value), mode)
     
                
              
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




    submitBtnP2.addEventListener("click", function() {
      mode = 2;
      outputCalc(mode); 
    })
    




    

}



