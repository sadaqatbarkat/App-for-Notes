 var paraparent = document.querySelector(".paraparent")


function create() {

	paraparent.innerHTML += ` <p contenteditable="true" class="input-box">  </p> `;
	paraparent.innerHTML += ` <button class = delete  onclick = del(this)> Delete </button>`

 
}



function del(element){
	element.previousElementSibling.remove()
	element.remove()
}


let getText =  localStorage.getItem("getData")
	












