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
            form        = document.querySelector("form")
    

  var mode;
           //Check for errors in input data
  const validate = (mode) => {
    
    if(inputs[0].value == '') {
      return false
    }

     
    for(var i = 1; i < inputs.length; i++) {
      if(i == 6  || i == 9) {
        if(inputs[i].value >= 0 || inputs[i].value === '') {
          
          return false         
          
        }
      } else if (i == 12) {
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

            const outputCalc = function(mode) {
              if(validate(mode) === false) {
                spans.forEach(span => {
                  span.textContent = 'NaN'
                })
                
              } else {

                
                ans = F2(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value), Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value), Number(inputs[9].value), Number(inputs[10].value), Number(inputs[11].value), Number(inputs[12].value) ,mode)

                
                
                console.log(ans)
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
      mode = 1
      outputCalc(mode)

        
    })

}
