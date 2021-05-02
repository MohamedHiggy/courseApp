<template>
  <li :class="type">
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'NavItem',
    props: {
      type: String
    }
  }
</script>
