
$(function () {
    var $firstname = $('#firstname');
    var $lastname = $('#lastname');
    var $ariver_time = $('#ariver_time');
    var $exit_time = $('#exit_time');
    var $date_of_interview = $('#date_of_interview');
    var $viewer = $('$viewer');
    $('add_user').on('click', function () {
        var vieweradd = {
            firstname: $firstname.val(),
            lastname: $lastname.val(),
            ariver_time: $ariver_time.val(),
            exit_time: $exit_time.val(),
            date_of_interview: $date_of_interview.val(),
        };
        $.ajax({
            type: 'POST',
            url: 'https://empl-dev.site/api/interview/addWork',
            data: vieweradd,
            success: function (newAdd) {
                alert('success');
            },
            error: function(){
                alert('not successful');
            }
        });
    });

        $('viewbtn').on('click', function () {
            var viewer_add = {
                firstname: $firstname.val(),
                lastname: $lastname.val(),
                ariver_time: $ariver_time.val(),
                exit_time: $exit_time.val(),
                date_of_interview: $date_of_interview.val(),
            };
        $.ajax({
            type: 'GET',
            url: 'https://empl-dev.site/api/interview/fetchWork',
            success: function(viewer){
                $.each(viewer, function(i, vieweradd){
                    $viewer.append('<li>firstname: ' + viewer.firstname +', lastname:'+ viewer.lastname +', ariver_time: '+ viewer.ariver_time +', exit_time: '+ viewer.exit_time +', date_of_interview: '+ viewer.date_of_interview +'</li>');

                });
            },
            error: function(){
                alert('error getting viewer');

            }    
        });
    });
});