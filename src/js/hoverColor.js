window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 60px, rgba(0, 0, 0, 0) 200px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    spotlight.addEventListener('mouseover', e => {
        spotlightSize = 'rgb(236, 238, 237) 30px, rgba(0, 0, 0, 0) 150px)';

        updateSpotlight(e);
    });

    spotlight.addEventListener('mouseleave', e => {
        spotlightSize = 'transparent 60px, rgba(0, 0, 0, 0) 200px)';

        updateSpotlight(e);
    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }

    //////////////////

    const spotlight2 = document.querySelector('.spotlight2');

    let spotlightSize2 = 'transparent 60px, rgba(0, 0, 0, 0) 200px)';

    window.addEventListener('mousemove', e => updateSpotlight2(e));

    spotlight2.addEventListener('mouseover', e => {
        spotlightSize2 = 'rgb(235, 248, 277) 30px, rgba(0, 0, 0, 0) 400px)';

        updateSpotlight2(e);
    });

    spotlight2.addEventListener('mouseleave', e => {
        spotlightSize2 = 'transparent 60px, rgba(0, 0, 0, 0) 200px)';

        updateSpotlight2(e);
    });

    function updateSpotlight2(e) {

        spotlight2.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize2}`;

    }
});