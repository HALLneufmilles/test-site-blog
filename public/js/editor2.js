document.addEventListener("DOMContentLoaded", () => {
  const bannerDiv = document.querySelector("#banner-edit");
  const bannerUpload = document.querySelector("#banner-upload");
  const savedImage = sessionStorage.getItem("tempBannerImage");
  console.log("Current tempBannerImage in sessionStorage:", savedImage);
  const currentUrl = window.location.pathname;
  console.log("currentUrl:", currentUrl);

  const fileInputs = [...document.querySelectorAll(".fileupload")];
  const uploadLabels = [...document.querySelectorAll(".upload-image")];
  const deleteButtons = [...document.querySelectorAll(".delete-image")];
  const previewDiv = document.querySelector(".product-image");
  const illustrationImageUrls = [];

  // Fonction pour restaurer une image sauvegardée
  const restoreSavedImage = () => {
    if (savedImage) {
      if (bannerDiv) {
        console.log("Restoring saved image in Base64:", savedImage);
        bannerDiv.style.backgroundImage = url("${savedImage}");
      }
    } else {
      console.log("No image found in sessionStorage to restore.");
    }
  };

  // Appeler la fonction de restauration au chargement
  restoreSavedImage();

  const restoreIllustrationImages = () => {
    const savedImages = JSON.parse(sessionStorage.getItem("tempImages")) || [];

    savedImages.forEach((imageUrl, index) => {
      if (imageUrl && uploadLabels[index]) {
        uploadLabels[index].style.backgroundImage = `url("${imageUrl}")`;
        uploadLabels[index].classList.add("active");

        if (deleteButtons[index]) {
          deleteButtons[index].style.display = "block";
          deleteButtons[index].hidden = false;
        }

        // Affiche la première image par défaut dans .product-image
        if (index === 0 && previewDiv) {
          previewDiv.style.backgroundImage = `url("${imageUrl}")`;
        }

        // Mets à jour le tableau local pour permettre les suppressions correctes
        illustrationImageUrls[index] = imageUrl;
      }
    });
  };
  restoreIllustrationImages(); // 🖼 images d’illustration

  // Écouteur pour la mise à jour de l'image
  if (bannerUpload) {
    bannerUpload.addEventListener("change", () => {
      const [file] = bannerUpload.files;
      if (file && file.type.includes("image")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const base64Image = e.target.result;

          // Supprimer l'ancien tempBannerImage si existant
          const previousImage = sessionStorage.getItem("tempBannerImage");
          if (previousImage) {
            console.log("Removing previous image:", previousImage);
            sessionStorage.removeItem("tempBannerImage");
          }

          // Stocker l'image en Base64 dans sessionStorage
          sessionStorage.setItem("tempBannerImage", base64Image);
          console.log("New image saved in Base64:", base64Image);

          // Mettre à jour l'image de la bannière
          if (bannerDiv) {
            bannerDiv.style.backgroundImage = url("${base64Image}");
          }
        };
        reader.readAsDataURL(file); // Convertir le fichier en Base64
      }
    });
  }

  // Gestionnaire de soumission pour éviter de nettoyer sessionStorage lors de la prévisualisation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      const previewButton = document.querySelector(".btn-preview");
      if (event.submitter === previewButton) {
        // ✅ Marque qu’on va faire un aperçu pour utilisation dans 'window.addEventListener("beforeunload"...'

        console.log(
          "Preview button clicked, sessionStorage n'est pas nétoyé..."
        );
        return; // Ne pas nettoyer sessionStorage
      }

      console.log("Form submitted, clearing sessionStorage...");
      sessionStorage.removeItem("tempBannerImage");
    });
  }

  // Fonction pour nettoyer sessionStorage et l'image de la bannière
  const cleanupBanner = () => {
    if (savedImage) {
      // Si une image est sauvegardée dans sessionStorage
      console.log(
        "Cleaning up sessionStorage as we're leaving the edit page..."
      );
      sessionStorage.removeItem("tempBannerImage");

      // Supprimer l'image de la bannière si elle existe
      if (bannerDiv) {
        console.log("Clearing banner image from the DOM.");
        bannerDiv.style.backgroundImage = ""; // Réinitialiser le fond
      }
    }
  };

  // Nettoyage au rafraîchissement de 'add-post.ejs'
  // if (currentUrl.includes("add-post") && savedImage) {
  //   console.log(
  //     "Cleaning up sessionStorage and banner image on page refresh..."
  //   );
  //   cleanupBanner();
  // }

  if (currentUrl.includes("dashboard")) {
    console.log(
      "Cleaning up sessionStorage and banner image on page refresh..."
    );
    cleanupBanner();
  }

  // Gestion des images d'illustration
  fileInputs.forEach((input, index) => {
    input.addEventListener("change", function () {
      const file = this.files[0];
      if (!file || !file.type.includes("image")) {
        alert("Veuillez sélectionner une image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      fetch("/blog/upload-illustration", {
        method: "POST",
        body: formData
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const fullUrl = `${window.location.origin}${data.imageUrl}`;
            illustrationImageUrls[index] = fullUrl;

            // 1️⃣ Ajouter le fond d'image dans le label
            uploadLabels[index].style.backgroundImage = url("${fullUrl}");
            deleteButtons[index].style.display = "block";
            deleteButtons[index].hidden = false;

            // 2️⃣ Ajouter la classe active et retirer des autres
            uploadLabels.map((label) => label.classList.remove("active"));
            uploadLabels[index].classList.add("active");

            // 3️⃣ Afficher l'image dans .product-image
            if (previewDiv) {
              previewDiv.style.backgroundImage = url("${fullUrl}");
            }
            // 4️⃣ Sauvegarde sessionStorage
            let savedList =
              JSON.parse(sessionStorage.getItem("tempImages")) || [];
            savedList.push(fullUrl);
            sessionStorage.setItem("tempImages", JSON.stringify(savedList));
          } else {
            alert("Erreur lors de l'upload.");
          }
        })
        .catch((error) => {
          console.error("Erreur d'upload :", error);
        });
    });

    deleteButtons[index].addEventListener("click", function (e) {
      e.preventDefault();

      // Supprimer visuellement
      uploadLabels[index].style.backgroundImage = "";
      fileInputs[index].value = "";
      deleteButtons[index].style.display = "none";
      deleteButtons[index].hidden = true;

      // Supprimer l'image du serveur
      const imageUrl = illustrationImageUrls[index];
      if (imageUrl) {
        fetch("/blog/delete-illustration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ imageUrl })
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              console.log(`Image supprimée du serveur : ${imageUrl}`);
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
      }

      // Réinitialiser la zone .product-image si c’était l'image active
      if (uploadLabels[index].classList.contains("active")) {
        previewDiv.style.backgroundImage = "";
      }

      // Nettoyage
      uploadLabels[index].classList.remove("active");
      illustrationImageUrls[index] = null;
    });

    uploadLabels[index].addEventListener("click", function (e) {
      const bgImage = this.style.backgroundImage;

      if (!bgImage || bgImage === "none") {
        // S'il n'y a pas d'image, on laisse le comportement natif s'exécuter
        return;
      }

      // Si ce label est déjà actif, empêcher l'ouverture de l’explorateur
      if (this.classList.contains("active")) {
        e.preventDefault(); //  Empêche l’ouverture
        return;
      }

      // Sinon : afficher l’image correspondante dans preview
      previewDiv.style.backgroundImage = bgImage;

      // Gérer les classes actives
      uploadLabels.forEach((label) => label.classList.remove("active"));
      this.classList.add("active");

      e.preventDefault(); // On empêche quand même l’ouverture de l’explorateur pour éviter de modifier cette image
    });
  });
});
