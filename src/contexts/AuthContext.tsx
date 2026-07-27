import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  User,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../config/firebase";

import { getUser } from "../services/user.service";
import { UserModel } from "../types/user";

type AuthContextType = {
  authUser: User | null;
  user: UserModel | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  authUser: null,
  user: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        setLoading(true);

        if (!firebaseUser) {
          setAuthUser(null);
          setUser(null);
          setLoading(false);
          return;
        }

        setAuthUser(firebaseUser);

        try {
          const userData = await getUser(firebaseUser.uid);

          setUser(userData);
        } catch (error) {
          console.error("Erro ao carregar usuário:", error);
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}