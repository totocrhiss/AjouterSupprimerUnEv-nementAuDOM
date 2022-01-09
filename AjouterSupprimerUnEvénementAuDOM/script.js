// Voici les consignes données pour réaliser l'exercice.

// À présent que nous avons créé le bouton de connexion de notre site e-commerce, nous allons créer une nouvelle page en gardant le menu de navigation HTML de l’exercice 1. Cette page contiendra deux boutons permettant d'ajouter ou d'enlever un article.

// Ajoutez un bouton Ajouter un article et un bouton Supprimer un article.

// Le bouton Ajouter aura un fond vert et le bouton Supprimer, un fond rouge.

// S'il y a 0 article ajouté, le panier ne sera pas visible. S'il y a au moins 1 article ajouté, le panier sera visible. Le nombre d'articles sera toujours visible.

// Au clic sur le panier, on supprimera les événements d'ajout et de suppression.

// Vous vous baserez sur le code HTML ci-dessous. Le menu a été modifié par rapport à l'exercice 1 afin d'ajouter le nombre d'articles. La modification du texte d'un élément HTML se fait via la méthode element.textContent.

// https://developer.mozilla.org/fr/docs/Web/API/Node/textContent

// Pour afficher le panier, vous utiliserez la méthode element.style.display = 'block'.

// Pour cacher le panier, vous utiliserez la méthode element.style.display = 'none'.
// -------------------------fin de Question Exercice---------------------------------

// Variable pour le bouton Ajouter
let ajouter = document.querySelector("#Ajouter");

// Variable pour le bouton Supprimer
let supprimer = document.querySelector("#Supprimer");

// Variable pour afficher le nombre d'articles
let basketPrice = document.querySelector("#number-article");

// Variable pour afficher l'icône de panier pour me permettre de l'appeler
// avec shop.addEventListener("click", basketValidated);
let shop = document.querySelector("#shop");

// Variable pour l'animation achat avec le chariot,
// la variable est dans une (div class="animationAchat">(vide)</div>)
// et animer en CSS avec une classe CSS orpheline nommer (.startAnimation)
// pour me permettre de l'appeler dans dans la fonction (function basketValidated()).
let animationAchat = document.querySelector(".animationAchat");

// Variable pour l'animation du texte (de remerciement)
// après validation des achats.
// et animer en CSS avec une classe CSS orpheline nommer (.endText)
// pour me permettre de l'appeler avec animationendText.className = "endText";
// dans dans la fonction (function basketValidated()).
let animationendText = document.querySelector("section div p");

// Variable pour le bouton Ajouter qui me permet
// d'incrémenter le nombre d'articles au clic du bouton personnalisé !
let textBtnGrn = document.querySelector(".textGreenButton");

// Variable pour le bouton Supprimer qui me permet
// de décrémenter le nombre d'articles au clic du bouton personnalisé !
let textBtnRed = document.querySelector(".textRedButton");

// Variable pour initialiser à 0
// pour rentrer la valeur des fonctions d'incrémentation
let panier = 0;

function ajouterArticle() {
    //Incrémentation +1 au clic du bouton vert Ajouter
    panier++;

    // Condition (si panier est supérieur ou égale a zéro,
    if (panier >= 0) {
        // alors fait apparaître le panier !)
        shop.style.display = "block";
    }

    //Injecte la valeur incrémentée
    //dans le texte de (<p id="number-article">0</p>)
    basketPrice.innerText = panier;
}

function supprimerArticle() {
    //Incrémentation -1 au clic du bouton rouge Supprimer
    panier--;

    // Condition (si panier est inférieur ou égale a zéro,
    if (panier <= 0) {
        // alors fait disparaître le panier !)
        shop.style.display = "none";

        // Maintiens le panier à zéro,
        // j'ai rajouté cette initialisation pour que la valeur de panier
        // soi inférieur à zéro.
        // (du genre -1 ou -2 ou -3, etc.)
        // C'est un des problèmes que j'ai dû résoudre met ça fonctionne bien !
        panier = 0;
    }

    //Injecte la valeur incrémentée
    //dans le texte de (<p id="number-article">0</p>)
    basketPrice.innerText = panier;
}

// Cette fonction sert à produire l'animation finale
// au clic du panier,
// et a désactivé les boutons Ajouter et Supprimer !
function basketValidated() {
    //Désactive l'action du clic du bouton Ajouter !
    ajouter.removeEventListener("click", ajouterArticle);

    //Désactive l'action du clic du bouton Supprimer !
    supprimer.removeEventListener("click", supprimerArticle);

    // Envoie l'action de l'animation en commençant par
    // l'État du (CSS de .animationAchat) et termine
    // avec l'animation (CSS de .startAnimation)
    // qui une class CSS non déclarée dans le HTML (class orpheline)
    animationAchat.className = "animationAchat startAnimation";

    // Envoie l'action de l'animation du texte avec la class CSS de (.endText)
    // qui une class CSS non déclarée dans le HTML (class orpheline)
    animationendText.className = "endText";

    // Envoie l'action de l'apparition du texte
    // qui se trouve sous les boutons Ajouter et Supprimer
    // pour signaler au correcteur qu'il son bien désactiver !

    textBtnGrn.className += " TxtBtn";
    textBtnRed.className += " TxtBtn";
    // Le code (className += " TxtBtn";)
    // avec le += et un espace dans la parenthèse " TxtBtn",
    // permet tout simplement de concaténer
    // la class (CSS actuel) de la variable
    // avec la class (CSS orpheline).

    // En gros !
    // De compléter la class CSS active de la variable
    // avec la class CSS qui était en latence.
}

ajouter.addEventListener("click", ajouterArticle);
supprimer.addEventListener("click", supprimerArticle);
shop.addEventListener("click", basketValidated);