<template>
    <div class="lpsecond">
        <div class="sndtitle">
            <h3>Trusted By More Than <span class="sndtitlespan">100K</span> Users</h3>
        </div>
        <div class="brands">
            <div class="sndlogo">
                <div class="slogo">
                    <img src="~assets\Pictures\sndlogo.svg" alt="">
                </div>
                <div class="ssocials">
                    <div class="ssocialdivs">
                        <img src="assets\Icons\fbcircle.svg" alt="Social 1">
                    </div>
                    <div class="ssocialdivs">
                        <img src="assets\Icons\squareinstagram.svg" alt="Social 2">
                    </div>
                    <div class="ssocialdivs">
                        <img src="assets\Icons\x-twitter-brands.svg" alt="Social 3">
                    </div>
                    <div class="ssocialdivs">
                        <img src="assets\Icons\linkedin-brands.svg" alt="Social 4">
                    </div>
                </div>
                <vl class="vline"/>  
            </div>
            <div class="brandslogos">
                <img src="assets\Pictures\zain.png" alt="Brand 1">
                <img src="assets\Pictures\MTN.png" alt="Brand 2">
                <img src="assets\Pictures\Sudani.png" alt="Brand 3">
                <img src="assets\Pictures\ding.png" alt="Brand 4">
            </div>
        </div>
    </div>
</template>


<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
.lpsecond {
    height: 40vh;
    background-color: #e7e5f2;
    display: flex;
    flex-direction: column;
}

.sndtitle {
    flex: 1;
    text-align: center;
}

.brands {
    flex: 3;
    display: flex;
   }

.sndlogo {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(70px);
}

.slogo {
    flex:1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.slogo img {
    width: 170px;
}

.ssocialdivs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d4d1e3;
    transform: translateY(-20px);
}

.ssocials img {
    width: 22px;
}

.ssocials {
    width: 200px;
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.brandslogos {
    flex: 2;
    /* Add styles for brandslogos if needed */
}

.sndtitlespan {
    color: #fd9400;
}

h3{
    color:$p6;
    font-size: 1.8rem;
    font-weight: 500;
}

.vline{
    position: absolute;
    border: 1px solid #a39fbd;
    top: 0;
    right: 0;
    transform: translateY(20%);
    height: 100px;
}

.brandslogos{
    display: flex;
    justify-content: center;
    align-items: center;
}

.brandslogos img {
    margin: 0 13px;
}

</style>

