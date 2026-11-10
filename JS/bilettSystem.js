// nivå 1
/*function beregn_pris(antall){
    const standardpris = 250;
    return antall * standardpris
}

const antall = 3;
document.getElementById("resultat").textContent =
  `${antallBilletter} billetter koster ${beregn_pris(antallBilletter)} kr.`;

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
*/
// nivaa 3
alder = 40;
antall = 2;
er_medlem = true;

function beregn_avansert_billett(alder, antall, er_medlem) {
  if (typeof alder !== "number" || alder < 0 || alder > 120) {
    return "Aldren må være et tall mellom 0 og 120 år.";
  }
  if (!Number.isInteger(antall) || antall <= 0) {
    return "Antall billetter kan ikkje ver negativt tall.";
  }
  if (typeof er_medlem !== "boolean") {
    return "Medlem må være true eller false.";
  }
    
  let rabatt = 0;
  if (er_medlem) {
    rabatt += 0.2;
  }
  if (antall > 5) {
    rabatt += 0.1;
  }
  // kopierte bare fra nv. 2
  return antall * standardpris * (1 - rabatt);
}