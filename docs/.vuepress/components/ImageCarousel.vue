<template>
  <div style="max-width: 640px; display:block; margin:0 auto;">
        <carousel :per-page="1" :center-mode="false" >
            <slide>
                <img src="/img/smwp-title.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-editor.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-blocks.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-musicselector.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-additional.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-decade.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-nightsand.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-classicepic.webp" class="no-zoom" />
            </slide>
            <slide>
                <img src="/img/smwp-muitfaceted.webp" class="no-zoom" />
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