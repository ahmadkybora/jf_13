class Component extends HTMLElement {
    alpine = `<script defer="defer" src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"></script>`;
    bootsrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // // شما میتوانید استایهایتان را بچسبانید
        // // تا هر بار نیاز به افزودن نباشد
        // const linkElem = document.createElement('link');
        // linkElem.setAttribute('rel', 'stylesheet');
        // linkElem.setAttribute('href', 'style.css');

        // // Attach the created element to the shadow dom
        // shadow.appendChild(linkElem);
    }

    // پارامتر اول برای نام کامپوننت
    // و پارامتر دوم برای کلاس مورد نظر میباشد
    static create = (name, component) => {
        window.customElements.define(name, component);
    }
}

export default Component;