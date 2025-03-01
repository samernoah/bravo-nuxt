<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Business Solutions</li>
            <li>Resources</li>
            <li>About Bravo</li>
        </ul>
        <button class="langbutton"> العربية</button>
    </nav>
       
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
@import '~/assets/scss/colors.scss';

nav{
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

nav ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 75%;
    flex: 3;
}

nav ul li {
    display: block;
    font-family: Alexandria, "Alexandria Fallback: Arial", "Alexandria Fallback: Arial";
    color: white;
    margin: 0 31px 0 0;

}

nav button {
    display: block;
    background-color: #FD9400;
    color: white;
    border: none;
    max-width: 100px;
    height: 40px;
    border-radius: 5px;
    font-family: Alexandria, "Alexandria Fallback: Arial";
    cursor: pointer;
    flex: 1;
}


</style>