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
            return dB_value;
        } else if(ratio === 'voltage') {
            dB_value = 20 * Math.log10(lin_value)
            return dB_value;
        }

    },

    F1: function(SNR, Tcoil, L1, L2, G3, F3, S113, L4, F5, nMeas, mode) {
        const T0 = 290 //Standard temp of 290 K
        const   L1lin   = this.dB_2_lin(L1, 'power'),
                L2lin   = this.dB_2_lin(L2, 'power'),
                G3lin   = this.dB_2_lin(G3, 'power'),
                F3lin   = this.dB_2_lin(F3, 'power'),
                S113lin = this.dB_2_lin(S113, 'voltage'),
                L4lin   = this.dB_2_lin(L4, 'power'),
                F5lin   = this.dB_2_lin(F5, 'power')

        let FHW = 1 + ((2 * T0) / (Tcoil + T0)) * (L1lin * L2lin * (1 + (1 / (1 - Math.pow(S113lin, 2))) * (F3lin - 1 + ((L4lin * F5lin -1) /G3lin))) - 1)
        let F = FHW / nMeas
        
        if(mode === 1) {
            let SNRout = this.dB_2_lin(SNR, 'power') / F
            return [FHW, F, SNRout]
        } else {
            let SNRin = this.dB_2_lin(SNR, 'power') * F
            return [FHW, F, SNRin]
        }

        
    }
    
}



