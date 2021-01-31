import { Container, TextField, Typography, Button, makeStyles, Card, Input, InputAdornment, Snackbar, LinearProgress, Fade } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { LoginSelector } from "../../re-ducks/login/selectors";
import { LoginOperation } from '../../re-ducks/login/operations'
import { VerticalContainer, VerticalPaper } from "./atoms/VerticalWrapper";

const Login = () => {
    let accountName = useSelector(LoginSelector.getAccountName);
    let accountPassword = useSelector(LoginSelector.getAccountPassword);
    let loadingMark = useSelector(LoginSelector.loadingMark);
    let errorShown = useSelector(LoginSelector.errorShown);
    let sessionIdFieldValue = useSelector(LoginSelector.getSessionIdFieldValue);
    const dispatch = useDispatch();
    return (
        <VerticalContainer>
            <Fade in={loadingMark}>
                <LinearProgress />
            </Fade>

            <Typography variant="h5">Nopaliaへログイン</Typography>

            <Input name="name" value={accountName}
                startAdornment={
                    <InputAdornment position="start">名前:</InputAdornment>
                } onChange={
                    e => dispatch(LoginOperation.onNameFieldChanged(e.target.value))
                } />
            <Input name="password" type="password" value={accountPassword}
                startAdornment={
                    <InputAdornment position="start">パスワード:</InputAdornment>
                } onChange={
                    e => dispatch(LoginOperation.onPasswordFieldChanged(e.target.value))
                } />
            <Button variant="contained" color='primary' onClick={
                () => dispatch(LoginOperation.onLoginButtonPushed(accountName, accountPassword))
            }>LOGIN</Button>
            <Button onClick={
                () => dispatch(LoginOperation.onSignupButtonPushed())
            } >SIGNUP</Button>

            <Input name="sessionId" value={sessionIdFieldValue}
                startAdornment={
                    <InputAdornment position="start">セッションのID:</InputAdornment>
                } onChange={
                    e => dispatch(LoginOperation.onSessionIdFieldChanged(e.target.value))
                } />
            <Button onClick={
                () => dispatch(LoginOperation.loginBySessionId(sessionIdFieldValue))
            } >セッションIDでLOGIN</Button>


            <Snackbar open={errorShown} onClose={() => dispatch(LoginOperation.hideError())} autoHideDuration={3000} message="ログインできませんでした" />
        </VerticalContainer>
    )
}
export default Login;