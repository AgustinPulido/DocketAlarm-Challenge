function checkAll() {
    $('.jurisdictions input:checkbox:visible').prop('checked', true);
    const actualJurisdictions = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();
    selectionJurisdictionEvent(actualJurisdictions);
}
$('#checkAll').on('click', checkAll);

function uncheckAll() {
    $('#circuits input[type="checkbox"]:checked').prop('checked', false);
    $('.jurisdictions input:checkbox:visible').prop('checked', false);
    const actualJurisdictions = $('#jurisdictions input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get();
    selectionJurisdictionEvent(actualJurisdictions);
}
$('#uncheckAll').on('click', uncheckAll);