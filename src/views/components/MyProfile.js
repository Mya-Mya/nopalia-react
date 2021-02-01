import { List, ListItem, Typography, ListItemText } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProfileOperation } from "../../re-ducks/profile/operations";
import { ProfileSelector } from "../../re-ducks/profile/selectors";
import { VerticalContainer } from "./atoms/VerticalWrapper";

const MyProfile = () => {
    const dispatch = useDispatch();
    const name = useSelector(ProfileSelector.getMeName);
    const age = useSelector(ProfileSelector.getMeAge);
    const comment = useSelector(ProfileSelector.getMeComment);
    useEffect(() => {
        dispatch(ProfileOperation.fetchMeProfile());
    }, []);
    return (<VerticalContainer>
        <Typography variant="h5">自分のプロフィール</Typography>
        <List>
            <ListItem>
                <ListItemText primary={name} secondary={'アカウントの名前'} />
                <ListItemText primary={age} secondary={'年齢'} />
                <ListItemText primary={comment} secondary={'コメント'} />
            </ListItem>
        </List>
    </VerticalContainer>)
}
export default MyProfile;