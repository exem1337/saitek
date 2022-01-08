<template>
    <iframe wmode=transparent frameborder="0" src="/aas.pdf#toolbar=0"></iframe>
</template>

<script>
export default {
    setup() {
        const url = 'https://elib.spbstu.ru/dl/2535.pdf/download/2535.pdf'
        return {url}
    },
}
</script>

<style lang="scss" scoped>
iframe{
    width: 99%;
    height: 91%;
    position: relative;
    z-index: 1;
    //transform: translateY(-15px);
}
</style>