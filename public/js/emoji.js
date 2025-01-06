// import "emoji-picker-element";

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("textarea-body");
  const emojiPicker = document.getElementById("emoji-picker");
  if (!emojiPicker || !textarea) {
    return; // Arrête le script si les éléments ne sont pas trouvés
  }
  // Vérifier si l'élément existe
  emojiPicker.addEventListener("emoji-click", (event) => {
    const emoji = event.detail.unicode;
    textarea.value += emoji;
  });
});
