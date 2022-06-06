import Component from "../../../__JF__/Component";
import html from "./index.html";

class Users extends Component {
    user = {
        first_name: 'a',
        last_name: 'a',
        username: 'a'
    }

    state = true;
    constructor() {
        super();
        this.render();
    }

    // Login = (e) => {
    //     this.user.first_name = this.shadowRoot.getElementById('first-name').value;
    //     this.user.last_name = this.shadowRoot.getElementById('last-name').value;
    //     this.user.username = this.shadowRoot.getElementById('username').value;
    //     console.log(this.user);
    // }

    // handleChange = (e) => {
    //     console.log(e);
    // }

    render() {
        this.shadowRoot.innerHTML = this.bootsrap + `
        <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
        `;
    }

    // این متد برای رویداد در وب کامپوننت استفاده میشود
    connectedCallback() {
        // this.shadowRoot.getElementById('login')
        //     .addEventListener('click', (e) => {
        //         e.preventDefault();
        //         this.Login();
        //     });

        console.log(this.shadowRoot);
        this.shadowRoot.getElementById('first-name')
            .addEventListener('change', (e) => {
                console.log(e);
                e.preventDefault();
                this.handleChange();
            });
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('login')
            .removeEventListener('click', () => this.toggleInfo());
    }

    adoptedCallback = () => {}

    // هنگامی که تغییری در عنصر
    // سفارشی انجام میشود
    attributeChangedCallback = (name, oldVal, newVal) => {
        console.log(name, oldVal, newVal)
    }

    static get observedAttributes() {}
        // مشخص شده که برای کدام 
        // ویژگی ها باید تغییر کند
    observedAttributes = () => {}
}

export default Users