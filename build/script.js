const mobileNav = document.querySelector('.mobile-nav')

document.querySelector('.btn-menu').addEventListener('click', function () {
  this.classList.toggle('opacity-50')
  mobileNav.classList.toggle('active')
  mobileNav.classList.toggle('show')
})

window.addEventListener('resize', function () {
  if (this.innerWidth >= 880 && mobileNav.classList.contains('active')) {
    mobileNav.classList.add('hide')
    mobileNav.classList.remove('show')
    return
  }

  if (this.innerWidth <= 880 && mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('hide')
    mobileNav.classList.add('show')
    return
  }
})

window.onscroll = () => {
  if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
    document.querySelector('.nav').classList.add('scroll')
    document.querySelector('.nav').classList.remove('py-[34px]')
  } else {
    document.querySelector('.nav').classList.add('py-[34px]')
    document.querySelector('.nav').classList.remove('scroll')
  }
}
