<template>
    <div class="main-hero">
        <div class="left">
            <h1 class="hero-title"><span class="sword">Seamless</span> Payments, Effortless Life! </h1>
            <p class="hero-description">Bravo offers a hassle-free, secure, and convenient way to manage your financial transactions on the go. Say goodbye to the complexities of traditional banking and embrace the future of effortless payments with our user-friendly app.</p>
            <div class="buttons">
                <button class="storebutton app-store">
                    <div class="bicon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 384 512"><path fill="#fcfcfc" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    </div>
                    <div class="btext">
                        <div class="herobutstext">Download on the</div> <div class="herobutltext">App Store</div>
                    </div>
                </button>
                <button class="storebutton play-store">
                    <div class="bicon">
                        <img class="playstoreicon" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-play-store-icon.png" alt="" srcset="">
                    </div>
                    <div class="btext">
                        <div class="herobutstext">Download on </div> <div class="herobutltext">Play Store</div>
                    </div>
                </button>
            </div>
            <p class="transactions">
                Over <span class="highlight">150k</span> transactions per day
            </p>
            <div class="social-icons">
                <i class="fab fa-facebook"><img class="socialicons" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-square-icon.png" alt="Facebook"></i>
                <i class="fab fa-instagram"><img class="socialicons" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="Instagram"></i>
                <i class="fab fa-adobe"><img class="socialicons" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" alt="Adobe"></i>
                <i class="fab fa-x"><img class="socialicons" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png" alt="X"></i>
            </div>
        </div>
        <div class="right">
            <img class="hi" src="~/assets/pictures/heroi.png" alt="" srcset="">
            <div class="arcs">
                <img class="arc arc1" src="~/assets/pictures/arc.svg" alt="" srcset="">
                <img class="arc arc2" src="~/assets/pictures/arc.svg" alt="" srcset="">
                <img class="arc arc3" src="~/assets/pictures/arc.svg" alt="" srcset="">
                <img class="stars sstar1" src="~/assets/pictures/sstar.svg" alt="" srcset="">
                <img class="stars sstar2" src="~/assets/pictures/sstar.svg" alt="" srcset="">
                <img class="stars mstar" src="~/assets/pictures/mstar.svg" alt="" srcset="">
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHero'
}
</script>

<style scoped>
.main-hero {
    height: 118vh;
    background-color: #2c284a;
    display: flex;
}

.main-hero .left ,
.main-hero .right {
    transform: translateY(15vh);
}

.left {
    width: 60%;
    padding: 20px;
}

.right {
    position: relative;
    width: 40%;
}

.hero-title {
    font-size: 3.9rem;
    margin-top: 59px;
    color: white;
    margin-left: 62px;
    font-weight: normal;
    line-height: 100px;
}

.hero-description {
    font-size: 1.21rem;
    line-height: 1.7rem;
    color: #d3d6dd;
    margin-top: -28px;
    margin-left: 62px;
    font-weight: 500;
}

.buttons {
    display: flex;
    margin-bottom: 20px;
}

.app-store, .play-store {
    max-width: 220px;
    min-width: 220px;
    height: 55px;
    margin-top: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #1d1d1d;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.app-store {
    margin-left: 62px;
}

.play-store {
    margin-left: 20px;
}

.transactions {
    font-size: 1rem;
    color: white;
    margin: 10px 0 20px 62px;
}

.highlight {
    color: #fd9400;
    font-size: 1.3rem;
}

.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons i {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
}

.sword {
    color: #fd9400;
}

.right .hi {
    transform: translate(10px, 20px) scale(0.95);
}

.arcs{
    position: absolute;
    top: 0;
    left: 0;
}

.arc1{
    transform: translate(10px, 21px);
}

.arc2{
    transform: translate(-13px, 12px);
}

.arc3{
    transform: translate(-36px, 4px);
}

.stars{
    position: absolute;
}

.sstar1{
    transform: translate(-60px, 375px);
}

.sstar2{
    transform: translate(260px, 450px);
}

.mstar{
    transform: translate(190px, 140px);
}



.herobutstext{
    font-size: 0.7rem;
    color: white;
}

.herobutltext{
    font-size: 1.2rem;
    color: white;
}

.storebutton{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.playstoreicon{
    width:34px ;
}

.social-icons{
    height: 43px;
    width: 370px;
    margin: 24px 0 0 62px;
}

.socialicons{
    width: 32px;
    margin-right: 6px;
}


</style>