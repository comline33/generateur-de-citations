
const debut_citation_general = [
'Avec la dualité de la situation actuelle,',
'Considérant la morosité actuelle,',
'Où que nous mène cette rigueur actuelle,',
'Dans le but de pallier à la situation induite,',
'Pour réagir face à la baisse de confiance induite,',
'Afin de circonvenir à cette rigueur que nous constatons,',
'Malgré cette rigueur générale,',
'Du fait de la situation contextuelle,',
'Dans le but de pallier à la baisse de confiance intrinsèque,',
'Si vous voulez mon avis concernant la dégradation conjoncturelle,',

];
const milieu_citation_general = [
"il ne faut pas négliger de favoriser certaines alternatives offrant à nous",
"il est préférable d'imaginer la globalité des alternatives s'offrant à nous,",
"il serait intéressant d'examiner l'ensemble des organisations matricielles envisageables,",
"on se doit d'anticiper les relations des problématiques possibles,",
"on ne peut se passer d'uniformiser la somme des problématiques éventuelles,",
"on ne peut se passer de prendre en considération la totalité des problématiques de bon sens,",
"on se doit d'examiner la majorité des organisations matricielles réalisables,",
"on se doit de caractériser la somme des issues possibles,",
"je n'exclus pas d'arrêter de stigmatiser chacune des hypothèses possibles,",
"il serait intéressant d'étudier toutes les problématiques possibles,"
];
const fin_citation_general = [
'parce que les mêmes causes produisent les mêmes effets.',
'pour longtemps.',
" à l'avenir.",
"depuis longtemps.",
"parce que nous ne faisons plus le même métier.",
"parce qu'il s'agit de notre dernière chance.",
"parce que les mêmes causes produisent les mêmes effets.",
"si l'on veut s'en sortir un jour.",
"avec toute la prudence requise.",
"à court terme."
];

const debut_citation_amour = ["Je ne peux imaginer la vie Sans ta présence auprès de moi" ,"Je ne peux imaginer la vie,Sans ton sourire pour illuminer mes jours"
];

const milieu_citation_amour = ["Sans la tendresse de tes paroles Et la douceur de tes doigts",
];

const fin_citation_amour = ["Sans la tendresse de tes paroles Et la douceur de tes doigts"
];

let longeurCitation = debut_citation_general.length;
function genereCitation(){
	let randomCitation  = Math.floor(Math.random() * longeurCitation);
 	return newCitation = debut_citation_general[randomCitation] + milieu_citation_general[randomCitation]+fin_citation_general[randomCitation];
}
$(document).ready(function(){
	
	$('#generer-generale').click(function(){
	$('.citation').html(genereCitation());
	});
	});

		







