//////////////////////////////////////////////
//
// Déclarations liant les variables aux ID's prédéfinies sur la page HTML
// + déclaration d'une liste de phrases prédéfinies
//
//////////////////////////////
let phraseEntre = document.getElementById('phraseEntre')
let phraseSelectionne = document.getElementById('phraseSelectionne')
let msgErreur = document.getElementById('msgErreur')

const LISTE_PHRASES = [
  "Le soleil vient de se lever.",
  "Les chaussettes de l'archiduchesse sont-elles sèchent, archi sèchent ?",
  "Le slogan du magasin Gifi est : Gifi les idées de génie !",
  "Dans la barre de menus Visual Studio, choisissez Outils > Options.",
  "Comment exprimer que je suis content avec un émoji très simple ? J'écris ceci : \"^^\".",
  "\"càc\" est l'abréviation du terme corps-à-corps.",
  "Mais, que vois-je ? ; une loutre.",
  "Super, j'arrive à écrire au clavier maintenant !",
  "Quand il me prend dans ses bras, qu'il me parle tout bas, je vois la vie en rose.",
  "C'est agréable de voir de nouvelles personnes !",
  "Le tableau de la Joconde a été peint par Léonard de Vinci.",
  "La variété de coutumes, langues et traditions des 250 ethnies composant le Nigeria lui confère une très riche diversité.",
  "Il était une fois, quelqu'un qui apprenait à écrire au clavier.",
  "Le point le plus haut de l'Afghanistan est à 7.485m au-dessus de la mer, son nom est le Nowshak.",
  "Plusieurs sites sud-coréens sont inscrits au Patrimoine mondial de l’UNESCO. Ils sont au nombre de quatorze en 2021.",
  "Vous pouvez me contacter à cette adresse e-mail : prenom.nom@gmail.com !",
  "La Namibie compte 76 conservatoires communautaires sur une superficie de 155.000 km2.",
  "Comment dessiner un dollar avec un clavier ? Comme ceci : [_$_].",
  "Le bortsch est une soupe traditionnelle Ukrainienne servie en entrée.",
  "J'écris un mot entre crochet : [pomme].",
  "J'écris un mot entre accolades : {ordinateur}.",
  "J'écris un mot entre parenthèses : (aéroport).",
  "Avec les touches [ALT GR] + [à] je peux écrire le caractère spécial arobase : @.",
  "Défaire, refaire, c'est aussi faire."
]


//////////////////////////////////////////////
//
// Déclaration d'une phrase aléatoire par un nombre entre 0 et la longueur de la liste de phrases prédéfinies
// Déclaration disant que la phrase sélectionnée aléatoirement qui doit s'afficher dans la page HTML (frontend) est égale à la phrase sélectionnée aléatoirement dans la liste de phrases prédéfinies
// Déclaration disant que la valeur de la phrase sélectionnée aléatoirement est égale à la phrase sélectionnée aléatoirement dans la liste de phrases prédéfinies
//
//////////////////////////////
let phraseAleatoire = Math.floor(Math.random() * LISTE_PHRASES.length)
phraseSelectionne.innerHTML = LISTE_PHRASES[phraseAleatoire]
phraseSelectionne.value = LISTE_PHRASES[phraseAleatoire]



//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque envoi de donnée (submit), afin de bloquer cet envoi par une fonction d'événement
//
//////////////////////////////
form.addEventListener('submit', function(e) {
  e.preventDefault()
})


//////////////////////////////////////////////
//
// Lire un event du formulaire qui bloque le saut de ligne du textarea quand la touche ENTER est pressée
//
//////////////////////////////
form.addEventListener('keypress', function(e) {
  if (e.code == 'Enter') {
    return e.preventDefault()
  }
})


//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque touche du clavier levée, utilisant la fonction de vérification de concordance des mots entrés et selectionnés
//
//////////////////////////////
form.addEventListener('keyup', function(e) {
  if (phraseSelectionne.value === phraseEntre.value) {
    document.getElementById("phraseSelectionne").style.color = "green"
  } else {
    document.getElementById("phraseSelectionne").style.color = "red"
  }

  if (e.code !== 'Enter') {
    return
  }
  
  checkSentence()
})


//////////////////////////////////////////////
//
// Fonction de vérification de concordance des phrases entrés par l'utilisateur et des mots sélectionnés aléatoirement dans une liste de mots prédéfinies
//
//////////////////////////////
function checkSentence() {
  if (phraseSelectionne.value === phraseEntre.value) {
    form.submit()
  }
}


//////////////////////////////////////////////
//
// Focus l'input lorsque la page se recharge, permet d'éviter à l'apprenant de devoir cliquer
//
//////////////////////////////
document.getElementById("phraseEntre").addEventListener("click", () => {
  document.getElementById("phraseEntre").focus()
})


//////////////////////////////////////////////
//
// Si correct     = vert
// Si incorrect   = rouge
//
//////////////////////////////

