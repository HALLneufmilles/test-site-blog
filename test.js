fileInputs.forEach((input, index) => {
  input.addEventListener("change", function () {
    if (this.files.length > 0) {
      const file = this.files[0];

      if (!file.type.includes("image")) {
        alert("Veuillez sélectionner une image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      // Envoyer l'image au serveur
      fetch("/blog/upload-illustration", {
        method: "POST",
        body: formData
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const imageUrl = data.imageUrl;
            const fullUrl = `${window.location.origin}${imageUrl}`;
            illustrationImageUrls[index] = fullUrl;
            // Mettre l’image en fond d’arrière-plan
            uploadContainers[index].style.backgroundImage = `url("${fullUrl}")`;

            deleteButtons[index].style.display = "block";
            deleteButtons[index].hidden = false;
            previewDiv.style.backgroundImage = `url("${fullUrl}")`;

            // Afficher le lien de l'image pour l'ajout dans l'éditeur Markdown
            // displayLinkImages(index, imageUrl);
          } else {
            alert("Erreur lors de l'upload de l'image.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de l'upload :", error);
        });
    }
  });

  // Supprimer l’image
  deleteButtons[index].addEventListener("click", function (event) {
    event.preventDefault();

    // Supprimer du DOM
    uploadContainers[index].style.backgroundImage = "";
    fileInputs[index].value = "";
    deleteButtons[index].style.display = "none";
    deleteButtons[index].hidden = true;

    // Supprimer l'image du dossier uploads via route
    const imageToDelete = illustrationImageUrls[index];
    if (imageToDelete) {
      fetch("/blog/delete-illustration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ imageUrl: imageToDelete })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(`Image supprimée du serveur : ${imageToDelete}`);
          } else {
            console.error(
              "Erreur lors de la suppression de l'image :",
              data.message
            );
          }
        })
        .catch((err) => {
          console.error("Erreur lors de la suppression :", err);
        });

      // Nettoyer le tableau
      illustrationImageUrls[index] = null;
    }

    // Supprimer aussi l'affichage du lien
    document.querySelector(`#image-link-${index}`)?.remove();
  });
});
