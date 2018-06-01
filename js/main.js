var pierre = "pierre";
var feuille = "feuille";
var ciseaux = "ciseaux";
var scorePlayer = 0;
var scoreCpu = 0;
var idPartie = 1;
var timer;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");


$(document).ready(function (){
  // $("#cubetest").keypress(function(){
  //   $(this).animate({"left": "+=10px"}, "slow");
  //   // .animate({
  //   //   marginLeft: "50%",
  //   //   opacity: "100"
  //   // });
  // });
  // $('#commentjouer').keydown(function(){
  //    $(this).css('background-color', 'red');
  //  });
  //  $('#commentjouer').keyup(function(){
  //      $(this).css('background-color', 'silver');
  //  });
});


btn1.onclick = function commentJouer(){
  document.getElementById("commentjouer").style.visibility = "visible";
  document.getElementById("btn1").style.visibility = "hidden";
}

btn3.onclick = function fermer(){
  document.getElementById("commentjouer").style.visibility = "hidden";
  document.getElementById("btn1").style.visibility = "visible";
}

btn2.onclick = function ouvrirHistorique(){
  document.getElementById("historique").style.visibility = "visible";
  document.getElementById("btn2").style.visibility = "hidden";
}

btn4.onclick = function fermerHistorique(){
  document.getElementById("historique").style.visibility = "hidden";
  document.getElementById("btn2").style.visibility = "visible";
}

function play(choixJoueur){
  console.log(choixJoueur);
  //choix du cpu ici
  getChoixCpu(choixJoueur);
}

function getChoixCpu(choixJoueur){
  var item;
  var items = ["pierre", "feuille", "ciseaux"];
  for (var i = 0; i < 1; i++) {
    item = items[Math.floor(Math.random()*items.length)];
  }
  console.log("choix cpu: "+item);
  verifierResultat(choixJoueur, item);
  return item;
}

function verifierResultat(choixJoueur, choixCpu){
  document.getElementById("scorePlayer").classList.remove("player");
  document.getElementById("scoreCpu").classList.remove("cpu");
  console.log(choixJoueur + " - " + choixCpu);
  if(choixJoueur == choixCpu){
    console.log("egalite");
    document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
    document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
    document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"egalite\">EGALITE</td></tr>";
    document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"egalite\">EGALITE</td></tr>"
    idPartie++;
  }
  else{
    if(choixJoueur == "pierre"){ // si le joueur choisit la pierre
      if(choixCpu == "ciseaux"){
        console.log("gagné");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"victoire\">VOUS AVEZ GAGNE</td></tr>";
        scorePlayer++;
        document.getElementById("scorePlayer").innerHTML = scorePlayer;
        document.getElementById("scorePlayer").classList.add("player");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"victoire\">VICTOIRE</td></tr>"
        idPartie++;
      }
      if(choixCpu == "feuille"){
        console.log("perdu");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"defaite\">L\'ADVERSAIRE A GAGNE</td></tr>";
        scoreCpu++;
        document.getElementById("scoreCpu").innerHTML = scoreCpu;
        document.getElementById("scoreCpu").classList.add("cpu");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"defaite\">DEFAITE</td></tr>"
        idPartie++;
      }
    }
    if(choixJoueur == "feuille"){ // si le joueur choisit la feuille
      if(choixCpu == "pierre"){
        console.log("gagné");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"victoire\">VOUS AVEZ GAGNE</td></tr>";
        scorePlayer++;
        document.getElementById("scorePlayer").innerHTML = scorePlayer;
        document.getElementById("scorePlayer").classList.add("player");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"victoire\">VICTOIRE</td></tr>"
        idPartie++;
      }
      if(choixCpu == "ciseaux"){
        console.log("perdu");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"defaite\">L\'ADVERSAIRE A GAGNE</td></tr>";
        scoreCpu++;
        document.getElementById("scoreCpu").innerHTML = scoreCpu;
        document.getElementById("scoreCpu").classList.add("cpu");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"defaite\">DEFAITE</td></tr>"
        idPartie++;
      }
    }
    if(choixJoueur == "ciseaux"){ // si le joueur choisit le ciseaux
      if(choixCpu == "feuille"){
        console.log("gagné");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"victoire\">VOUS AVEZ GAGNE</td></tr>";
        scorePlayer++;
        document.getElementById("scorePlayer").innerHTML = scorePlayer;
        document.getElementById("scorePlayer").classList.add("player");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"victoire\">VICTOIRE</td></tr>"
        idPartie++;
      }
      if(choixCpu == "pierre"){
        console.log("perdu");
        document.getElementById("commentaire").innerHTML="<tr><td>Vous avez choisi "+choixJoueur;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td>L\'adversaire a choisi "+choixCpu;
        document.getElementById("commentaire").innerHTML+="</td></tr><tr><td class=\"defaite\">L\'ADVERSAIRE A GAGNE</td></tr>";
        scoreCpu++;
        document.getElementById("scoreCpu").innerHTML = scoreCpu;
        document.getElementById("scoreCpu").classList.add("cpu");
        document.getElementById("parties").innerHTML+="<tr><td>"+idPartie+"</td><td>"+choixJoueur+"</td><td>"+choixCpu+"</td><td class=\"defaite\">DEFAITE</td></tr>"
        idPartie++;
      }
    }
  }

}
