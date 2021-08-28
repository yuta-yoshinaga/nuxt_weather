<template>
  <div v-if="getHasError()">
    <article class="message is-danger">
      <div class="message-header">
        <p>Error</p>
      </div>
      <div class="message-body">
        {{ getErrorMessage() }}
      </div>
    </article>
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
};
</script>
