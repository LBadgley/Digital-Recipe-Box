

const test = QUnit.test;
QUnit.module('header tests');


test('make header', assert => {
    const dom = makeHeader();
    assert.htmlEqual(dom, /*html*/`
        <header>
            <img src=''
        
        </header>

        `);
});