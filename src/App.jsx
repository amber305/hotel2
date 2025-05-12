import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'

// Customer Pages
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import Experience from './pages/Experience'
import About from './pages/About'

// Owner dashboard pages
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        {/* Show Navbar only for customer side */}
        {!isOwnerPath && <Navbar />}

        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<AllRooms />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />

              {/* Protected Customer Routes */}
              <Route 
                path="/my-bookings" 
                element={
                  <ProtectedRoute>
                    <MyBookings />
                  </ProtectedRoute>
                } 
              />

              {/* Protected Hotel Owner Routes */}
              <Route 
                path="/owner" 
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="add-room" element={<AddRoom />} />
                <Route path="list-room" element={<ListRoom />} />
              </Route>
            </Routes>
          </Suspense>
        </main>

        {/* Show Footer only for customer side */}
        {!isOwnerPath && <Footer />}
      </div>
    </ErrorBoundary>
  )
}

export default App


