$('#region').change(() => {
    $.ajax({
        url: '/api/cities?REGION_ID=' + $('#region').val(),
        type: 'GET',
        cache: false,
        success: (res) => {
            // alert(res);
            $('#city').empty();
            $('#city').append(res);
        }
    });
});

$('#car_mark').change(() => {
    $.ajax({
        url: '/api/cars/models?MARK_ID=' + $('#car_mark').val(),
        type: 'GET',
        cache: false,
        success: (res) => {
            // alert(res);
            $('#car_model').empty();
            $('#car_model').append(res);
        }
    });
});