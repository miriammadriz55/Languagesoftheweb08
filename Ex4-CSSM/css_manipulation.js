
/*Create a web page that have a paragraph with some dummy text. Near the paragraph have text fields to accept
the following values:
Border:
• red value
• green value
• blue value
• width
Background color:
• red value
• green value
• blue value
• width
Finally, have a button that, when clicked, changes the border and background color to be as specified. You can
use either the rgb() method or a color code, but you should tell the user what units they are in (00-FF or 0-255).
*/

function cssmanipulation() {

  //Border Manipulation
  //red value
  let redBorder = document.getElementById("redBorder").value;
  //green
  let greenBorder = document.getElementById("greenBorder").value;
  //blue
  let blueBorder = document.getElementById("blueBorder").value;
  //width
  let widthBorder = document.getElementById("widthBorder").value;

  //Background Color Manipulation
  //red
  let redBackground = document.getElementById("redBackground").value;
  //green
  let greenBackground = document.getElementById("greenBackground").value;
  //blue
  let blueBackground = document.getElementById("blueBackground").value;
  //declaration
  let manipulate = document.getElementById("manipulation");
  //manipulate controls
  manipulate.style.borderColor = 'rgb(' + redBorder + ',' + greenBorder + ',' + blueBorder + ')';
  manipulate.style.borderWidth = widthBorder + "px";
  manipulate.style.backgroundColor = 'rgb(' + redBackground + ',' + greenBackground + ',' + blueBackground + ')';
}
