// import Component from "../../../__JF__/Component";
import html from "./index.html";
import css from './index.css';

const template = document.createElement("template");
template.innerHTML = html+css;

class Cat extends HTMLElement{

    // بنظر میرسد بوسیله ادامه همان روش های قبلی میتوان 
    //  از آلپاین جی اس و همچنین وب کامپوننت با همان 
    // روش قبلی پیش رفت و هر بار یک فیچر ساده به آن اضافه نمود
    user = {
        first_name: '4',
        last_name: '5',
        username: '6'
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.render();
    }

    static get observedAttributes() {
        return [];
    }

    handleSubmit() {
        this.user.first_name = this.shadowRoot.getElementById('first-name').value;
        this.user.last_name = this.shadowRoot.getElementById('last-name').value;
        this.user.username = this.shadowRoot.getElementById('username').value;
        console.log(this.user);
    }

    connectedCallback() {
        this.shadowRoot.getElementById('login')
        .addEventListener('click', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
      
    disconnectedCallback() {}
    
    attributeChangedCallback(name, oldValue, newValue) {}
    
    adoptedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <title>JF</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <script defer="defer" src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"></script>
            </head>
            <body>
                <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
                <div class="container">
                    <h1>Login Form</h1>
                    <form>
                        <div class="row">
                            <div class="offset-md-4 col-md-4">
                                <div class="form-group">
                                    <input name="first_name" class="form-control" id="first-name" value="${this.user.first_name}" />
                                    <input name="last_name" class="form-control" id="last-name" value="${this.user.last_name}" />
                                    <input name="username" class="form-control" id="username" value="${this.user.username}" />
                                </div>
                                <button id="login" type="submit" class="btn btn-success">Click</button>
                            </div>
                        </div>
                    </form>
                </div>
            </body>
        </html>
        `
    }
}

export default Cat;