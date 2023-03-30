<template>
    <div></div>
</template>

<script>
import { Block } from '@/api';

export default {
    name: 'BlockRender',
    data() {
        return {
            block: ''
        }
    },
    props: {
        blockId: Number,
    },
    mounted() {
        console.log("prop blockId in BlockRender => ", this.blockId)
        
        Block.get({
            blockId: this.blockId,
        })
        .then(res => {
            console.log(res.data)
            this.block = res.data
        })
    }
}
</script>