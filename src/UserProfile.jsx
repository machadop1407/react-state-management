import React, { useContext } from "react";
import { UserContext } from "./contexts/Context API/user-context-provider";
import { useUserStore } from "./contexts/zustand/useUserStore";

function UserProfile() {
  const { user, login, logout } = useUserStore();
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
