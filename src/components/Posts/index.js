import Component from "../../../__JF__/Component";

class Posts extends Component {

    user = {
        first_name: '4',
        last_name: '5',
        username: '6'
    }

    constructor() {
        console.log("posts")
        super();
        this.render();
    }

    Login = () => {
        this.user.first_name = this.shadowRoot.getElementById('first-name').value;
        this.user.last_name = this.shadowRoot.getElementById('last-name').value;
        this.user.username = this.shadowRoot.getElementById('username').value;
        console.log(Validation.string(this.user));
    }

    render() {
        this.shadowRoot.innerHTML = this.bootsrap + this.alpine + `
        <div class="container">
            <ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
                <template x-for="color in colors">
                    <li x-text="color"></li>
                </template>
            </ul>
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

    connectedCallback = () => {
        this.shadowRoot.getElementById('login')
            .addEventListener('click', (e) => {
                e.preventDefault();
                this.Login();
            });
    }

    adoptedCallback = () => {}

    attributeChangedCallback = (name, oldVal, newVal) => {}

    observedAttributes = () => {}
}

export default Posts;