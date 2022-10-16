<template>
  <div class="home">
    <div class="logo transition">
      <img alt="Vue logo" src="./assets/goco-logo.png" />
    </div>
    <div class="text">
      <p v-show="complete" class="smaller-text transition">Thank you for</p>
      <div class="main-text">
        <Vue3autocounter
          ref="counter"
          class="bold transition"
          :class="{ scaleBig: scaleClass }"
          :startAmount="0"
          :endAmount="500"
          :duration="4"
          :decimals="0"
          @finished="completed()"
          :autoinit="false"
        />
      </div>
      <p v-show="complete" class="smaller-text transition">orders</p>
    </div>
  </div>
</template>

<script>
import Vue3autocounter from "vue3-autocounter";

export default {
  name: "App",
  components: {
    Vue3autocounter,
  },
  data() {
    return {
      count: 500,
      scaleClass: false,
      complete: false,
    };
  },
  mounted() {
    if (this.$confetti) this.$confetti.stop();
    this.start()
  },
  methods: {
    completed() {
      this.scaleClass = true;
      this.$confetti.start();
      this.complete = true;
    },
    start() {
      setTimeout(() => {
        this.$refs.counter.start();
      }, 800);
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #602a9e;
}

.logo {
  width: 80px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 190px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.transition {
  transition: all 0.3s ease-in;
}

.main-text {
  font-size: 100px;
  font-weight: bold;
  color: #ffffff;
}

.smaller-text {
  font-size: 30px;
  color: #ffffff;
}

.text {
  margin-bottom: 80px;
}

.scaleBig {
  font-size: 120px;
}
</style>
