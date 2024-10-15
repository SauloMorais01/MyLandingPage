(function(){
    emailjs.init({
        publicKey: "n6IFwmcaHLgoaJSH0",
    });
})();


/**
 * @param {HTMLElement} root 
 * @param {string} mensagem
 * @param {boolean} modalExit
 * @returns {HTMLElement}
 */
function modal(root, mensagem, modalExit) {
    const modalBox = document.createElement('div');
    const modaP = document.createElement('p');
    const modalButtonExit = document.createElement('button');
    modalButtonExit.className = 'btn-exit'
    modalBox.className = 'modal-box'
    
    modalButtonExit.innerHTML = '<strong>X</strong>'

    modaP.innerHTML = mensagem;

    if(modalButtonExit.onclick && modalExit == false) 
    {
        modalExit = true;
        return
    }

    if(modalExit = false) {
        modalBox.appendChild(modaP);
        root.appendChild(modalBox);
    }
}