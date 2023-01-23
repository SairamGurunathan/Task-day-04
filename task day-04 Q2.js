var country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload = function(){
    var result = JSON.parse(country.response);
    for(var i in result){
        
        console.log(result[i].flags);    
}