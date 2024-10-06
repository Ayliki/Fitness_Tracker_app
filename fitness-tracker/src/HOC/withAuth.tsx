import { ComponentType, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent: ComponentType<any>) => {
  const AuthComponent = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
          setIsAuthenticated(loggedIn);
        } catch (error) {
          console.error('Error checking authentication:', error);
        } finally {
          setIsLoading(false); // Stop loading state regardless of result
        }
      };
      checkAuth();
    }, []);

    if (isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="spinner">Loading...</div> {/* Add spinner CSS or component */}
        </div>
      );
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;