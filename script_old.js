// localStorage.setItem("clé","valeur")
// localStorage.getItem("clé")
// localStorage.clear()

if (localStorage.getItem("nom") != null)
	h1.textContent = `Bonjour ${localStorage.getItem(
		"nom"
	)}, tu as ${localStorage.getItem("age")} ans`;

btnOK.onclick = () => {
	localStorage.setItem("nom", nom.value);
	localStorage.setItem("age", age.value);
	document.location.reload();
};
btnClear.onclick = () => {
	localStorage.clear();
	document.location.reload();
};
