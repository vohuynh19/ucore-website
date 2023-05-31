import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "./index";

const signInFirebase = (token: string) => signInWithCustomToken(auth, token);

const signOutFirebase = () => signOut(auth);

export { signInFirebase, signOutFirebase };
