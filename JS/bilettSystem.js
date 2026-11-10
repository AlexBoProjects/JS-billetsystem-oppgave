// nivå 1
/*function beregn_pris(antall){
    const standardpris = 250;
    return antall * standardpris
}

const antall = 3;
document.getElementById("resultat").textContent =
  `${antallBilletter} billetter koster ${beregn_pris(antallBilletter)} kr.`;
*/

// nivå 2
function beregn_rabattpris(antall, er_medlem) {
  const standardpris = 250;
  // Nivå 2
  let rabatt = 0;
  if (er_medlem) {
    rabatt += 0.2;
  }
  if (antall > 5) {
    rabatt += 0.1;
  }
  // medlem og mengderabatt legges sammen når begge krav er oppfylt.
  return antall * standardpris * (1 - rabatt);
}
document.getElementById("resultat").textContent = '${beregn_rebattpris}'
