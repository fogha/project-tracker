import firebase from "../configs/firebase-config";

const githubAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .catch((err) => {
            return err;
        })
};

export default githubAuth;