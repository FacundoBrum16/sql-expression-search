<template>
    <label for="file-input" class="cursor-pointer bg-blue-600 hover:bg-blue-700 flex items-center px-5 py-2 rounded-md gap-x-2 transform transition-all hover:scale-105 duration-300">
        <img class="w-5" src="../assets/icons/upload-icon.svg" alt="Upload icon">
        <span class="text-white text-sm font-medium">Upload CSV</span>
    </label>

<input class="hidden" type="file" id="file-input" accept=".csv" @change="getCsv" />

</template>

<script>
export default {
  name: 'UploadCsv',
  props: {
    msg: String
  },
  emits: ["getCsvInJsonFormat"],

  methods:{
    csvToJson(csv){
      const lines = csv.split('\n').filter((elm)=>elm != "")
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
        const fields = line.split(',')
        return Object.fromEntries(header.map((h, i) => [h, fields[i]]))
      })

      this.$emit('getCsvInJsonFormat', output)
    },

    readSingleFile(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        var contents = e.target.result;
        this.csvToJson(contents);
      };
      reader.readAsText(file);
    },

    getCsv(value){
      this.readSingleFile(value)
    },
  },
}
</script>