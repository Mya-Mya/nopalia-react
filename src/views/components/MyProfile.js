import { List, ListItem, Typography, ListItemText, TextField, Button } from "@material-ui/core";
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
    const [ageField, setAgeField] = useState(age);
    const [commentField, setCommentField] = useState(comment);
    useEffect(() => {
        dispatch(ProfileOperation.fetchMeProfile());
    }, []);
    useEffect(() => {
        setAgeField(age);
        setCommentField(comment);
    }, [age, comment]);
    return (<VerticalContainer>
        <Typography variant="h5">自分のプロフィール</Typography>
        <Typography>アカウントの名前</Typography>
        <Typography>{name}</Typography>

        <Typography>年齢</Typography>
        <TextField value={ageField} onChange={e => setAgeField(e.target.value)} secondary={'年齢'} />

        <Typography>コメント</Typography>
        <TextField value={commentField} onChange={e => setCommentField(e.target.value)} secondary={'コメント'} />

        <Button variant="contained" color="primary" onClick={() => dispatch(ProfileOperation.setMeProfile(ageField, commentField))}>更新する</Button>
    </VerticalContainer>)
}
export default MyProfile;