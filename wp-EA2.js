/*
        Adds all initially (and only initially) needed eventListeners
        Do not add event listeners that are supposed to be added dynamically.
*/
function addListenersFirst(){
       // Add click listener to the upper div with className 'rechts
        // a) put the div elements into a variable
                      var lbox =  document.getElementsByClassName("linkebox")[0];
                      var rbox =  document.getElementsByClassName("rechtebox")[0];

        // b) use variable to add event listener
        lbox.addEventListener("click", copyMe);

        // Add mouseover listener to the upper div with classname 'links'
        rbox.addEventListener("mouseover",flipMe);

        // Listener "Make Alerts"
        var alertbutton = document.getElementsByTagName("INPUT")[0];
        alertbutton.addEventListener("click", makeAlerts); 

        // Listener "Bezeichner"
         var switchbutton = document.getElementById("switch");
         switchbutton.addEventListener("click", switchMe);

        // Listener "Listen Dropdown Menue"
        var list_left = document.getElementById("colorLeft");
        list_left.addEventListener("click", changeColor);
        var list_middle = document.getElementById("colorMiddle");
        list_middle.addEventListener("click", changeColor);
        var list_right = document.getElementById("colorRight");
        list_right.addEventListener("click", changeColor);

        //Listener "Text zusammensetzen"
         var text_button = document.getElementById("createtext");
         text_button.addEventListener("click", createText);

        //Listener "Hinzufuegen" + "Loeschen"
        var insert_button = document.getElementById("insert");
        insert_button.addEventListener("click", insertToList);
        var remove_button = document.getElementById("remove");
        remove_button.addEventListener("click", removeFromList);

}


/*
        copyMe copies the text from one element to another (red boxes)
*/
function copyMe(){
        // put the "container"-element (to where the text should copied) into the
        // variable container (target element)
       var container = document.getElementsByClassName("linkebox")[0];

        // put the element to be read into the variable divlinks (source element)
       var divlinks =  document.getElementById("container");

        // put the content of the source element into text node of the target element
        divlinks.innerHTML = container.innerHTML;

}

/*
        flipMe copies the text from one element to another and deletes the text from
        the original element. (green boxes)
*/
function flipMe(){

        // works similar to copyMe
        // in addition, delete the text from the source element (i.e. overwrite)
                var container = document.getElementsByClassName("rechtebox")[0];
                var divlinks =  document.getElementById("container2");
                if (container.innerHTML !=="") {
        // put the content of the source element into text node of the target element
        divlinks.innerHTML = container.innerHTML;
		
        // Was müssen Sie tun, um das Erneute flippen mit Leertext zu verhindern?
                container.innerHTML = "";
                }

}

/*
        makeAlerts puts alerts to several elements
*/
function makeAlerts(){
// put event listener for each selected tag
       var myp = document.querySelectorAll("#a2 p");
       for(var i=0; i < myp.length; i++){//loop for the length of the myp array
       myp[i].addEventListener("click",showNewAlert);//add a listener for every object in the arry
   }
}


/*
 showNewAlert() evokes the alert
 */
function showNewAlert(){
		// An alert should be displayed with the text of the paragraph that evoked the function.
        // Use "this" to refer to the actual object
        alert(this.innerHTML);




}

/*
        switchME switches the text of two boxes
*/
function switchMe(){
         var leftSw =  document.getElementById("links");
         var middleSw = document.getElementById("mitte");
         var hilfeSw = leftSw.innerHTML;
		
         leftSw.innerHTML = middleSw.innerHTML;
         middleSw.innerHTML = hilfeSw;
}

/*
        changeColor changes the color of the colored
        boxes depending on the selection of the respective select box.
*/
function changeColor(){
        // Variable idName stores the ID of the elements that invoked this function
        var idName = this.id;
        var left_color = document.getElementById("links");
        var middle_color = document.getElementById("mitte");
        var right_color = document.getElementById("rechts");


		// Use if else statement to distinguish which select box has been used.
        // For each case: select the html element that correspond to the used select box.
        // For this element set a new attribute class with the name that corresponds to the selected value.
        // Have a look to the css to know which class will help you.
        switch (idName) {
                case "colorLeft":
                left_color.style.backgroundColor = this.value; // value speichert in formular eingetragenen Wert
                break;                                         //Variable ausgeschrieben fuer Zuweisung: colorLeft.red

                case "colorMiddle":
                middle_color.style.backgroundColor = this.value;
                break;

                case "colorRight":
                right_color.style.backgroundColor = this.value;
                break;
        }

        // Console log if needed.

        console.log("value: " + this.value + ", id: " + this.id);
}

/*
        createText concatenates text from the input fields
*/
function createText(){
		//variablen erhalten Werte aus Eingabeboxen
         var input_name = document.getElementById("name");
         var input_number = document.getElementById("number");
         var input_thing = document.getElementById("thing");
         var output = document.getElementById("loesung");
         output.innerHTML = (input_name.value +" "+ input_number.value +" "+ input_thing.value);




}

/*
 insertToList fügt ein Listenelement hinzu
 */
function insertToList(){
    var create_li = document.createElement("LI");
    var create_word = document.createTextNode("Test");
    create_li.appendChild(create_word);
    document.getElementsByTagName("OL")[0].appendChild(create_li);


}

/*
 removeFromList löscht ein Listenelement
 */
function removeFromList(){
var list = document.getElementsByTagName("OL")[0], item = list.lastElementChild;
list.removeChild(item);


}

window.onload=addListenersFirst;
