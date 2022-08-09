import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: null,
});

function AuthProvider(props: any) {
  const [auth, setAuth] = useState({
    // ...providers,
    auth: null,
  });
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
