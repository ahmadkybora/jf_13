import Component from "../../../__JF__/Component";

class Users extends Component {
    user = {
        first_name: '',
        last_name: '',
        username: ''
    }

    constructor() {
        super();
        this.render();
        this.Login();
    }

    Login = () => {
        this.addEventListener('submit', e => {
            e.preventDefault();
            this.user.first_name = document.getElementById('first-name').value;
            this.user.last_name = document.getElementById('last-name').value;
            this.user.username = document.getElementById('username').value;

            console.log("ok");
        })
    }

    render() {
        this.shadowRoot.innerHTML = this.bootsrap + `
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
        `
    }
}

export default Users