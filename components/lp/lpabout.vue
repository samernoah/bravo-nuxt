<template>
    <div class="lpabout">
        <h3 class="lpah3">About <span>Bravo</span></h3>
        <div class="lpasecond">

            <div class="lpasleft">
                <h3 class="lpalh3">Cutting-Edge Financial Companion</h3>
                <p class="lpalp">Introducing Bravo, the cutting-edge payment app that simplifies your  financial journey. Experience state-of-the-art features and unmatched  user-friendliness. Streamline your transactions with ease</p>
                <button>Learn More ></button>
            </div>
            <div class="lpasright"></div>
            
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
.lpabout {
    position: relative;
    height: 1246px;
    background-color: #413a70;
}

.lpah3 {
    font-size: 1.8rem;
    color: white;
    text-align: center;
    font-weight: 500;
    margin: 0;
    transform: translateY(40px);
}

.lpabout h3 span {
    color: #fd9400;
}

.lpasecond {
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lpasleft{
    flex: 2;
}

.lpasright{
    flex: 1;
}

.lpalh3 {
    color: #fd9400;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
}

.lpalp {
    color: white;
    font-size: 1.1rem;
    line-height: 30px;
    width: 60%;
    margin: 0 auto;
}
</style>