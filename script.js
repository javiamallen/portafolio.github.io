// Este código maneja la validación de formularios y la inyección dinámica de contenido.

// --- 1. DATOS (Contenido de Wikipedia para Randomización) ---
const wikipediaQuotes = [
    "Prompt engineering is the process of structuring an instruction that can be interpreted and understood by a generative AI model.",
    "A prompt is natural language text describing the task that an AI should perform.",
    "Prompt engineering may involve phrasing a query, specifying a style, providing relevant context or assigning a role to the AI such as 'Act as a native French speaker'.",
    "A prompt may include a few examples for a model to learn from, such as asking the model to complete 'maison → house, chat → cat, chien →' (few-shot learning).",
    "A prompt for a text-to-text language model can be a query such as 'what is Fermat’s little theorem?' or a command such as 'write a poem about leaves falling'."
];

// --- 2. FUNCIÓN DE MANIPULACIÓN DEL DOM ---
function loadRandomQuote() {
    const quoteContainer = document.getElementById('wiki-quote-container');
    if (quoteContainer) {
        // Selecciona una cita al azar
        const randomIndex = Math.floor(Math.random() * wikipediaQuotes.length);
        const randomQuote = wikipediaQuotes[randomIndex];

        // Inyecta el contenido con el componente Bootstrap Card
        quoteContainer.innerHTML = `
            <div class="card wiki-card text-center border-primary">
                <div class="card-body">
                    <p class="card-text">${randomQuote}</p>
                </div>
                <div class="card-footer text-muted">
                    <a href="https://en.wikipedia.org/wiki/Prompt_engineering" target="_blank" style="color: inherit; text-decoration: none; font-size: 0.9rem;">
                        — Original Challenge Source (Wikipedia)
                    </a>
                </div>
            </div>
        `;
    }
}

// --- 3. INICIALIZACIÓN (Activa la validación de Bootstrap y la cita) ---
document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Carga la cita al azar al iniciar
    loadRandomQuote();
    
    // 2. Activa la validación de Bootstrap
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        });
});


// Mensajes de consola originales
console.log("Javiam Allen's custom script (script.js) is loaded.");
console.log("Bootstrap 5 JS is active.");