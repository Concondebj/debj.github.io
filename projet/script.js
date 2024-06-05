document.addEventListener("DOMContentLoaded", function() {
    function loadPage(page) {
        console.log(`Loading page: ${page}`);
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                console.log(`Page loaded successfully: ${page}`);
                document.getElementById('content').innerHTML = data;
                setupShoeInteractions();
            })
            .catch(error => {
                console.error('Error loading page:', error);
                document.getElementById('content').innerHTML = '<p>Erreur de chargement de la page.</p>';
            });
    }

    function setupShoeInteractions() {
        const shoeElements = document.querySelectorAll('.shoe-item');
        shoeElements.forEach(shoe => {
            shoe.addEventListener('click', function() {
                const color = this.dataset.color;
                document.body.style.backgroundColor = color;
            });


            // Centrer le nom du produit sous l'image
            const productName = shoe.querySelector('.product-name');
            const imageWidth = shoe.querySelector('.shoe-image').clientWidth;
            const productNameWidth = productName.clientWidth;
            productName.style.marginLeft = `${(imageWidth - productNameWidth) / 2}px`;
        });
    }

    // Rendre la fonction loadPage accessible globalement
    window.loadPage = loadPage;

    // Chargement initial de la page d'accueil
    loadPage('pages/page1.html');
});
