// JQUERY FOR CONTACT FORM MODAL
// $('#exampleModal').on('show.bs.modal', function (event) {
//     var pers = $(event.relatedTarget)
//     var recipient = pers.data('name')
//     var mail = pers.data('mail')
//     var modal = $(this)

//     modal.find('.contact100-form-title').text('Send ' + recipient + ' a message')
//     modal.find('.modal-body input').val(mail)
// });

$(document).ready(function(){

    // JQUERY FOR CONTACT FORM MODAL
    $('#exampleModal').on('show.bs.modal', function (event) {
        var pers = $(event.relatedTarget)
        var recipient = pers.data('name')
        var mail = pers.data('mail')
        var modal = $(this)

        modal.find('.contact100-form-title').text('Send ' + recipient + ' a message')
        modal.find('.modal-body input').val(mail)
    });

});