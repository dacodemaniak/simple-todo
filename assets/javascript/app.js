/**
 * @name app.js
 * @abstract Moteur javascript natif pour l'application
 */

// Attendre que le DOM soit entièrement chargé
$(document).ready(() => {
    // Définir le listener sur le formulaire
    $('#todo-form').on(
        'keyup',
        (event) => {
            const fields = [
                $('#todo-content'),
                $('#todo-begin'),
                $('#todo-end'),
                $('#todo-detail')
            ];

            let isFormValid = true;

            fields.forEach((field) => {
                if (field.val() === '') {
                    isFormValid = false;
                }
            });

            // Décider si le bouton peut être activé
            isFormValid ? $('#todo-save').removeAttr('disabled') : $('#todo-save').attr('disabled', 'disabled');
        }
    );
});