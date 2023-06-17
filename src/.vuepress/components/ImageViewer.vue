<template>
  <div class="image-viewer">
    <img v-bind:src="currentImage" v-on:click="next" />
    <div class="controls">
      <button class="btn" id="prev"  :disabled="currentIndex === 0" v-on:click="prev">Prev</button>
      <button class="btn" id="next"  :disabled="currentIndex === images.length - 1" v-on:click="next">Next</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue"

export default defineComponent({
  name: "ImageViewer",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const currentIndex = ref(0)

    function next() {
      if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++
      }
    }

    function prev() {
      if (currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    const currentImage = ref(props.images[currentIndex.value])
    // watchEffect 会自动响应式跟踪 currentIndex 和 images 的变化
    watchEffect(() => {
      currentImage.value = props.images[currentIndex.value]
    })

    return {
      currentIndex,
      next,
      prev,
      currentImage,
      images: props.images,
    }
  },
})
</script>

<style>
.image-viewer {
  display: flex;
  align-items: center;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.5em 1em;
  border: none;
  background-color:#e1d5e7;
  color: black;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color 0.2s ease-in-out;
}
.btn:hover {
  background-color: #bc82da;
}
</style>