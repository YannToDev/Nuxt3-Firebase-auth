export type User = {

    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous:boolean;
    providerData:[
        {
        providerId: string,
         uid: string,
        displayName: string,
        email: string,
        phoneNumber: string,
        photoURL: string
        }
    ],
    stsTokenManager: {
    refreshToken: string,
    accessToken: string
    expirationTime: string
  },
  createdAt: string,
  lastLoginAt: string,
  apiKey: string,
}
