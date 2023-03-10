"use strict";
//verification si une clé existe dans le localStorage
ol.innerHTML = (localStorage.getItem('list') != null) ?
    localStorage.getItem('list') : "";

//affiche l'info si aucune tache est en cours
noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

//ajout de l'event del/urgent sur les span issus du storage
const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) span.onclick = () => del(span);

const spanUrgs = document.querySelectorAll(".urgent");
for (let span of spanUrgs) span.onclick = () => urgent(span);

form.onsubmit = () => {

    const li = document.createElement("li");
    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = champ.value; //recupere le texte du champ

    const spanDel = document.createElement("span");
    spanDel.classList.add("material-icons", "delete", "md-24"); //ajout de la classe materiel-icons et delete
    spanDel.textContent = "delete_forever"; //ajout de l'icone poubelle

    const spanUrg = document.createElement("span");
    spanUrg.classList.add("material-icons", "urgent", "md-24"); //ajout de la classe materiel-icons et urgent
    spanUrg.textContent = "stars"; //ajout de l'icone stars

    const spanOpt = document.createElement("span");
    spanOpt.classList.add("spanOpt");

    spanOpt.appendChild(spanUrg);
    spanOpt.appendChild(spanDel); //ajout de la span icone delete à li

    li.appendChild(texte);
    li.appendChild(spanOpt);

    ol.appendChild(li); //ajout du li à ol

    champ.value = ""; // efface le champ
    noTache.style.display = "none"; //enleve la div pas de tache en cours

    //ajout de l'event del et urgent sur les span créées
    spanDel.onclick = () => del(spanDel);
    spanUrg.onclick = () => urgent(spanUrg);

    //Sauvegarde du HTML dans le storage
    localStorage.setItem("list", ol.innerHTML);

    return false; //empeche l'actualisation de la page
    //e.preventDefault(); idem à return false
};

//fonction pour supprimer une tache
function del(el) {
    el.parentElement.parentElement.remove(); //supprime le parent et les enfants
    localStorage.setItem("list", ol.innerHTML); //met à jour le storage
    noTache.style.display = (ol.innerHTML == "") ? "block" : "none"; //met à jour la div tache en cours
}

function urgent(el) {
    el.classList.toggle("gold");
    localStorage.setItem("list", ol.innerHTML); //save
}
