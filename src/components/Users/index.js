import Component from "../../../__JF__/Component";
import html from "./index.html";

class Users extends Component {
    user = {
        first_name: 'a',
        last_name: 'a',
        username: 'a'
    }

    // state = true;
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
        // this.shadowRoot.innerHTML = this.bootsrap + `
        // <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
        // `;
        // this.shadowRoot.innerHTML = this.bootstrap + html;
        this.shadowRoot.innerHTML = this.bootsrap + `
            <ul id="b" f-data="message" f-for="messages in message">
                <li id="a1" f-data="message.id"></li>
                <li id="a2" f-data="message.name"></li>
                <li id="a3" f-data="message.number"></li>
            </ul>
            <div>
                <h1 f-data="message" f-text="message" data-id="is"></h1>
                <h2 f-show="message" f-wow="message"></h1>
            <div>
        `;
    }
    messages = [
        {id: 1, name: 'ali', number: 12}, 
        {id: 2, name: 'reza', number: 13}, 
        {id: 3, name: 'ghader', number: 14}
    ];
   //  
    // این متد برای رویداد در وب کامپوننت استفاده میشود
    connectedCallback() {
        const ele = this.shadowRoot.querySelector('ul');
        const a1 = this.shadowRoot.getElementById('a1');
        const a2 = this.shadowRoot.getElementById('a2');
        const a3 = this.shadowRoot.getElementById('a3');

        // const ele = this.shadowRoot.getElementById('b');
        // console.log(ele.children[0].getAttribute("f-data"))

        const li = ele.querySelectorAll('li');

        // ✅ Get object of all {name: value}
        const attrs = ele.getAttributeNames().reduce((acc, name) => {
          return {...acc, [name]: ele.getAttribute(name)};
        }, {});
        
        // 👇️ {id: 'blue', 'data-id': 'example', class: 'box'}

        // console.log(ele.querySelectorAll('li').length)

        const fData = () => {
            ele.innerHTML = "salam"
        }
        const fFor = () => {
            var mm = m[1].split(" ");
            if(mm[0] === "messages") {
                this.messages.map(m => {
                    // console.log(ele.children[1])
                    for(let i = 0; i < ele.querySelectorAll('li').length; i++) {

                        (ele.children[i].getAttribute("f-data") === "message.id") ? (ele.children[i].innerHTML = m.id) : "";
                        (ele.children[i].getAttribute("f-data") === "message.name") ? (ele.children[i].innerHTML = m.name) : "";
                        (ele.children[i].getAttribute("f-data") === "message.number") ? (ele.children[i].innerHTML = m.number) : "";
                    }
                    // console.log(li[i])
                })
            }
        }
        
        Object.entries(attrs).forEach(m => {

            switch(m[0]) {
                case 'f-data':
                    fData();
                break;

                case 'f-for':
                    var mm = m[1].split(" ");
                    if(mm[0] === "messages") {
                        this.messages.map(m => {
                            console.log(a1);
                            a1.innerHTML += `${m.id}`;
                            a2.innerHTML += `${m.name}`;
                            a3.innerHTML += `${m.number}`;
                            // console.log(ele.children[1])
                            // for(let i = 0; i < li.length; i++) {
                            //     // if(li[i].getAttribute("f-data") === "message.id") {

                            //     // }
                            //     li[i].innerHTML = `${m.name}`;
                            //     li[i].innerHTML = `${m.number}`;
                            //     // (li[i].getAttribute("f-data") === "message.id") ? (li[i].innerHTML = m.id) : "";
                            //     // (li[i].getAttribute("f-data") === "message.name") ? (li[i].innerHTML = m.name) : "";
                            //     // (li[i].getAttribute("f-data") === "message.number") ? (li[i].innerHTML = m.number) : "";
                            // }
                            
                        })  
                    }
                    // fFor();
                break;
            }
            // console.log(m);
        });

        // این قسمت در اصل بر روی المنت ها میچرخد و به دنبال اتریبیوت خاص میگردد
        // const element = this.shadowRoot.querySelector('div');
        // for(let i=0; i<element.children.length; i++) {
        //     const attrs = element.children[i].getAttributeNames().reduce((acc, name) => {
        //     return {...acc, [name]: element.getAttribute(name)};
        //     }, {});
            // console.log(typeof(attrs))
            // if(attrs === "f-data") {
            //     console.log(attrs)
            // }
            // switch (attrs.value) {
            //     case "f-data":
            //         console.log("ok")
            //         break;
            
            //     default:
            //         break;
            // }
            // console.log(attrs);
        // }

        
        // this.shadowRoot.querySelectorAll
        // console.log(element.children.length);
        // console.log(element.children[i].getAttributeNames());
        // var cards = this.shadowRoot.querySelector('div')[0].children;
        // console.log(typeof element.children);
        // Object.key(element.children).map(el => console.log(el));
        // element.children.array.forEach(element => {
        //     console.log(element);
        // });
        //console.log(element.children[1].getAttributeNames());
        // console.log(element);
        // let child = element.querySelector('h1[f-data="message"]');
        // console.log(child);
        // const childrens = Array.from(element.childNodes);
        // childrens.map(name => {
        //     console.log(name.hasAttribute("f-data"));
        // })
        // console.log(children.h1);
        // const attrs = children.getAttributeNames().reduce((acc, name) => {
        //     return {...acc, [name]: element.getAttribute(name)};
        // }, {});
        // console.log(attrs);
        // document.addEventListener('alpine:init', () => {
        //     Alpine.data('showWindow', () => {
        //         return {
        //             open: false,
        //             get isOpen() {
        //                   return this.open;
        //             },
        //             toggle() {
        //                   this.open = !this.open;
        //             }
        //         }
        //     });
        // });
        // this.shadowRoot.innerHTML = html;
        // this.shadowRoot.getElementById('login')
        //     .addEventListener('click', (e) => {
        //         e.preventDefault();
        //         this.Login();
        //     });

        // console.log(this.shadowRoot);
        // this.shadowRoot.getElementById('first-name')
        //     .addEventListener('change', (e) => {
        //         console.log(e);
        //         e.preventDefault();
        //         this.handleChange();
        //     });
    }

    disconnectedCallback() {
        this.shadowRoot.innerHTML = html;
        // this.shadowRoot.getElementById('login')
        //     .removeEventListener('click', () => this.toggleInfo());
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