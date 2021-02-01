export const ProfileSelector = {
    getMeName: state => state.profile.me.name,
    getMeAge: state => state.profile.me.age,
    getMeComment: state => state.profile.me.comment
}