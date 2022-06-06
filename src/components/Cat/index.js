import Component from "../../../__JF__/Component";
import html from "./index.html";

class Cat extends Component{

    constructor() {
        super();
        this.render();
    }

    render(){
        console.log(html);
        this.shadowRoot.innerHTML + `<div>h</div>`;
    }
}

export default Cat;