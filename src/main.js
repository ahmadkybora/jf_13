// همه فایلها اینجا باندل میشوند
import Component from '../__JF__/Component';
import Router from '../__JF__/Router';
// import Alpine from 'alpinejs'
 
// window.Alpine = Alpine
 
// Alpine.start()
import Users from './components/Users';
// import Articles from './components/Articles';
// import Posts from './components/Posts/index.js';
// import Cat from './components/Cat/index.js';
// import Example from './components/Example/index.js';
// import CounterComponent from './components/CounterComponent/index.js';
// import User from "./components/Users/users.html"
customElements.define("c-users", Users);
// Component.create("c-articles", Articles);
// Component.create("c-users", Users);
// Component.create("c-posts", Posts);
// Component.create("c-cat", Cat);
// Component.create("c-example", Example);
// Component.create("c-counter", CounterComponent);