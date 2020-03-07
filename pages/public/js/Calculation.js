const nmrCalc = {
    dB_2_lin: function(dB_value, ratio) {
        if(ratio === 'power') {
            lin_value = Math.pow(10, (dB_value/10))
        } else if(ratio === 'voltage') {
            lin_value = Math.pow(10, (dB_value/20))
        }
        return lin_value;
    },

    lin_2_dB: function(lin_value, ratio) {
        if(ratio === 'power') {
            dB_value = 10 * Math.log10(lin_value)
        } else if(ratio === 'voltage') {
            dB_value = 20 * Math.log10(lin_value)
        }

        return dB_value;
    }
}

