export const loginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    localStorage.setItem('signedIn', 'true')
    window.location.replace('/meetings')
}

export const logoutSuccess = () => {
    localStorage.removeItem('signedIn')
    window.location.replace('/login')
}