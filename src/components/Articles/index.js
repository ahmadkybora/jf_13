import Component from "../../../__JF__/Component";

class Articles extends Component {
    user = {
        first_name: '4',
        last_name: '5',
        username: '6'
    }

    constructor() {
        super();
        this.render();
        this.m();
    }

    Login = () => {
        this.user.first_name = this.shadowRoot.getElementById('first-name').value;
        this.user.last_name = this.shadowRoot.getElementById('last-name').value;
        this.user.username = this.shadowRoot.getElementById('username').value;
        console.log(this.user);
    }

    render() {
        this.shadowRoot.innerHTML = this.bootsrap + `
        <div class="container">
        <c-users></c-users>
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
        `
    }

    // Life cycle callbacks methods

    // مشکل کلیک با این حل شد
    // این متد برای زمانی است که عنصر سفارشی برای اولین بار
    // به دام میچسبد
    connectedCallback = () => {
            this.shadowRoot.getElementById('login')
                .addEventListener('click', (e) => {
                    e.preventDefault();
                    this.Login();
                });
        }
        // این متد برای زمانی است که عنصر سفارشی از دام جدا میشود
        // disconnectedCallback = () => {
        //     this.shadowRoot.getElementById('login')
        //         .removeEventListener('click', (e) => {
        //             e.preventDefault();
        //             this.Login();
        //         });
        // }

    // زمانیکه به یک سند جدید
    // منتقل میشود
    adoptedCallback = () => {}

    // هنگامی که تغییری در عنصر
    // سفارشی انجام میشود
    attributeChangedCallback = (name, oldVal, newVal) => {}

    // مشخص شده که برای کدام 
    // ویژگی ها باید تغییر کند
    observedAttributes = () => {}
}

export default Articles