const AuthService = (container) => {
  const implemenation = container.config.get('authService') || 'memory';
  return container.getImplementation('authService', implemenation);
}

AuthService.type = 'factory';
export default AuthService
