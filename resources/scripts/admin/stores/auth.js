import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/scripts/stores/notification'
import { handleError } from '@/scripts/helpers/error-handling'
import Ls from '@/scripts/services/ls.js'
export const useAuthStore = (useWindow = false) => {
  const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
  const { global } = window.i18n

  return defineStoreFunc({
    id: 'auth',
    state: () => ({
      status: '',

      loginData: {
        email: '',
        password: '',
        remember: '',
      },
    }),

    actions: {
      login(data) {
        return new Promise((resolve, reject) => {

          window.axios.get('/sanctum/csrf-cookie').then((response) => {
            if (response) {
              data._token = response
              axios
                .post('/login', data)
                .then((response) => {

                  Ls.set('auth.token', response.data.token)
                  resolve(response)

                  setTimeout(() => {
                    this.loginData.email = ''
                    this.loginData.password = ''
                  }, 1000)
                })
                .catch((err) => {
                  handleError(err)
                  reject(err)
                })
            }
          })
        })
      },

      logout() {
        return new Promise((resolve, reject) => {
          axios.post('/auth/logout', null, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('auth.token')}`
            }
          }).then((response) => {
              const notificationStore = useNotificationStore()
              notificationStore.showNotification({
                type: 'success',
                message: 'Logged out successfully.',
              })

              window.router.push('/login')
                // resetStore.clearPinia()
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              window.router.push('/')
              reject(err)
            })
        })
      },
    },
  })()
}
