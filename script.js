const encriptarReemplazos = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptarReemplazos = Object.fromEntries(
    Object.entries(encriptarReemplazos).map(([key, value]) => [value, key])
);

function encryptText() {
    const text = document.getElementById('text').value.trim();
    const result = document.getElementById('result');

    if (text === '') {
        // Si el área de texto está vacía, muestra el mensaje predeterminado en el área de resultado
        result.value = 'Ningún mensaje fue encontrado';
        document.getElementById('text').setAttribute('placeholder', 'Ingrese el texto aquí...');
    } else {
        let encrypted = text;
        for (const [key, value] of Object.entries(encriptarReemplazos)) {
            const regex = new RegExp(key, 'g');
            encrypted = encrypted.replace(regex, value);
        }
        result.value = encrypted; // Muestra el texto encriptado en el área de resultado
    }
}

function decryptText() {
    const text = document.getElementById('text').value.trim();
    const result = document.getElementById('result');

    if (text === '') {
        result.value = 'Ningún mensaje fue encontrado';
        document.getElementById('text').setAttribute('placeholder', 'Ingrese el texto aquí...');
    } else {
        let decrypted = text;
        for (const [key, value] of Object.entries(desencriptarReemplazos)) {
            const regex = new RegExp(key, 'g');
            decrypted = decrypted.replace(regex, value);
        }
        result.value = decrypted; // Muestra el texto desencriptado en el área de resultado
    
    }
}

function validarTexto() {
    const inputTexto = document.getElementById('text');
    const mensajeError = document.getElementById('mensajeError');
    const valor = inputTexto.value;

    const regex = /^[a-z\s]*$/;

    if (!regex.test(valor)) {
        mensajeError.textContent = "Solo se permiten letras minúsculas sin acentos y espacios.";
    } else {
        mensajeError.textContent = "";
    }
}


document.getElementById('text').addEventListener('input', function() {
    validarTexto();
   
    const result = document.getElementById('result');
    if (this.value.trim() === '') {
        result.value = 'Ningún mensaje fue encontrado';
        this.setAttribute('placeholder', 'Ingrese el texto aquí...');
    } else {
        this.setAttribute('placeholder', '');
    }
});

function limpiar(){
    const text = document.getElementById('text');
    const result = document.getElementById('result');

    text.value= '';
    document.getElementById('text').setAttribute('placeholder', 'Ingrese el texto aquí...');
    result.value= '';
    
}
