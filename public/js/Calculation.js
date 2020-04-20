
     var dB_2_lin = function(dB_value, ratio) {
        if(ratio === 'power') {
            lin_value = Math.pow(10, (dB_value/10))
            return lin_value;
        } else if(ratio === 'voltage') {
            lin_value = Math.pow(10, (dB_value/20))
            return lin_value;
        }
        
    }

    var lin_2_dB = function(lin_value, ratio) {
        if(ratio === 'power') {
            dB_value = 10 * Math.log10(lin_value)
            return dB_value;
        } else if(ratio === 'voltage') {
            dB_value = 20 * Math.log10(lin_value)
            return dB_value;
        }

    }

    var F1 = function(SNR, Tcoil, L1, L2, G3, F3, S113, L4, F5, nMeas, mode) {
        const T0 = 290 //Standard temp of 290 K
        const   L1lin   = dB_2_lin(L1, 'power'),
                L2lin   = dB_2_lin(L2, 'power'),
                G3lin   = dB_2_lin(G3, 'power'),
                F3lin   = dB_2_lin(F3, 'power'),
                S113lin = dB_2_lin(S113, 'voltage'),
                L4lin   = dB_2_lin(L4, 'power'),
                F5lin   = dB_2_lin(F5, 'power'),
                SNRlin  = dB_2_lin(SNR, 'power')

        let FHW = 1 + ((2 * T0) / (Tcoil + T0)) * (L1lin * L2lin * (1 + (1 / (1 - Math.pow(S113lin, 2))) * (F3lin - 1 + ((L4lin * F5lin -1) /G3lin))) - 1)
        console.log(FHW)
        //    F_HW = 1 + ((2 * T0) / (Tcoil + T0)) * (L1 * L2 *       (1 + (1 / (1 - (S11_3a ** 2)))        * (F3a - 1 +   ((L4 * F5 - 1)       / G3a))) - 1)
        let F = FHW / nMeas
        
        if(mode === 1) {
            let SNRout = SNRlin / F
            return [FHW, F, SNRout]
        } else {
            let SNRin = SNRlin * F
            return [FHW, F, SNRin]
        }        
    }

    var F2 = function(SNR, Tcoil, L1, L2, G3a, F3a, S11a, G3b, F3b, S11b, L4, F5, nMeas, mode) {
        const T0 = 290 //Standard temp of 290 K
        const   L1lin       = this.dB_2_lin(L1, 'power'),
                L2lin       = this.dB_2_lin(L2, 'power'),
                G3alin      = this.dB_2_lin(G3a, 'power'),
                F3alin      = this.dB_2_lin(F3a, 'power'),
                S11alin     = this.dB_2_lin(S11a, 'voltage'),
                G3blin      = this.dB_2_lin(G3b, 'power'),
                F3blin      = this.dB_2_lin(F3b, 'power'),
                S11blin     = this.dB_2_lin(S11b, 'voltage'),
                L4lin       = this.dB_2_lin(L4, 'power'),
                F5lin       = this.dB_2_lin(F5, 'power'),
                SNRlin      = this.dB_2_lin(SNR, 'power')

        FHW = 1 + ((2 * T0) / (Tcoil + T0)) * (L1lin * L2lin * (1 + (1 / (1 - Math.pow(S11alin, 2))) * (F3alin - 1 + (1 / (G3alin * (1 - Math.pow(S11blin,2)))) * (F3blin - 1 + ((L4lin * F5lin -1) / G3blin)))) - 1)
        
        F = FHW / nMeas

        if(mode == 1) {
            let SNRout = SNRlin / F
            return [FHW, F, SNRout]
        } else {
            let SNRin = SNRlin * F
            return [FHW, F, SNRin]
        }
    }
    




