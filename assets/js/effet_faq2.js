// Récupere les arguments d'appels de la page (GET)
// Renvoie un tableau.
function jGetParams() {
	var x = $(location).attr('search');
	var splitted = x.split("?");
    if(splitted.length === 1) {
       return {};
    }
    var paramList = decodeURIComponent(splitted[1]).split("&");
    var params = {};
    for(var i = 0; i < paramList.length; i++) {
        var paramTuple = paramList[i].split("=");
        params[paramTuple[0]] = paramTuple[1];
    }
    return params;
}

//action sur le click d'une question, sur le chargement de la page s'l y a un paramètre ou sur le click sur un bouton
function actionClick(question) {
	question.css("font-weight", "bold");
	
	//pour le desktop
	$('.zonereponse').empty();
	$('#reponse_heading').empty();
	$('#reponse_heading').append("<h3 class=\"panel-title\">"+question.children().html()+"</h3>");
	var text = question.next().html();
	$('.zonereponse').append(text);
	$('.zonereponse').append("<div class=\"text-center\"><button id=\"precedent\" name=\"precedent\" type=\"button\" class=\"btn btn-primary\"><span class=\" glyphicon glyphicon-chevron-left\"></span></button> <button id=\"suivant\" name=\"suivant\" type=\"button\" class=\"btn btn-primary\"><span class=\" glyphicon glyphicon-chevron-right\"></span></button></div>");
	$('#precedent').click(function() {
		precedent(question);
	});
	$('#suivant').click(function() {
		suivant(question);
	});

	if (!question.prev().prev().length)
		$('#precedent').attr('disabled','true');
	if (!question.next().next().length)
		$('#suivant').attr('disabled','true');
	//pour les mobiles
	$('.reponse').css("display", "none");
	question.next().css("display","block");
	question.next().addClass("hidden-md hidden-lg");
}


function precedent (question) {
	question.removeAttr("style");
	question=question.prev().prev();
	actionClick(question);
}

function suivant (question){
	question.removeAttr("style");
	question=question.next().next();
	actionClick(question);
}


$(document).ready(function() {
	//on cache toutes les réponses
//	alert ($('.question:eq(5) span').html());
	$('.reponse').css("display", "none");
	//Si un id d'une question est saisie, on se place sur la question correspondante
	question = $('#' + jGetParams()['id']+ '');	
	
	if (question.attr('id')){
		question.parent().parent().prev().children().first().click(); // Simule un clic sur la bonne question
		// alert("ref_" + question.parent().parent().parent().attr("id"));
		//$('#ref_' + question.parent().parent().parent().attr("id")).click(); // Simule un clic sur la catégorie (etudiant ou personnel)
		question.parent().parent().parent().prev().children().children().first().click();
		actionClick(question);
	}

	
	$('.question span').click(function() {
		//on supprime le style de la question cliquï¿½e
		$('.question').removeAttr("style");
		//on se positionne sur la question cliquï¿½e
		question = $(this).parent();
		var text = question.next().html();
		actionClick(question);
		
	});
});
