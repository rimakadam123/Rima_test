

// var today = new Date();
// console.log(today);
console.log(new Date());

function check(form)
 {

 if(form.userid.value && form.email.value)
  {
    var content = document.getElementById("userid").value;
        alert("Welcome" + " " + content);
		clearInputs();
		losefocus();

   }
   else
   {
    alert("Error Email or Username");
    }

function clearInputs() {
    document.getElementById("userid").value = "";
    document.getElementById("email").value = "";
    }
	
	function losefocus() {
    document.getElementById("submit").blur();
}
	
}