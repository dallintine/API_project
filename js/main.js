$(function(){
    $('#addbtn').on('click', function(){
        $('#Addviwer').show();
        $('#addDele').hide();
    });

    $('#addbtn').on('mouseover', function () {
        $('#Addviwer').fadeToggle();
        $('#addDele').hide();
    });

    $('#delebtn').on('mouseover', function () {
        $('#addDele').fadeToggle();
        $('#Addviwer').hide()
    });

    $('#delebtn').on('click', function () {
        $('#addDele').show();
        $('#Addviwer').hide();
    });

    $('#date_of_interview').datetimepicker({ format: 'yyyy-mm-dd hh:ii' });
});


