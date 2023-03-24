import gsap from 'gsap'
let tl = gsap.timeline()
gsap.defaults({ duration: 1, ease: 'power.out' })
function textAnimation() {
  tl.to('.h1', {
    x: 10,
    y: 10,
    color: 'green',
    onComplete: () => console.log('Đã ổn rồi đấy'),
  }),
    tl.to(
      '.text-size-14',
      {
        y: 20,
      },
      0
    )
}

export default textAnimation
