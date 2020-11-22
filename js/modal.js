let button = document.querySelector('.clickme');

window.addEventListener('click', function (ev){
        if (ev.target == button) {
            this.classList.remove("modal-container_hidden"); 
        }
    })
