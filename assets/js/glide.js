/* Resize Glide start */
const config = {
    type: 'carousel',
    perView: 4,
    breakpoints: {
        1100: {
            type: 'carousel',
            perView: 2
        },
        600: {
            type: 'carousel',
            perView: 1
        }
    }
}
new Glide('.glide', config).mount()
/* Resize Glide end */
