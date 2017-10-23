function izabran(obj)
{
	switch(obj.value)
	{
		case "6":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="BOAR'S HAIR BRUSH / $27.99";
			break;
		case "7":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="BEARDBRAND POCKET BEARD COMB / $10.00";
			break;
		case "8":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="TREE RANGER BEARD WASH / $27.00";
			break;
		case "9":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="TREE RANGER BEARD WASH / $25.00";
			break;
		case "10":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="BEARD TRIMMING SCISSORS / $49.99";
			break;
		case "11":
			document.getElementById("ProductPreview").style.display="block";
			document.getElementById("OrderForm").style.display="block";
			document.getElementById("ProductPicture").src="shop/slika"+obj.value+".jpg";
			document.getElementById("ProductPrice").innerHTML="TREE RANGER BEARD SOFTENER / $27.00";
			break;
	}
}
function naruci()
{
	document.getElementById("ProductPreview").style.display="block";
	document.getElementById("OrderForm").style.display="block";
	var komada = document.getElementById("tbBrojKomada");
	var email = document.getElementById("tbEmail");
	
	location="mailto:"+email+"?subject=Narudzbina&body=Komada:"+komada.value;
	
	document.getElementById("order").reset();
}