function onClick() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    Swal.fire({
      icon: "warning",
      title: "Por favor llená los campos requeridos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "El formulario se ha enviado.",
      text: "Pronto nos contactaremos con vos.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    let form = document.getElementById("contact-form");
    form.reset();
  }
}
