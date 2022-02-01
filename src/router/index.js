// در این قسمت روت های مورد نظر را ارسال میکنیم
// بدینوسیله هر روتی که به آن برویم
// کامپوننت مورد نظر در آن روت لود میشود

export const routes = [
    { path: "/", name: "dashboard" },
    { path: "/users", name: "users", component: "<c-users />" },
    { path: "/posts", name: "posts" },
]