import { cleanEnv, str, email } from 'envalid'

export const validEnviromentVariables = () => {
  return cleanEnv(process.env, {
    REACT_APP_ACCESS_TOKEN: str(),
    REACT_APP_API_URL: str(),
    REACT_APP_ADMIN_EMAIL: email({ default: 'admin@example.com' }),
    NODE_ENV: str({ choices: [
      'development',
      'test',
      'production',
      'staging',
    ] }),
  })
}
