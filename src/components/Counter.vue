<script setup lang="ts">
let count = ref(0)

function increment() {
  count.value++
}
function reset() {
  count.value = 0
}
</script>

<template>
  <div class="text-center pa-8">
    <div class="mb-6">
      <p class="text-h4 font-weight-bold">
        Counter
      </p>
      <p class="text-medium-emphasis">
        Increase by one
      </p>
    </div>

    <div class="mb-4">
      <v-icon size="x-large">
        mdi-counter
      </v-icon>
      <p
        data-test="count-number"
        class="text-h2"
      >
        {{ count }}
      </p>
    </div>

    <div class="d-flex ma-auto max-width-button-group">
      <v-btn
        data-test="btn-reset"
        prepend-icon="mdi-numeric-0-box"
        class="mx-2"
        color="error"
        plain
        @click="reset"
      >
        Reset
      </v-btn>
      <v-btn
        data-test="btn-increment"
        class="mx-2"
        color="success"
        plain
        @click="increment"
      >
        <template #prepend>
          <v-icon class="icon-positive-1-bg" color="success">
            mdi-numeric-positive-1
          </v-icon>
        </template>
        Increase
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
  .icon-positive-1-bg {
    background-color: white;
    border-radius: 10%;
    height: 14px;
    margin: 2px;
    width: 14px;
  }
  .max-width-button-group {
    max-width: 320px;
    button {
      flex: 1 1;
      /deep/ .v-btn__prepend {
        margin: 0px 4px !important;
      }
    }
  }
</style>
