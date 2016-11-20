/*
 Adds all initially (and only initially) needed eventListeners
 Do not add event listeners that are supposed to be added dynamically.
 */
function addListenersFirst(){
	// Add click listener to the upper div with className 'rechts'
	// a) put the div elements into a variable
	var el = document.getElementsByClassName("linkebox")[0];
	var el2 = document.getElementsByClassName("rechtebox")[0];

	// b) use variable to add event listener
	el.addEventListener("click", copyMe, false);
	el2.addEventListener("mouseover",flipMe, false);

	// Add mouseover listener to the upper div with classname 'links'
	// Add listeners to action elements for "Make Alerts" "Bezeichner" and "Schreibe den Text"
	myp = document.querySelectorAll("#a2 p");

	var mypel1 = myp[0];
	var mypel2 = myp[1];
	var mypel3 = myp[2];

	mypel1.addEventListener("click", function(){makeAlerts(myp[0].innerHTML)}, false);
	mypel2.addEventListener("click", function(){makeAlerts(myp[1].innerHTML)}, false);
	mypel3.addEventListener("click", function(){makeAlerts(myp[2].innerHTML)}, false);

	// add listener to form input elements
	var btn_makeAlerts =  document.querySelector("#a2 input[type=submit]");

	btn_makeAlerts.addEventListener("click", function(){
		for(var i = 0; i < myp.length; i++){
			makeAlerts(myp[i].innerHTML)
		}
	}, false);



	// ######
	var btn_switchIdentifier =  document.querySelector("#a3 input[type=submit]");
	btn_switchIdentifier.addEventListener("click", switchMe, false);


	var btn_selector_left 	=	document.getElementById("colorLeft");
	btn_selector_left.addEventListener("click", changeColor, false);
	var btn_selector_middle =	document.getElementById("colorMiddle");
	btn_selector_middle.addEventListener("click", changeColor, false);
	var btn_selector_right 	=	document.getElementById("colorRight");
	btn_selector_right.addEventListener("click", changeColor, false);


	var btn_createText=  document.getElementById("createtext");
	btn_createText.addEventListener("click", createText, false);

	var btn_addItem = document.getElementById("insert");
		btn_addItem.addEventListener("click", addListItem, false);

	var btn_removeItem = document.getElementById("remove");
		btn_removeItem.addEventListener("click", removeListItem, false);

}


/*
 copyMe copies the text from one element to another
 */
function copyMe(){
	// put the "container"-element (to where the text should copied) into the
	// variable container (target element)
	var source = document.getElementsByClassName("linkebox")[0];
	var target = document.getElementById("container");
	// put the element to be read into the variable divlinks (source element)
	//divlinks =
	// put the content of the source element into text node of the target element


	target.innerHTML = source.innerHTML;
}

/*
 flipMe copies the text from one element to another and deletes the text from
 the original element.
 */
function flipMe(){
	// works similar to copyMe
	// in addition, delete the text from the source element
	var source = document.getElementsByClassName("rechtebox")[0];
	var target = document.getElementById("container2");

	target.innerHTML = source.innerHTML;
	source.innerHTML = "";
}


/*
 makeAlerts puts alerts to several elements
 */
function makeAlerts(p){


	// put event listener for each selected tag

	alert(p);

}

/*
 evokes the alert
 */
function showNewAlert(){
	// An alert should be displayed with the text of the paragraph that evoked the function.
	// Use "this" to refer to the actual object


}

/*
 switchME switches the text of two boxes
 */
function switchMe(){

	var inhalt_links = document.getElementById("links").innerHTML;
	var inhalt_mitte = document.getElementById("mitte").innerHTML;

	document.getElementById("links").innerHTML = inhalt_mitte;
	document.getElementById("mitte").innerHTML = inhalt_links;

}

/*
 changeColor changes the color of the colored
 boxes depending on the selection of the respective select box.
 */
function changeColor(){
	// Variable idName stores the ID of the elements that invoked this function
	var idName = this.id;
	var farbwert_links	= document.getElementById("links");
	var farbwert_mitte 	= document.getElementById("mitte");
	var farbwert_rechts	= document.getElementById("rechts");




	// Use if else statement to distinguish which select box has been used.
	// For each case: select the html element that correspond to the used select box.
	// For this element set a new attribute class with the name that corresponds to the selected value.
	// Have a look to the css to know which class will help you.
	switch (idName) {
		case "colorLeft":
			farbwert_links.style.backgroundColor = this.value;
			break;
		case "colorMiddle":
			farbwert_mitte.style.backgroundColor = this.value;
			break;
		case "colorRight":
			farbwert_rechts.style.backgroundColor = this.value;
			break;
		default:
			console.log(idName + " nicht bekannt");
	}

	// Console log if needed.
	console.log("value: " + this.value + ", id: " + this.id);
}

/*
 createText concatenates text from the input fields
 */
function createText(){
	var _name	= document.getElementById("name").value;
	var _number	= document.getElementById("number").value;
	var _thing	= document.getElementById("thing").value;

	document.getElementById("loesung").innerHTML ="";
	document.getElementById("loesung").innerHTML = _name + " hat " + _number +" " + _thing + "!";

	// Console log if needed.
	console.log("Name: " + _name + ", Number: " + _number + ", Sache: " + _thing);
}

function addListItem(){
	// wir holen die Lste anhand des elementes
	var list = document.getElementsByTagName("OL")[0];
	// Ereugen ein-Listenelement
	var node = document.createElement("LI");
	// Erzeugen einen Texteintrag
	var textnode = document.createTextNode("Brot");
	// Höngen den Texteintrag an das Listenelement
	node.appendChild(textnode);
	// Hängen das Listenelement an die Liste
	list.appendChild(node);
	// Kontrolausgabe
	console.log("Add an Item");
}


function removeListItem(){
	// wir holen die Lste anhand des elementes
	var list = document.getElementsByTagName("OL")[0];
	// Zählvariablen auf Null
	var i=0, c =0;
	// Schleife zum Zählen der elemente
	while(list.getElementsByTagName('li')[i++]) c++;
	// Wenn elemente da sind
	if (c > 0) {
		// wird das letzte element gelöscht
		list.removeChild(list.childNodes[c-1]);
	}
	// Kontrolausgabe
	console.log("Remove an Item " + c);
}
window.onload=addListenersFirst;

