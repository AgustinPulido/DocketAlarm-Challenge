
const listUl = $('#jurisdictionsList');

$(document).ready(function () {
    $('input[type="checkbox"][value="California"]').prop('checked', true);
    listUl.append($('<li>', { text: $('input[type="checkbox"][value="California"]').val() }));
    $('input[type="checkbox"][value="New York"]').prop('checked', true);
    listUl.append($('<li>', { text: $('input[type="checkbox"][value="New York"]').val() }));
})

let actualJurisdictions = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
    return $(this).val();
}).get();

let events = new CustomEvent('jurisdictions-selected', {
    detail: { selectedJurisdictions: [] }
});

selectionJurisdictionEvent(actualJurisdictions);

function selectionJurisdictionEvent(item) {
    events = new CustomEvent('jurisdictions-selected', {
        detail: { selectedJurisdictions: item }
    });
    document.dispatchEvent(events);
}

let jurisdictions = $('.jurisdictions');

jurisdictions.on('change', 'input[type="checkbox"]', function () {
    const selectedCheckboxes = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();
    selectionJurisdictionEvent(selectedCheckboxes);
});

let circuit = $('.circuits');

circuit.on('change', 'input[type="checkbox"]', function () {

    const actualJurisdictions = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();

    actualJurisdictions.forEach(() => {
        $(`[id="${$(this).val()}"]`).prop('checked', false);
    });

    $(`[id="${circuit}"]`).prop('checked', false);

    const selectedCircuitsCheckboxes = $('#circuits input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();

    selectedCircuitsCheckboxes.forEach((circuit) => {
        $(`[id="${circuit}"]`).prop('checked', true);
    });

    const jurisdictions = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();

    selectionJurisdictionEvent(jurisdictions);

});

document.addEventListener('jurisdictions-selected', function (event) {
    const selectedJurisdictions = event.detail.selectedJurisdictions;
    addToList(selectedJurisdictions);
});

function addToList(selectedJurisdictions) {
    listUl.empty();
    selectedJurisdictions.forEach(function (jurisdiction) {
        const newElement = $('<li>', { text: jurisdiction });
        listUl.append(newElement);
    });
}