// در این قسمت روت های مورد نظر را ارسال میکنیم
// بدینوسیله هر روتی که به آن برویم
// کامپوننت مورد نظر در آن روت لود میشود

export const routes = [
    { path: "/", name: "dashboard" },
    // { path: "/users", name: "users", component: "<c-users />" },
    { path: "/users", name: "users", component: "<my-users />" },
    { path: "/posts", name: "posts", component: "<c-posts />" },
    { path: "/cat", name: "cat", component: "<c-cat />" },
    { path: "/example", name: "example", component: "<c-example />" },
    { path: "/counter", name:"counter", component: "<c-counter />"}, 
    { path: "/articles", name:"articles", component: "<c-articles />"}, 
]