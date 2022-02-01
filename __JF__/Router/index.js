import Component from "../Component";
import { routes } from "../../src/router";

class Router extends Component {
    baseUrl = "http://localhost:8080";

    constructor() {
        super();
        // زمانیکه صفحه به طور کامل بار گیری میشود
        // اگر کلیکی انجام شود
        // بوسیله متد مورد نظر چک میشود که یو ار ال
        // لینک مورد نظر ایا با روتهاییی که تعریف کردیم یکی است
        // که به این وسیله کامپوننت ما لود میشود
        document.addEventListener("DOMContentLoaded", () => {
            // اینجا بارگیری کامل صفحه لود میشود
            document.body.addEventListener("click", e => {
                // اینجا رویداد چک میشود
                e.preventDefault();
                // لینک جاری را گرفته
                const currentPage = e.target.href;
                // بوسیله این متد میتوان ناوبری کرد
                history.pushState(null, null, currentPage);
                // اینجا چک میکنیم که آیا روت جاری با روتی
                // که داریم یکی است که در این صورت
                // کامپوننت لود میشود
                routes.map(route => {
                        if ((this.baseUrl + route.path) === currentPage) {
                            document.querySelector("#app").innerHTML = route.component;
                        }
                    })
                    // window.addEventListener("popstate", e => console.log(e.target));
            })
        })
    }
}

export default Router;
Component.create("page-router", Router);