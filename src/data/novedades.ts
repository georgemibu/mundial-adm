/**
 * Datos editables de las secciones "Novedades" y "Universidades".
 *
 * Para actualizar el contenido:
 * - Editá los textos y las rutas de imagen de los objetos existentes.
 * - Para sumar una novedad o universidad, copiá un objeto completo y agregá
 *   una coma entre objetos. No modifiques los componentes ni sus estilos.
 * - Las imágenes deben estar dentro de `public/`; escribí la ruta empezando
 *   con `/`, por ejemplo: `/novedades1.png`.
 * - `contenido` contiene párrafos de texto plano, uno por elemento. No agregues
 *   etiquetas HTML. Para separar líneas en `nombre` de una universidad, usá
 *   `\n` dentro del texto.
 *
 * En desarrollo, los cambios se reflejan al guardar. En el sitio publicado,
 * aparecerán cuando se genere y despliegue una nueva versión. Si hay un error
 * de sintaxis o falta un dato obligatorio, la compilación lo señalará.
 */

export const textosNovedades = {
    titulo: "Novedades",
    tituloUniversidades: "¿Querés saber si tu Universidad está participando?",
    etiquetaLeerCompleto: "Leer completo",
};

export const novedades = [
    {
        imagen: "/novedades1.png",
        titulo: "Bienvenida a la Academia",
        resumen:
            "Te damos la bienvenida a la Academia. En esta sección encontrarás el programa de cada uno de los módulos...",
        contenido: [
            "Te damos la bienvenida a la Academia. En este espacio podrás encontrar toda la información relacionada con los módulos y actividades.",
            "El programa está compuesto por diferentes encuentros destinados a brindar herramientas para la formación profesional.",
        ],
    },
    {
        imagen: "/novedades1.png",
        titulo: "Bienvenida a la Academia",
        resumen:
            "Te damos la bienvenida a la Academia. En esta sección encontrarás el programa de cada uno de los módulos...",
        contenido: [
            "Te damos la bienvenida a la Academia. En este espacio podrás encontrar toda la información relacionada con los módulos y actividades.",
            "El programa está compuesto por diferentes encuentros destinados a brindar herramientas para la formación profesional.",
        ],
    },
    {
        imagen: "/novedades1.png",
        titulo: "Bienvenida a la Academia",
        resumen:
            "Te damos la bienvenida a la Academia. En esta sección encontrarás el programa de cada uno de los módulos...",
        contenido: [
            "Te damos la bienvenida a la Academia. En este espacio podrás encontrar toda la información relacionada con los módulos y actividades.",
            "El programa está compuesto por diferentes encuentros destinados a brindar herramientas para la formación profesional.",
        ],
    },
    {
        imagen: "/novedades1.png",
        titulo: "Bienvenida a la Academia",
        resumen:
            "Te damos la bienvenida a la Academia. En esta sección encontrarás el programa de cada uno de los módulos...",
        contenido: [
            "Te damos la bienvenida a la Academia. En este espacio podrás encontrar toda la información relacionada con los módulos y actividades.",
            "El programa está compuesto por diferentes encuentros destinados a brindar herramientas para la formación profesional.",
        ],
    },
];

export const universidades = [
    {
        imagen: "/Universidad1.png",
        nombre: "Universidad\nChampagnat",
        textoAlternativo: "Logo de la Universidad Champagnat",
    },
    {
        imagen: "/Universidad2.png",
        nombre: "UNCuyo",
        textoAlternativo: "Logo de UNCuyo",
    },
    {
        imagen: "/Universidad3.png",
        nombre: "Universidad\nUniversitario\nde Ciencias\nEmpresariales",
        textoAlternativo:
            "Logo de la Universidad Universitario de Ciencias Empresariales",
    },
    {
        imagen: "/Universidad4.png",
        nombre: "Universidad\ndel\nAconcagua",
        textoAlternativo: "Logo de la Universidad del Aconcagua",
    },
    {
        imagen: "/Universidad5.png",
        nombre: "Universidad\nJuan Agustín\nMaza",
        textoAlternativo: "Logo de la Universidad Juan Agustín Maza",
    },
    {
        imagen: "/Universidad6.png",
        nombre: "Universidad\nSiglo 21",
        textoAlternativo: "Logo de la Universidad Siglo 21",
    },
    {
        imagen: "/Universidad7.png",
        nombre: "Universidad\nCatólica\nSantiago del\nEstero",
        textoAlternativo: "Logo de la Universidad Católica Santiago del Estero",
    },
    {
        imagen: "/Universidad8.png",
        nombre: "Instituto\nTecnológico\nUniversitario",
        textoAlternativo: "Logo del Instituto Tecnológico Universitario",
    },
    {
        imagen: "/Universidad8.png",
        nombre: "Instituto\nTecnológico\nUniversitario",
        textoAlternativo: "Logo del Instituto Tecnológico Universitario",
    },
        {
        imagen: "/Universidad8.png",
        nombre: "Instituto\nTecnológico\nUniversitario",
        textoAlternativo: "Logo del Instituto Tecnológico Universitario",
    },
];
