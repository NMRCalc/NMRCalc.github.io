const dB_2_lin = function(dB_value, ratio) {
    if(ratio === 'power') {
        lin_value = Math.pow(10, (dB_value/10))
        return lin_value;
    } else if(ratio === 'voltage') {
        lin_value = Math.pow(10, (dB_value/20))
        return lin_value;
    }
    
}


const proba = function(SNR, Tcoil, L1, L2, G3, F3, S113, L4, F5, nMeas) {
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
    return FHW
}


console.log(proba(12.17, 10, 0.28, 0.27, 36.13, 1.11, -16.43, 0.46, 33.50, 200))