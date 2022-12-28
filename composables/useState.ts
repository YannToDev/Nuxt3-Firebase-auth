//Composable qui contient la méthode contenant le state que l'on veut partager à savoir l'état du user -----
export const useFirebaseUser = () => useState("firebaseUser", () => {})