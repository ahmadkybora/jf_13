// import html from "./index.html";
// import csss from "./component.css";

export default class Example extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.template();
    }

    state = {
        user: {
            first_name: '',
            last_name: '',
        }
    }

    template()
    {
        this.shadowRoot.innerHTML = `
                <div>
                    <form>
                        <input class="" id="first-name" name="first_name" type="text" onchange="${this.handleChange()}" />
                        <input class="" id="last-name" name="last_name" type="text" onchange="${this.handleChange()}" />
                        <button class="" type="submit">click</button>
                    </form>
                </div>
            `;
    }

    handleChange = (e) => {
        console.log(e);
    }

    static get observedAttributes() { 
        return ['first_name', 'last_name']; 
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
      
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback');
    }

    adoptedCallback() {
        console.log('adoptedCallback');
    }

}

window.customElements.define('c-example', Example);
