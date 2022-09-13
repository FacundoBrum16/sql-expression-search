<template>
  <input
    v-model="inputData"
    @keyup="onKeySearch()"
    class="
      text-white text-sm
      resize-none
      p-2
      w-full
      rounded-lg
      border-2 border-slate-400
      bg-slate-900
      focus:border-blue-500
    "
    placeholder="Search..."
  />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    dataForSearch: Object,
  },
  data(){
    return {
      inputData: "",
      optionsFiltered: []
    }
   
  },
  methods:{
    onKeySearch() {
        if (this.inputData) {
            const keys = this.dataForSearch.filterFields;

            this.optionsFiltered = this.dataForSearch.source.filter((item) => this.isInsideObject(keys, item, this.inputData))

        } else {
            this.optionsFiltered = this.dataForSearch.source;     
           
        }
        this.$emit('filtredData', this.optionsFiltered)
    },

    searchWordsInText(text, word) {
      if(text && word){
        if (text.toString().toLowerCase().trim().search(word.toString().toLowerCase().trim()) < 0) return false
        return true
      }
    },

    isInsideObject(keys, obj, value) {
        let txtMatch = false

        keys.map((key) => {
            txtMatch = txtMatch || this.searchWordsInText(obj[key], value)
        })

        return txtMatch
    },

    clearInput(){
      this.inputData = ""
    }
  },

  created() {
    this.optionsFiltered = this.dataForSearch.source
  }

};
</script>