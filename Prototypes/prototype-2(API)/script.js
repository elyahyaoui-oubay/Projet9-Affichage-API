fetch('https://api.openweathermap.org/data/2.5/weather?q=Tanger&appid=ebdd3afbe6fc4bef8cf83fe6f9b3da89')




.then (function(reponse){
    return reponse.json()
})

.then(function(data){
    console.log(data)
})