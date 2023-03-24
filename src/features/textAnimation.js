import gsap from 'gsap'
let tl = gsap.timeline()
gsap.defaults({ duration: 1, ease: 'power.out' })
function textAnimation() {
  tl.to('.h1', {
    x: 20,
    y: 15,
    color: 'yellow',
    onComplete: () => console.log('CẦN CỐ GẮNG HƠN'),
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
