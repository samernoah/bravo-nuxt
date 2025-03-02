<template>
    <header >
        <div class="logo">
            <img class="lgo" src="@/assets/Pictures/Logo.svg" alt="">
        </div>

        <Navlinks ></Navlinks>

    </header>
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
   
    header {
        position: absolute;
        background-color: #413A70;
        width: 100%;
        height: 12vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
       
    }

    nav {
        flex: 2;
    }

    .lgo{
        width: 35%;
        height: 30%;
    }

</style>