import * as React from "react";
import { router, useRootNavigationState, useSegments } from "expo-router";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

// Definição da interface do usuário
interface User {
    uid: string;
    displayName: string;
    photoURL: string;
    providerId: string;
    createdAt: string;
    lastLoginAt: string;
    email: string;
}

// Definição da interface do contexto
interface ContextInterface {
    user: User | null;
    signIn: React.Dispatch<React.SetStateAction<User>>;
    signOut: () => void;
}

// Estado inicial do usuário
const initialState: User = {
    uid: "",
    displayName: "",
    photoURL: "",
    providerId: "",
    createdAt: "",
    lastLoginAt: "",
    email: ""
};

// Estado inicial do contexto
const contextInitialState: ContextInterface = {
    user: initialState,
    signIn: () => {},
    signOut: () => {}
};

// Criação do contexto de autenticação
const AuthContext = React.createContext<ContextInterface>(contextInitialState);

// Hook para acessar o contexto de autenticação
export function useAuth(): ContextInterface {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Função para gerenciar navegação protegida
function useProtectedRouter(user: User) {
    const segments = useSegments();
    const navigationState = useRootNavigationState();
    const [hasNavigated, setHasNavigated] = React.useState(false);

    React.useEffect(() => {
        if (!navigationState.key || hasNavigated) return;

        const inAuthGroup = segments[0] === "(auth)";

        if (!user.uid && !inAuthGroup) {
            router.replace("/(auth)/sign-in");
            setHasNavigated(true);
        } else if (user.uid && inAuthGroup) {
            router.replace("/(tabs)");
            setHasNavigated(true);
        }
    }, [user.uid, segments, navigationState, hasNavigated]);
}

// Provedor de contexto de autenticação
export default function AuthProvider({ children }: React.PropsWithChildren): JSX.Element {
    const [user, setUser] = React.useState<User>(initialState);

    useProtectedRouter(user);

    React.useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                const dataWeCareAbout: User = {
                    uid: firebaseUser.providerData[0].uid,
                    displayName: firebaseUser.providerData[0].displayName ?? "",
                    photoURL: firebaseUser.providerData[0].photoURL ?? "",
                    providerId: firebaseUser.providerData[0].providerId,
                    createdAt: firebaseUser.metadata.creationTime!,
                    lastLoginAt: firebaseUser.metadata.lastSignInTime!,
                    email: firebaseUser.providerData[0].email!,
                };

                console.log("Usuário autenticado:", dataWeCareAbout);
                setUser(dataWeCareAbout);
                router.replace("/(tabs)");
            } else {
                console.log("Usuário não autenticado");
                router.replace("/(auth)/sign-in");
            }
        });

        return () => unsubscribeAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn: setUser,
                signOut: () => {
                    setUser(initialState);
                    firebaseSignOut(auth);
                }
            }}
        >
            {children}  {/* Certifique-se de que os filhos estão sendo renderizados */}
        </AuthContext.Provider>
    );
}
