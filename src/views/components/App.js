import { Typography, Paper, TextField, Button, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { SceneSelector } from "../../re-ducks/scene/selectors";
import { SceneName } from "../../re-ducks/scene/types";
import CreateAccount from "./CreateAccount";

import Login from './Login';
import MyProfile from "./MyProfile";
const App = () => {
  let sceneName = useSelector(SceneSelector.getSceneName);
  let dom;
  switch (sceneName) {
    case SceneName.LOGIN:
      dom = (<Login />);
      break;
    case SceneName.CREATE_ACCOUNT:
      dom = (<CreateAccount />);
      break;
    case SceneName.MY_PROFILE:
      dom = (<MyProfile />)
    default:
      break;
  }
  return (
    <Typography>{dom}</Typography>
  );
}
export default App;