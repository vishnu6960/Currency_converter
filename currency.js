var br = document.createElement("br")
function convert1(){
     var fromcurrency = document.getElementById("from").value
     var tocurrency = document.getElementById("to").value
     var oldamount = document.getElementById("amount").value

	 //'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from='+fromcurrency+'&to='+tocurrency+'&amount='+oldamount

     //var url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+fromcurrency+'&want='+tocurrency+'&amount='+oldamount;
     var url =  'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from='+fromcurrency+'&to='+tocurrency+'&amount='+oldamount
	 const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'f5adf660e9msh1aec9d97f216132p18a5e1jsnee41e6dd8e8f',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
  }; 

  fetch(url,options)
  .then(response => response.json())
  //.then(response => console.log(Object.values(response)[2].rate))
  //.then(response => console.log(Object.values(response)))
  .then(response=>document.getElementById("output").innerHTML=((oldamount*(Object.values(response)[2].rate)).toFixed(4)+' '+tocurrency))
  .then(response => document.getElementById("input").innerHTML= oldamount+' '+fromcurrency+' '+'=')
  }
