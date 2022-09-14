<template>
  <div class="relative h-min">
    <textarea
      v-model="this.textValue"
      class="
        text-sm
        resize-none
        p-2
        pb-10
        w-full
        rounded-lg
        border-2 border-slate-300
        bg-slate-100
        focus:outline-blue-500
      "
      placeholder="Write a SQL expression"
    >
    </textarea>
    <button
      :class="{'disabledDiv' : !this.textValue.length}"
      @click="this.$emit('saveExpression', this.textValue)"
      class="
        absolute
        bottom-3
        right-1.5
        text-white
        bg-slate-400
        hover:bg-slate-500
        py-0.5
        px-5
        rounded-lg
        text-sm
      "
    >
      Run SQL (Save)
    </button>
  </div>
</template>

<script>
export default {
  name: "SqlInput",
  props: {
    textValueForSqlInput: String,
  },
  emits: ["saveExpression"],
  computed: {},
  data() {
    return {
      textValue: "",
    };
  },
  watch: {
    textValueForSqlInput: {
      inmediate: true,
      handler() {
        this.textValue = this.textValueForSqlInput;
      },
    },
  },
  methods: {
    clearInput() {
      this.textValue = "";
    },
  },
  created() {
    this.textValue = this.textValueForSqlInput;
  },
};
</script>