const getYear = function () {
    const footerSpan = document.getElementById('year')
    footerSpan.innerText = new Date().getFullYear()
  }
  
  getYear()
  
  class Wines {
      constructor(_name, _description, _brand, _imageUrl, _price){
          this.name = _name,
          this.description = _description,
          this.brand = _brand,
          this.imageUrl = _imageUrl,
          this.price = _price
        }
    }
    
    const form = document.getElementById('form' )
    form.addEventListener('submit', function (e){
        e.preventDefault()
        const nameInput = document.getElementById('name')
        const descriptionInput = document.getElementById('description')
        const brandInput = document.getElementById('brand')
        const imageUrlInput = document.getElementById('imageUrl')
        const priceInput = document.getElementById('price')
        
        
        
        const wines = new Wines (
            nameInput.value,
            descriptionInput.value,
            brandInput.value,
            imageUrlInput.value,
            priceInput.value
            
        )
        
        
        
        console.log('WINES', wines)
        
        
        const productsURL = "https://striveschool-api.herokuapp.com/api/product/"
        
    
    fetch(productsURL, {
        method: 'POST',
        body: JSON.stringify(wines),
        headers: {           
            authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMzRkNjM4MzRiZjAwMTUwMDA3MGYiLCJpYXQiOjE3NDI1NTMwNjYsImV4cCI6MTc0Mzc2MjY2Nn0.j1AyRAWQfcrZs8KcwlqXjSrLrUg4JLMHAzZg_0QF6vY",
            'Content-Type': 'application/json',
        }
    })

    .then((response) => {
        
        if(response.ok){
            
            alert("IL TUO ORDINE È COMPLETATO!")
            form.reset()
        } else {
            throw new Error ("c'è un errore!")
        }
    })
    .catch((err) => {
        console.log("ERRORE NEL CARICAMENTO!", err)
    })
}) 
         
