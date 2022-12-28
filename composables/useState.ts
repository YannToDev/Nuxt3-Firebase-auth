//Composable qui contient la méthode contenant le state que l'on veut partager à savoir l'état du user -----

import { User } from '~/types/firebaseUser'

export const useFirebaseUser:any = () => useState("firebaseUser", () =>{})