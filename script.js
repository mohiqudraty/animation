let tl1 = gsap.timeline({
    scrollTrigger:{
trigger: ".two",
start: "50% 50%",
end: "200% 50%",
pin: true,
scrub: true
    }
})

tl1.to("#img1",{
    top: "-100%"
}, 'right')

tl1.to("#img2",{
    top: "10%"
},'right')

tl1.to("#img4",{
    top: "-90%"
},'right')
tl1.to("#img5",{
    top: "15%"
},'right')


let tl2 = gsap.timeline({
    scrollTrigger:{
trigger: ".three",
start: "-50% 50%",
end: "50% 50%",
scrub: true
    }
})

tl2.to("#img3",{
    top: "80%"
},'bottom')
tl2.to("#img6",{
    top: "85%"
},'bottom')