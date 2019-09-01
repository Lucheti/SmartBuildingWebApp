export const logout = () => {
    window.sessionStorage.clear()
    window.open("/","_self")
}