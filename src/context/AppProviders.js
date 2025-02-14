import QuestionsProvider from "./QuestionsContext";
import UserProvider from "./AuthContext";

export default function AppProviders({ children }) {
  return (
    <UserProvider>
      <QuestionsProvider>{children}</QuestionsProvider>
    </UserProvider>
  );
}
