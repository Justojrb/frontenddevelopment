const addBtn = document.getElementById('addBtn');
const moveBtn = document.getElementById('moveBtn');
let box; // Variable para almacenar la caja creada

// Evento para crear y añadir la caja
addBtn.onclick = function () {
    // Crear div (la caja)
    box = document.createElement('div');
    box.style.width = '100px';
    box.style.height = '500px';
    box.style.background = 'black';
    box.style.marginTop = '15px';
    
    // Crear imagen dentro de la caja
    let img = document.createElement('img');
    img.src = 'imagesDom/retrato-hombre-africano-calvo-adulto-sindrome-down-fondo-forestal_404612-375.avif';
    img.style.width = '100%';
    img.style.height = '100%';
    
    // Añadir imagen a la caja y caja al body
    box.appendChild(img);
    document.body.appendChild(box);
};

// Evento para mover la caja
moveBtn.onclick = function () {
    if (box) {
        box.style.transition = 'margin-left 5s';
        box.style.marginLeft = '1000px';
    }
};
