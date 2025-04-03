document.addEventListener("DOMContentLoaded", function () {
  // Vérifie si l'image temporaire existe dans sessionStorage
  const tempBannerImage = sessionStorage.getItem("tempBannerImage");
  const imgBanner = document.getElementById("img-banner");

  if (tempBannerImage) {
    // Met à jour img#img-banner dans preview-post.ejs
    if (imgBanner) {
      imgBanner.src = tempBannerImage;
      console.log("imgBanner.src :", imgBanner.src);
    }

    // Met à jour img#img-card dans preview-post.ejs
    const imgCard = document.getElementById("img-card");
    if (imgCard) {
      imgCard.src = tempBannerImage;
      console.log("imgCard.src :", imgCard.src);
    }
  }
});
