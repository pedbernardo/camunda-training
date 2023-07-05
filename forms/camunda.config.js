import { defineConfig } from 'cam-baker'

export default defineConfig({
  camundaRun: {
    autoDeploy: true
  },
  entryPoints: {
    html: 'form.html'
  }
})
