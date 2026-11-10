function beregn_pris(antall){
    const standardpris = 250;
    return antall * standardpris
}

const antall = 3;
document.getElementById("resultat").textContent =
  `${antallBilletter} billetter koster ${beregn_pris(antallBilletter)} kr.`;