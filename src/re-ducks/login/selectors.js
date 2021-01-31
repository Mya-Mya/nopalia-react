export const LoginSelector = {
    getAccountName: state => state.login.name,
    getAccountPassword: state => state.login.password,
    loadingMark: state => state.login.loadingMark,
    errorShown: state => state.login.errorShown,
    getSessionIdFieldValue: state => state.login.sessionId
}