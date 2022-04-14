import { defineController } from './$relay'

export default defineController(() => ({
  get: ({query}) => ({ status: 200, body: JSON.stringify(query) })
}))
