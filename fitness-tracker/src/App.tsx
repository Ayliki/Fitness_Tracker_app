import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import ActivityLog from "./Components/ActivityLog/ActivityLog";
import StatsPage from "./Pages/StatsPage/StatsPage";
import Profile from "./Components/Profile/Profile";
import Registration from "./Components/Profile/Registration";
import withAuth from './HOC/withAuth';
import { AuthProvider } from "./Context/AuthContext";

function App() {

  const sampleData = [
    { date: '2024-09-01', steps: 5328, calories: 221, distance: 4.6 },
    { date: '2024-09-02', steps: 7508, calories: 288, distance: 6.1 },
    { date: '2024-09-03', steps: 6004, calories: 256, distance: 5.2 },
    { date: '2024-09-04', steps: 8545, calories: 325, distance: 7.4 },
    { date: '2024-09-05', steps: 9036, calories: 344, distance: 7.8 },
    { date: '2024-09-06', steps: 10023, calories: 423, distance: 8.3 },
    { date: '2024-09-07', steps: 12102, calories: 560, distance: 9.7 },
  ];

  const latestData = sampleData[sampleData.length - 1];

  const ProtectedDashboard = withAuth(Dashboard);
  const ProtectedStatsPage = withAuth(StatsPage);
  const ProtectedActivityLog = withAuth(ActivityLog);


  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainPage data={sampleData} latestData={latestData} />} />
        <Route path="/login" element={<Profile />} /> 
        <Route path="/register" element={<Registration />} /> 
        <Route path="/profile" element={<Profile />} /> 

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={<ProtectedDashboard data={sampleData} latestData={latestData} />} 
        />
        <Route 
          path="/stats" 
          element={<ProtectedStatsPage data={sampleData} latestData={latestData} />} 
        />
        <Route 
          path="/activity-log" 
          element={<ProtectedActivityLog activityData={sampleData} />} 
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
