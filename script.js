  // Captura o evento de submit do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Chama a função para enviar a mensagem
    sendMessage();
});

// Função para enviar mensagem pelo WhatsApp
function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = '5535988872015'; // Número do Juninho
    const whatsappMessage = encodeURIComponent(`Olá, meu nome é ${name}. Mensagem: ${message}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Abre a URL do WhatsApp
    window.open(whatsappURL, '_blank');
}

let images = [
    "img/galery/1.jpg",
    "img/galery/2.jpg",
    "img/galery/3.jpg",
    "img/galery/4.jpg",
    "img/galery/5.jpg",
    "img/galery/6.jpg",
    "img/galery/7.jpg",
    "img/galery/8.jpg",
    "img/galery/9.jpg"
];
let currentIndex = -1;

function openModal(image) {
    const modalImage = document.getElementById("modalImage");
    currentIndex = images.indexOf(image.src);
    modalImage.src = image.src;
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentIndex];
}
