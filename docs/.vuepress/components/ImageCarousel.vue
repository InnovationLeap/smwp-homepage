<template>
  <div style="width: 640px; display:block; margin:0 auto;">
        <carousel :per-page="1" :center-mode="false" >
            <slide>
                <img src="/img/smwp-title.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-editor.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-blocks.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-musicselector.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-additional.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-decade.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-nightsand.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-classicepic.webp" />
            </slide>
            <slide>
                <img src="/img/smwp-muitfaceted.webp" />
            </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    },
    /*
    mounted () {
            import('vue-carousel').then(module => {
                // Vue.use(module);
                // Vue.component('carousel', module.Carousel);
            });
        }
    */
}
</script>