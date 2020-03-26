$(document).ready(function () {
    $(document).on("click", "#submitForm", function (e) {
        e.preventDefault();

        var what = $("#what").val();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var dataString = 'what=' + what + '&name=' + name + '&phone=' + phone;
        if (name == '' || phone == '') {
            alert("Заполните все поля");
        }
        else {
            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    alert('Успешно!');
                    $('.form-container').addClass('hidden');
                    $('body').removeClass('lock');
                }
            });
        }
        return false;
    });
});