import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '10k5i38n',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
