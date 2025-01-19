const input = document.getElementById("search");  // Le champ de recherche
const produits = document.querySelectorAll(".produit");  // Tous les éléments produits

// Ajouter un événement 'input' au champ de recherche
input.addEventListener("input", function () {
    const query = input.value.toLowerCase();  // Récupérer la valeur du champ, en minuscule pour faciliter la comparaison

    produits.forEach(function(produit) {
        const productName = produit.getAttribute("data-name").toLowerCase();  // Récupérer le nom du produit dans l'attribut data-name

        // Vérifier si le nom du produit correspond à la recherche (partielle)
        if (productName.includes(query)) {
            produit.style.display = "block";  // Afficher l'élément si le nom correspond
        } else {
            produit.style.display = "none";  // Masquer l'élément sinon
        }
    });
});
