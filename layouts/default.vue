<template>
  <a-layout class="layout">
    <a-layout>
      <m-header></m-header>
      <a-layout-content class="layout-content">
        <div class="layout-content-pages">
          <nuxt />
        </div>
      </a-layout-content>
      <m-footer></m-footer>
    </a-layout>
  </a-layout>
</template>

<script src="./default.js"></script>
<style src="./default.scss" lang="scss" scoped></style>
