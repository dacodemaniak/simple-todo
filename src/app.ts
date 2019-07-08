/**
 * @name App
 * @abstract Point d'entrée dans l'application
 */

import * as $ from 'jquery';

export class App {

    public run(): void {
        console.log('Hello TypeScript');
    }
}

$(document).ready(() => {
    const app: App = new App();
    app.run();
});