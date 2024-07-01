export function validateLogin(responseLogin) {
  if (responseLogin.operationType === 'signIn') {
    return responseLogin
  } else if (responseLogin.code === 'auth/invalid-credential') {
    return { error: true, message: 'Credenciales inválidas' }
  } else {
    return { error: true, message: 'Error desconocido' }
  }
}
