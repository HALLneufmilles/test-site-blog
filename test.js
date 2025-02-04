import { renderMarkdown } from "./server/helpers/markdownRenderer.js";

// Votre Markdown
const markdown = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

`;

// Convertir en HTML
const html = renderMarkdown(markdown);

// Afficher le HTML généré
console.log(html);
