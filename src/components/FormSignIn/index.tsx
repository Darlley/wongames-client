import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'

import * as S from './styles'
import { FormWrapper, FormLink } from 'components/Form'

import TextField from 'components/TextField'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        htmlFor='email'
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        htmlFor='password'
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn