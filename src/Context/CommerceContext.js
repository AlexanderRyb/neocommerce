import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, ref, set, get, update } from "firebase/database"; // Changed!

import { auth } from "../config/firebase";

const CommerceContext = createContext();

export const CommerceProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Start with null.  onAuthStateChanged will set
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userRef = ref(getDatabase(), `users/${currentUser.uid}`); 
          const snapshot = await get(userRef); 
          if (snapshot.exists()) {
            const userData = snapshot.val(); 
            setCart(userData.cart || []);
            setWishlist(userData.wishlist || []);
            setHistory(userData.history || []);
          } else {
            // Initialize user data in Realtime Database if it doesn't exist
            await set(userRef, {
              cart: [],
              wishlist: [],
              history: [],
            });
            setCart([]);
            setWishlist([]);
            setHistory([]);
          }
        } catch (error) {
          console.error("Error fetching/setting user data:", error);
        }
      } else {
        setUser(null);
        setCart([]);
        setWishlist([]);
        setHistory([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //REALTIME DATABASE USAGE
    const db = getDatabase(); // Get Realtime Database instance
    await set(ref(db, `users/${userCredential.user.uid}`), {  // Use set to write
      cart: [],
      wishlist: [],
      history: [],
    });
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!"); // Log statement for success
    } catch (error) {
      console.error("Login failed inside login function:", error); // Log inside the login function
      throw error; // Rethrow error to be caught in handleSubmit
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setCart([]);
    setWishlist([]);
    setHistory([]);
  };

  const updateUserData = async (field, data) => {
    if (!user) return;
    const db = getDatabase();  // Get Realtime Database instance
    const userRef = ref(db, `users/${user.uid}`); //REALTIME DATABASE USAGE
    await update(userRef, { [field]: data }); //REALTIME DATABASE USAGE
  };

  return (
    <CommerceContext.Provider
      value={{
        user,
        cart,
        wishlist,
        history,
        login,
        signup,
        logout,
        updateUserData,
        setCart,
        setWishlist,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export const useContextStore = () => useContext(CommerceContext);
