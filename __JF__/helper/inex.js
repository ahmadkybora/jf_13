export const extend = (Child, Parent) => {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

bootsrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`;

export const render = render = (strings, ...values) => {
    const template = document.createElement('template');
    template.innerHTML = values.reduce((acc, v, idx) =>
        acc + htmlValue(v) + strings[idx + 1], strings[0]);
    return template;
}