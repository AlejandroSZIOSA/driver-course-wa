import { Children, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider() {
  const [isLogin, setIsLogin] = useState(true);

  const login = () => {
    setIsLogin(true);
  };

  const logOut = () => {
    setIsLogin(false);
  };

  return (
    <UserContext.Provider value={{ isLogin, login, logOut }}>
      {Children}
    </UserContext.Provider>
  );
}
