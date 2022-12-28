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
// 1. on définit une variable firebaseUser qui va être égale au composable contenant le state
// 2. on l'initialise avec la valeur du currentUser accessible grâce au auth de firebase.
export const initUser = () => {

    const router = useRouter()

    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    
    onAuthStateChanged(auth,(user) => {

        if(user){     
            console.log("Auth changed",user);
            firebaseUser.value = user;
            
        } else{
           
            console.log("Auth changed",user);
            firebaseUser.value = user;
        }

        firebaseUser.value = user;
    });
};

// ------ Méthode pour déconnecter un user -------
export const signOutUser = async() => {

    const auth = getAuth();
    const result = await signOut(auth);
    console.log("signout",result);
};