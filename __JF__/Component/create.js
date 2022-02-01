const fs = require('fs');

const createComponentFile = () => {
    const filename = process.argv[2];
    fs.mkdirSync(`${process.cwd()}/src/components/${filename}`);
    fs.writeFileSync(`${process.cwd()}/src/components/${filename}/index.js`, `import Component from "../../../__JF__/Component";

class ${filename} extends Component {
    constructor() {
        super();

        this.render();
        
    }
    
    render() {
        this.shadowRoot.innerHTML = '';
    }
}
    
export default ${filename};
`)
}

module.exports = createComponentFile();

// دستور زیر را در کنسول بزنید تا یک کامپوننت برایتان بسازد
// بوسیله نودیجی اس و لایبرری فایل آن
// میتوان یک دایرکتوری و فایل ساخت
// و همچنین میتوان داخل فایل کدی را وارد کرد
// node __JF__/Component/create.js componentname