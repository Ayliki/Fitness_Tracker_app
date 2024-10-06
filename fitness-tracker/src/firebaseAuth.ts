import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; 

// Log In function
export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Login error:', error.message);
    } else {
      console.error('Unknown error during login');
    }
    throw error;
  }
};

// Log Out function
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('Logged out successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Logout error:', error.message);
    } else {
      console.error('Unknown error during logout');
    }
    throw error;
  }
};

// Sign Up function
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Sign-up error:', error.message);
    } else {
      console.error('Unknown error during sign-up');
    }
    throw error;
  }
};