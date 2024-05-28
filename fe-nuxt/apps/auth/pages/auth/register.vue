<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { useAuthStore } from '~~/stores/auth'

useHead({
  title: 'Register',
})

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
})

const auth = useAuthStore()
const router = useRouter()
const error = ref()
const route = useRoute()

const { store } = useAuthStorage()

const { value: email } = useField('email', undefined, {
  initialValue: '',
})
const { value: password } = useField('password', undefined, {
  initialValue: '',
})

const config = useRuntimeConfig()
const API_URL = config.public.API_BASE_URL
const onSubmit = handleSubmit(async (values) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values, null, 2))
  error.value = ''
  try {
    const res = await $fetch(`${API_URL}/auth/register`, {
      method: 'post',
      body: values,
    })

    const token = res.access_token
    const user = res.user

    store(token, user)

    auth.user = user
    auth.loggedIn = true

    router.push((route.query as any).next || '/')
  }
  catch (e: any) {
    error.value = e.data.error
  }
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg p-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <AuthHeader title="Register" subtitle="Please enter your credentials" />

      <VInput wrapper-class="mb-4" name="name" label="Name" placeholder="Name" />
      <VInput wrapper-class="mb-4" name="email" label="Email" placeholder="Email" />
      <VInput
        wrapper-class="mb-4"
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <div class="mb-5 flex gap-2 justify-between items-center">
        <label class="flex flex-wrap gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          >

          <span> I agree with </span>
          <nuxt-link
            to="/toc"
            class="text-primary-500 hover:underline font-semibold text-sm inline"
          >
            Terms and Condition
          </nuxt-link>
        </label>
      </div>

      <VButton type="submit" color="primary" block class="mb-5">
        Register
      </VButton>

      <div class="text-gray-600 text-sm">
        Already have an account?
        <nuxt-link
          to="/auth/login"
          class="text-primary-500 hover:underline font-semibold text-sm"
        >
          Login
        </nuxt-link>
      </div>
    </form>
  </div>
</template>
