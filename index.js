class App {
    constructor() {
        this.rootElement = document.querySelector('#root');
        this.buttonsContainer = document.querySelector('#root .buttons-container');

        // Button
        this.openModalButton = document.querySelector('#root .open-modal-button');
        this.closeModalButton = document.querySelector('#root .close-modal-button');

        // Modal
        this.modal = document.querySelector('#root .modal');
        this.modalTitle = document.querySelector('#root .modal .title');
        this.modalBody = document.querySelector('#root .modal .body');
        this.modalImage = document.querySelector('#root .modal .image');

        this.registerEvents();
        this.initButtons();
    }

    registerEvents() {
        // this.openModalButton.addEventListener('click', () => {
        //     this.openModal();
        // });

        this.modal.addEventListener('click', () => {
            console.log('dblclick')
            this.closeModal();
        });
    }

    initButtons() {
        Object.keys(data.buttons).forEach(key => {
            const {buttonText, background, modalTitle, modalBody} = data.buttons[key];

            const buttonTitleElement = document.createElement('div');
            buttonTitleElement.classList.add('button-title');
            const buttonTextComposed = buttonText.split('+').join('</br>');
            buttonTitleElement.innerHTML = buttonTextComposed;

            const buttonElement = document.createElement('div');
            buttonElement.classList.add('button');
            buttonElement.style.backgroundImage = `url(${background})`;
            buttonElement.appendChild(buttonTitleElement);

            const modalBodyComposed = modalBody.split('+').join('</br></br>');

            buttonElement.addEventListener('click', () => {
                this.setModalContent(modalTitle, modalBodyComposed, background);
                this.openModal();
            });

            this.buttonsContainer.appendChild(buttonElement);
        })
    }

    preventDefault(e) {
        e.preventDefault();
    }

    openModal() {
        this.modal.classList.add('visible');
        this.buttonsContainer.classList.remove('visible');

        // window.addEventListener('scroll', (e) => window.scrollTo(0, window.scrollY));
        // window.addEventListener('touchmove', this.preventDefault, false);
        // window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    }

    closeModal() {
        this.modal.classList.remove('visible');
        this.buttonsContainer.classList.add('visible');
    }

    setModalContent(title, body, image) {
        const composedModalTitle = title.split('+').join('</br>');

        this.modalTitle.innerHTML = composedModalTitle;
        this.modalBody.innerHTML = body;
        this.modalImage.style.backgroundImage = `url(${image})`;
    }
}

const app = new App();
