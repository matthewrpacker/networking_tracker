$(document).ready(function() {

  createContact();

});

function createContact() {
  $("#create-contact").on("click", function(event) {
    event.preventDefault();

    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let linkedIn = $("#linked-in").val();
    let twitter = $("#twitter").val();
    let other = $("#other").val();
    let userId = $("form").data().userId;

    let contactParams = {
      contact: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        linked_in: linkedIn,
        twitter: twitter,
        other: other,
        user_id: userId
      }
    }

    axios({
      method: 'post',
      url: '/api/v1/contacts',
      data: contactParams
    }).then(createContactHTML).then(renderContact)
  })
}

function createContactHTML( contactData ) {
  return $(

  )
}

function renderContact( contactData ) {
  $("#list-of-contacts").prepend(contactData);
}