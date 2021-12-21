<template>
  <a class="arrow-button">
    <span class="arrow-button__link">
      <span />
      <span />
    </span>
    <span class="arrow-button__link-line"></span>
    <span class="arrow-button__text">Discover more</span>
  </a>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ArrowButton',
  data() {},
})
</script>

<style lang="scss" scoped>
.arrow-button {
  display: inline-flex;
  align-items: center;

  text-decoration: none;
  transform: rotate(-90deg);

  &__link {
    display: inline-flex;

    > span {
      position: relative;
      width: 14px;
      height: 1px;
      border-radius: 1px;
      overflow: hidden;
      background-color: #fff;
      z-index: 2;

      transition: transform 0.2s ease-out;

      &:nth-child(1) {
        transform-origin: left bottom;
        transform: rotate(45deg) translate3d(8px, -10px, 0);
      }
      &:nth-child(2) {
        transform-origin: left bottom;
      }

      &:hover {
        &:nth-child(2) {
          transform-origin: left bottom;
          transform: rotate(-45deg);
        }
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 1px;
        background: rgb(229, 92, 92);
      }
    }
  }

  &__link-line {
    position: relative;
    margin-left: -14px;
    width: 80px;
    height: 1px;
    background: #bebdbe;
    overflow: hidden;
    z-index: 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 80px;
      width: 70px;
      height: 1px;
      background: rgb(229, 92, 92);
    }
  }

  &__text {
    width: max-content;
    color: #e1e1e1;
    font-size: 12px;
    text-transform: uppercase;

    transform: rotate(90deg);
  }
}
</style>
