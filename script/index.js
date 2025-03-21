const getYear = function () {
    const footerSpan = document.getElementById('year')
    footerSpan.innerText = new Date().getFullYear()
  }
  
  getYear()

  const prodotti = function(){
    const productsURL = "https://striveschool-api.herokuapp.com/api/product/"
       
    fetch(productsURL, {
        headers:{          
            authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMzRkNjM4MzRiZjAwMTUwMDA3MGYiLCJpYXQiOjE3NDI1NTMwNjYsImV4cCI6MTc0Mzc2MjY2Nn0.j1AyRAWQfcrZs8KcwlqXjSrLrUg4JLMHAzZg_0QF6vY",
        }
  })
    
    
    .then((response) => {
        console.log('RESPONSE', response)
        if(response.ok){
            return response.json()
        } else {
            throw new Error ("c'è un errore!")
        }
    })

    .then((data) => {
        console.log('DATI RICEVUTI!')

        const row = document.getElementById('cards-row')
        data.forEach((wine) => {
            row.innerHTML =
            row.innerHTML + 
            ` 
            <div class= col col-12 col-lg-3 col-md-4 col-sm-6>
            <div class="card " >
  <img src="https://www.cambusawine.com/wp-content/uploads/2016/07/20160703_103039-1.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Wines.name}</h5>
    <p class="card-text">${Wines.description}</p>
     <p class="card-text">${Wines.brand} - ${Wines.price}€</p>
    
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>` 
        })
    })
    .catch((err) => {
        console.log("ERRORE NEL CARICAMENTO!", err)
    })
}

prodotti()