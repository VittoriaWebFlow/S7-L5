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
            row.innerHTML =  row.innerHTML + 
           
            ` 
            <div class=" col col-12 col-sm-6 col-md-3 mb-3">
  <div class="card mt-4 bg-black rounded-3 shadow-lg border-0 ms-3 " style="width: 90%;">
    <img src="${wine.imageUrl}" class="mb-5 card-img-top " alt="${wine.name}" style="height: 100%; object-fit: cover;">
    <div class="card-body d-flex flex-column ">
      <h5 class="card-title text-light mb-3">${wine.name}</h5>
      <p class="card-text fs-5 text-light mt-2">${wine.brand}</p>
      <p class="card-text text-light fs-4 flex-grow-1">${wine.price}€</p>
      <a href="details.html?id=${wine._id}" class="btn btn-dark rounded-5 d-flex justify-content-center mt-auto">Add to cart!</a>
       <button id="deleteButton" class="btn btn-dark rounded-5 d-flex justify-content-center  mt-2 " onclick="skipMe(event)">
                        Delete
                      </button>
    </div>
  </div>
</div>` 



        })
    })
    .catch((err) => {
        console.log("ERRORE NEL CARICAMENTO!", err)
    })
}

function skipMe(event) {
    event.preventDefault();
    const card = event.target.closest('.col');
    if (card) {
        card.classList.add('d-none');
    }
}

prodotti()



