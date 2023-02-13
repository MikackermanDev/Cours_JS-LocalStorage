// localStorage.setItem("clé","valeur")
// localStorage.getItem("clé")
// localStorage.clear()
// JSON.stringify(Objet) 	Objet to String
// JSON.parse(string)			String to Objet

const local = JSON.parse(localStorage.getItem("user"));

if (local != null) {
	//formulaire.style.display = "none";
	formulaire.style.visibility = "hidden";
	h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans`;
}

btnOK.onclick = () => {
	const user = {
		nom: nom.value,
		age: age.value,
	};

	localStorage.setItem("user", JSON.stringify(user));
	document.location.reload();
};
btnClear.onclick = () => {
	localStorage.clear();
	document.location.reload();
};
