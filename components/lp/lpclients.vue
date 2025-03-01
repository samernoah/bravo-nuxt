<template>
    <div class="lbclients">

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
.lbclients {
    height: 469px;
    background-color: #2d284e;
}
</style>