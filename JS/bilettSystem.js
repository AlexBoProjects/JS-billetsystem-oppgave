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
const alder = 40;
const antall = 2;
const er_medlem = true;

function beregn_avansert_billett(alder, antall, er_medlem) {
  if (typeof alder !== "number" || !Number.isFinite(alder) || alder < 0 || alder > 120) {
    return "Alderen må være et tall mellom 0 og 120 år.";
  }
  if (!Number.isInteger(antall) || antall <= 0) {
    return "Antall billetter må være et positivt heltall.";
  }
  if (typeof er_medlem !== "boolean") {
    return "Medlem må være true eller false.";
  }

  let billettpris;
  if (alder < 18) {
    billettpris = 125;
  } else if (alder <= 67) {
    billettpris = 250;
  } else {
    billettpris = 175;
  }

  let rabatt = 0;
  if (er_medlem) {
    rabatt += 0.2;
  }
  if (antall > 5) {
    rabatt += 0.1;
  }

  return billettpris * antall * (1 - rabatt);
}

const resultat = beregn_avansert_billett(alder, antall, er_medlem);

const skjema = document.getElementById("billettskjema");
const resultatElement = document.getElementById("resultat");

skjema.addEventListener("submit", (event) => {
  event.preventDefault();

  const alder = Number(document.getElementById("alder").value);
  const antall = Number(document.getElementById("antall").value);
  const er_medlem = document.getElementById("er-medlem").checked;
  const resultat = beregn_avansert_billett(alder, antall, er_medlem);

  resultatElement.textContent =
    typeof resultat === "number" ? `Totalpris: ${resultat} kr` : resultat;
});
