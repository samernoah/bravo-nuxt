<template>
    <div class="thirdcard">
        <div class="tci">
            <img :src="icon" alt="">
        </div>
        <h4 class="tct">{{ title }}</h4>
        <p class="tcd">{{ description }}</p>    
    </div>
</template>

<script setup>
   



    

    const props = defineProps({
        icon: String,       
        title: String,
        description: String        
    })
    

    const state = reactive({
        count: 0,
    })
</script>

<style lang="scss" scoped>
    .thirdcard {
        position: relative;
        width: 228.5px;
        height: 175px;
        background-color: #c9c7d1;
        border-radius: 10px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 -50px;
        transform: translateY(30px);

    }
    

    .tci {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -230%);
    }

    .tct{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -270%);
        width: 100%;
        text-align: center;
    }

    .tcd{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-47%, 0%);
        width: 89%;
        text-align: left;

    }

</style>