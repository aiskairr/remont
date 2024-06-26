let otzyvy = document.querySelectorAll("#otzyvy-img")
let names = document.querySelectorAll("#name")

otzyvy.forEach((el) => {
    el.style.background = "url('https://png.klev.club/uploads/posts/2024-04/png-klev-club-8dom-p-ikonka-profil-png-4.png')"
    el.style.backgroundSize = "cover"
    el.style.backgroundPosition = "center"
})

names.forEach((el) => {
    el.innerHTML = "ФИО"
})