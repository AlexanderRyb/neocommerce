

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase"; 
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";


const CommerceContext = createContext();
export const CommerceProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
    });
    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };


  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");  // Log statement for success

    } catch (error) {
      console.error("Login failed inside login function:", error); // Log inside the login function
      throw error; // Rethrow error to be caught in handleSubmit
    }
  };

  
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");  // Clear stored user data
      setUser(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <CommerceContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </CommerceContext.Provider>
  );
};

export const useAuth = () => useContext(CommerceContext);