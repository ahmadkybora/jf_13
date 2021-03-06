class Component extends HTMLElement {
    bootsrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`;

    constructor(props) {
        super();
        this.props = props;
        this.attachShadow({ mode: "open" });
        // // شما میتوانید استایهایتان را بچسبانید
        // // تا هر بار نیاز به افزودن نباشد
        // const linkElem = document.createElement('link');
        // linkElem.setAttribute('rel', 'stylesheet');
        // linkElem.setAttribute('href', 'style.css');

        // // Attach the created element to the shadow dom
        // shadow.appendChild(linkElem);
    }

    connectedCallback = () => {}

    adoptedCallback = () => {}

    attributeChangedCallback = (name, oldVal, newVal) => {}

    observedAttributes = () => {}

    // پارامتر اول برای نام کامپوننت
    // و پارامتر دوم برای کلاس مورد نظر میباشد
    static create = (name, component) => {
        window.customElements.define(name, component);
    }

}

export default Component;

// بوسیله روش زیر میتوانید
// کامپوننت خود را اینطور تعریف کنید
// customElements.define('expanding-list', ExpandingList, { extends: "ul" });
// <ul is="expanding-list">

// ...

// </ul>