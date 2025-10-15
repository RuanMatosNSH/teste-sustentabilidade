$(document).ready(function() {

  $("#subscribe_phone").mask("(99) 9 9999-9999");

  $('#subscription_form').validate({
    messages: {
      subscribe_name: {
        required: "É necessário informar um nome",
      },
      subscribe_phone: {
        required: "É necessário informar um telefone",
      },
      subscribe_email: {
        required: "É necessário informar um email",
        email: "Ops, utilize um email válido"
      },
    }
  })

})