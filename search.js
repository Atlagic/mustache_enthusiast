function Search(){
	 if(window.XMLHttpRequest){
	 	xmlhttp=new XMLHttpRequest();

	 }
	 else
	 {
	 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 }
	 xmlhttp.open("GET","search.xml",false);
	 xmlhttp.send();
	 xmlDoc=xmlhttp.responseXML;
	 dohvatiPodatke3(xmlDoc);	
}



function dohvatiPodatke3(data){
	
	var S = "";
	var search = $("#field").val();

	

	
		$(data).find("product").each(function(){
			var type = $(this).find("type").text();
			var price = $(this).find("price").text();
			var description = $(this).find("descripton").text();
			
				if(type == search){
						S += "<p style='background-color:#1c1c1c; color:#fff; font-size:20px; border:1px solid #000; text-align:center;'>Ime: "+type+",</br>Cena: "+price+",</br>Stil: "+description+",</br>";

						
				}		

					
				
		});
	if(S==""){ S="<span style='font-size:30px'>Ne postoji rezultat za ovu pretragu</span>";}
	else{
		document.getElementById("result").innerHTML="<p style='font-size:25px;text-style:bold;text-align:center;color:#fff'>Rezultat pretrage za "+search+"'</p>"+S;
		document.getElementById("result").style.display = 'block';		
	}
}

		