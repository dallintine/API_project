
$(function () {
    var $firstname = $('#firstname');
    var $lastname = $('#lastname');
    var $ariver_time = $('#ariver_time');
    var $exit_time = $('#exit_time');
    var $date_of_interview = $('#date_of_interview');
    var $viewer = $('$viewer');

    var viewTemplete = "" + 
    "<li>" +
    "<strong>firstname:</strong> {{firstname}}</li>" + 
    "<li><strong>lastname:</strong> {{lastname}}</li>" +
    "<li><strong>ariver_time:</strong> {{ariver_time}}</li>" +
    "<li><strong>exit_time:</strong> {{exit_time}}</li>" +
    "<li><strong>date_of_interview:</strong> {{date_of_interview}}</li>"+
    "</li>";

    function addviewers(datas){
        $viewer.append(Mustache.render(viewTemplete, datas));
    }
    
    $('#add_user').on('click', function () {
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

        $('#viewbtn').on('click', function () {

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
            success: function (viewer){
                $.each(viewer, function(i, vieweradd){
                    addviewers(datas);
                });
            },
            error: function(){
                alert('error getting viewer');

            }    
        });

            $('#viewbtn').on('click', function () {

                var viewer_add = {
                    firstname: $firstname.val(),
                    lastname: $lastname.val(),
                    ariver_time: $ariver_time.val(),
                    exit_time: $exit_time.val(),
                    date_of_interview: $date_of_interview.val(),
                };
                $.ajax({
                    type: 'GET',
                    url: 'https://empl-dev.site/api/interview/editWork',
                    success: function (viewer) {
                        $.each(viewer, function (i, vieweradd) {
                            addviewers(datas);
                        });
                    },
                    error: function () {
                        alert('error getting viewer');

                    }
                });
            });
    });
});
