$(document).ready(function () {
    $('#profile-pic-img').click(function () {
        $('#img').click();
    });

    // Optional: Display selected image
    $('#img').change(function () {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#profile-pic-img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }
});