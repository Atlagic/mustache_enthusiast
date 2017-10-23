function log_in(){
	
	var Email = document.getElementById("tbEmail").value;
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email.test(Email))
	{
		document.getElementById('tbEmail').style.border="1px solid #ff0000";
		greske.push("Enter valid email.");
	}
	else
	{
		document.getElementById('tbEmail').style.border="1px solid #333";
	}
	
	var Password = document.getElementById('tbPassword').value;
	var rePassword = /^[a-zA-Z]\w{3,14}$/;
	if (!rePassword.test(Password))
	{
		document.getElementById('tbPassword').style.border="1px solid #ff0000";
		greske.push("Password length [0-9] characters.");
	}
	else
	{
		document.getElementById('tbPassword').style.border="1px solid #333";
	}
	
	if(greske.length > 0)
	{

		var greskeLista = "";
		for(var i = 0; i < greske.length; i++)
		{
			greskeLista += greske[i] + '\n';
		}
		alert(greskeLista);
        
	}
	else
	{
		alert("Thanks for registration!");
	}
}



