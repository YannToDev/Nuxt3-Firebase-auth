
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseState = reactive({

    errorCode:'',
    errorMessage:''
})

const user = ref();

// ------ Méthode pour l'enregistrement d'un utilisateur ------
export const createrUser = async(email:string,password:string) =>{

    const auth = getAuth();

    const credentials = await createUserWithEmailAndPassword(auth,email,password)
    .catch((error:any) =>{
        firebaseState.errorCode = error.code;
        firebaseState.errorMessage = error.message;
    });

    return { credentials,firebaseState }
};

// ------ Méthode pour la connexion d'un utilisateur ------
export const signInUser = async(email:string,password:string) => {

    const auth = getAuth();

    const credentials = await signInWithEmailAndPassword(auth,email,password)
    .catch((error:any) =>{
        firebaseState.errorCode = error.code;
        firebaseState.errorMessage = error.message;
    });

    return { credentials,firebaseState };
};

// ------ Méthode qui permet d'initialiser un utilisateur et de surveiller son état de co/déco ------
export const initUser = async() => {

    const auth = getAuth();
    
    onAuthStateChanged(auth,(data) => {

        if(data){     
            user.value = data
        } else{
            user.value = null;
        }
        console.log(user.value);
    });
};

// ------ Méthode pour déconnecter un user -------
export const signOutUser = async() => {

    const auth = getAuth();
    const result = await signOut(auth);
    console.log("signout",result);
};