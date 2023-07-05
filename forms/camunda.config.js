import { defineConfig } from 'cam-baker'

export default defineConfig({
  outDir: '../camunda/src/main/resources/static/forms',
  entryPoints: {
    html: 'form.html'
  },
  watch: {
    buildOnWatch: true
  }
})
