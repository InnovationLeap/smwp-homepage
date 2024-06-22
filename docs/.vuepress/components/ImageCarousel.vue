<template>
  <div style="width: 640px; display:block; margin:0 auto;">
        <carousel :per-page="1" :center-mode="false" >
            <slide>
                <img src="/img/smwp-title.jpg" />
            </slide>
            <slide>
                <img src="/img/smwp-editor.jpg" />
            </slide>
            <slide>
                <img src="/img/smwp-blocks.jpg" />
            </slide>
            <slide>
                <img src="/img/smwp-musicselector.jpg" />
            </slide>
            <slide>
                <img src="/img/smwp-additional.jpg" />
            </slide>
            <slide>
                <img src="/img/smwp-decade.png" />
            </slide>
            <slide>
                <img src="/img/smwp-nightsand.png" />
            </slide>
            <slide>
                <img src="/img/smwp-classicepic.png" />
            </slide>
            <slide>
                <img src="/img/smwp-muitfaceted.png" />
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