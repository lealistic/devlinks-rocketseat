function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light-mode")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Leal com óculos escuros, uma barba charmosa em um fundo azul."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Leal com uma barba bem charmosa e fundo roxo."
    )
  }
}
