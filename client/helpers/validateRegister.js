function validateregister(responseAuth) {
  if (responseAuth.operationType === 'signIn') {
    return responseAuth
  } else if (responseAuth.code) {
    if (responseAuth.code === 'auth/email-already-in-use') {
      return { error: true, message: 'Ya hay un usuario con este mail' }
    }
    if (responseAuth.code === 'auth/weak-password') {
      return {
        error: true,
        message: 'Contraseña débil, al menos debe contener 6 carácteres',
      }
    }
    if (responseAuth.code === 'auth/invalid-email') {
      return { error: true, message: 'Mail inválido, intente nuevamente' }
    }
  } else {
    return { error: true, message: 'Error desconocido' }
  }
}

export default validateregister
