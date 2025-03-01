<template>
    <div class="lbabout">

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
.lbabout {
    height: 346px;
    background-color: #413a70;
}
</style>