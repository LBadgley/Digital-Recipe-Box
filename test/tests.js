import { app } from '../src/firebase.js';

import './html-equal.js';
import './make-recipe-card.test.js';
import './hash-query-test.js';
import './make-search-meal-url.test.js';
import './header-component.test.js';
import './convert-obj-to-array.test.js';


QUnit.done(() => {
    app.delete();
});