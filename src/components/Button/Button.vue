<template>
  <div>
    <button class="mcj-button" @click="click">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'mcj-button',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/common";

@fontSize: 14px;
@baseColor: #2d8cf0;

.@{prefix}-button {
  font-size: @fontSize;
  line-height: 1.5;
  background-color: @baseColor;
  border: 1px solid @baseColor;
  padding: 5px 15px;
  border-radius: 4px;
  color: #fff;
  &:hover {
    background-color: lighten(@baseColor, 10%);
  }
  &:focus {
    background-color: darken(@baseColor, 10%);
    outline: none;
  }
}

</style>
