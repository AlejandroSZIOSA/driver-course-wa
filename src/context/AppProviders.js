import QuestionsProvider from "./QuestionsContext";
import UserProvider from "./UserContext";

export default function AppProviders({ children }) {
  return (
    <UserProvider>
      <QuestionsProvider>{children}</QuestionsProvider>
    </UserProvider>
  );
}
