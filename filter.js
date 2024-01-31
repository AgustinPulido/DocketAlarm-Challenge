
$('#jurisdictionFilter').on('input', function () {
    $('#jurisdictions div').show();
    const filterValue = $(this).val().toLowerCase();
    if (filterValue.trim() !== '') {
        $('#jurisdictions div:not([class*="' + filterValue + '"])').hide();
    }
});