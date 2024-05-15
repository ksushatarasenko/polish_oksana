document.addEventListener('DOMContentLoaded', function(){
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    window.addEventListener('scroll', function(){
        const scrollPosition = this.window.scrollY;
        if(scrollPosition > 1000){
            scrollToTopButton.style.display = 'block'
        } else {
            scrollToTopButton.style.display = 'none'
        }
    })

    scrollToTopButton.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})