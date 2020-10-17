//create map
const map = L.map('mapid').setView([-22.471674,-44.4560387], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    
})

let marker;
//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
// remove icon
    marker && map.removeLayer(marker)
// add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// add photo field
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new.images
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // limpar o campo antes de adicionar imagens 

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}
    

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return 
    }

    span.parentNode.remove()
}
 
// select yes or no
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))


    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}
function validate(event) {
    const needsLatAndLng = true
    if(needsLatAndLng) {
        event.preventDefalt()
        alert('Marque o local no mapa')
    }
    
}
