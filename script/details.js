const getYear = function () {
    const footerSpan = document.getElementById('year')
    footerSpan.innerText = new Date().getFullYear()
  }
  
  getYear()

  function skipMe(event) {
    event.preventDefault();
    const card = event.target.closest('.col');
    if (card) {
        card.classList.add('d-none');
    }
}


// RECUPERO IL PARAMETRO "ID" CHE HO COLLEGATO IN INDEX NEL BOTTONE ADD TO CART!
const URLsearch = new URLSearchParams(location.search) 
// ORA RITORNA UNA BARRA URL CON ID 
const wineId = URLsearch.get('id')

 const productsURL = "https://striveschool-api.herokuapp.com/api/product/"


const WineDetails = function(){

 
  fetch(productsURL + '/' + wineId)

 .then((response) => {
  console.log('PuOI CONTINUARE NELLO SHOP!', response)
  if(response.ok){
return response.json()
  } else {
    throw new Error ("non carica!")
  }
 })

 .then((data) => {
  console.log(data)
 
  const title  = document.getElementById('title')
  const testo  = document.getElementById('testo')
 

  title.innerText = data.title
  testo.innerText = data.testo
 })
 .catch((err) => {
  console.log('ERRORE NEL CARICAMENTO!', err)
 })
}
WineDetails()
