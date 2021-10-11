/*
  Author: Mia Alcaraz & Raven Jackson
  Created: 10.11.2021
*/


$(document).ready(function() {
    $('#output').append(
        $(document.createElement('input')).prop({
            type: 'button',
            id: 'Clicky',
            value: 'Clicky',
            className: 'btn'
        })
    );
});
