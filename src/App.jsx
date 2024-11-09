import "./App.css";
import UserProfile from "./UserProfile";
import { UserContextProvider } from "./contexts/Context API/user-context-provider";

function App() {
  return (
    <>
      <UserContextProvider>
        <UserProfile />
      </UserContextProvider>
    </>
  );
}

export default App;
