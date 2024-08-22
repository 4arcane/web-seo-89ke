<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import slide1 from '/public/img/slide1.png';
import slide2 from '/public/img/slide2.png';
import slide3 from '/public/img/slide3.png';

const slides = [
    { id: '1', src: slide1 },
    { id: '2', src: slide2 },
    { id: '3', src: slide3 },
]

</script>

<template>
    <Carousel :autoplay="2000" :wrap-around="true" class="tt_l tt_full slide_a">
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item">
                <img v-bind:src="slide.src" alt="">
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <!-- <Pagination /> -->
        </template>
    </Carousel>
</template>


<style>
.carousel__item {
    min-height: auto;
    width: 100%;
    background-color: white;
    color: var(--vc-clr-white);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__item img {
    width: 100%;
    height: auto;
}

.carousel__slide {
    height: auto;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
}

.carousel__icon {
    fill: white;
}
</style>