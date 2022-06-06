import { api } from 'services/api'

export const getAnonymousToken = async (actor_id?: string) => {
  try {
    const response = await api.post('/token', {
      actor_id,
      claims: []
    });
    return response.data.jwtToken || response.data.token
  } catch (e: any) {
    throw new Error(`getWorkflowAnonymousToken -> ${e.error}: ${e.message}`)
  }
}