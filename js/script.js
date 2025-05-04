

function upDate(previewPic){
   document.getElementById('image').style.backgroundImage = "url('"+previewPic.src+"')";
   document.getElementById('image').innerHTML = previewPic.alt;
  
	}

function unDo(){
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
		
	}


var allImages = document.querySelectorAll("img");

for (var i = 0; i < allImages.length; i++) {
    allImages[i].setAttribute("tabindex", "0")


}