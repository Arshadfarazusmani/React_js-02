import React from 'react';
import { Link, useParams } from 'react-router-dom';

// --- User Profile Page Component ---
// This component provides the UI for the user's profile,
// allowing them to view and manage their information and orders.
const UserProfilePage = () => {
  // Get the user ID from the URL parameters
  const { id } = useParams();

  // Sample user data
  const users = [
    {
      id: '01',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      memberSince: 'January 2023',
    },
    {
      id: '02',
      name: 'John Smith',
      email: 'john.smith@example.com',
      memberSince: 'February 2023',
    },
    {
      id: '03',
      name: 'Ali Khan',
      email: 'ali.khan@example.com',
      memberSince: 'March 2023',
    },
    {
      id: '04',
      name: 'Fatima Ahmed',
      email: 'fatima.ahmed@example.com',
      memberSince: 'April 2023',
    },
    {
      id: '05',
      name: 'Muhammad Ali',
      email: 'm.ali@example.com',
      memberSince: 'May 2023',
    },
    {
      id: '06',
      name: 'Sara Khan',
      email: 'sara.k@example.com',
      memberSince: 'June 2023',
    },
    {
      id: '07',
      name: 'Omar Farooq',
      email: 'o.farooq@example.com',
      memberSince: 'July 2023',
    },
    {
      id: '08',
      name: 'Layla Hasan',
      email: 'l.hasan@example.com',
      memberSince: 'August 2023',
    },
    {
      id: '09',
      name: 'Yusuf bin Alawi',
      email: 'y.alawi@example.com',
      memberSince: 'September 2023',
    },
    {
      id: '10',
      name: 'Aisha Omar',
      email: 'a.omar@example.com',
      memberSince: 'October 2023',
    },
  ];

  // Find the user with the matching ID
  const user = users.find(u => u.id === id);

  // If no user is found, display a message
  if (!user) {
    return (
      <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16 text-center">
        <h1 className="text-5xl font-bold font-serif mb-4">User not found</h1>
        <p className="text-lg">Please check the user ID and try again.</p>
      </div>
    );
  }

  // Sample order history data
  const orderHistory = [
    { id: 'ORD-12345', date: '2024-05-15', total: 1350, status: 'Delivered', items: 2 },
    { id: 'ORD-67890', date: '2024-03-22', total: 800, status: 'Shipped', items: 1 },
  ];

  return (
    <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-bold text-center font-serif mb-12">My Profile</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* User Details Section */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-xl h-fit">
            <h2 className="text-3xl font-semibold font-serif mb-4">Account Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#a18a7c]">Name</p>
                <p className="text-lg font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-[#a18a7c]">Email</p>
                <p className="text-lg font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#a18a7c]">Member Since</p>
                <p className="text-lg font-medium">{user.memberSince}</p>
              </div>
            </div>
            <Link to="/edit-profile" className="mt-6 block">
              <button className="bg-[#4a342b] text-[#e0c9a4] font-semibold py-2 px-6 rounded-full w-full shadow-lg transition-transform duration-300 hover:scale-105">
                Edit Profile
              </button>
            </Link>
          </div>

          {/* Order History Section */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-semibold font-serif mb-4">Order History</h2>
            {orderHistory.length > 0 ? (
              <div className="space-y-4">
                {orderHistory.map(order => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-md text-[#888]">You have no past orders.</p>
              </div>
            )}
            
            <Link to="/orders" className="block text-center mt-6">
              <button className="bg-[#e0c9a4] text-[#4a342b] font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                View All Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Order Card Component ---
// Renders a single order summary.
const OrderCard = ({ order }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#4a342b] font-serif">Order #{order.id}</h3>
        <p className="text-sm text-[#888]">Placed on {order.date}</p>
        <p className="text-lg font-medium mt-2">Total: Rs. {order.total}</p>
      </div>
      <div className="text-right">
        <span className="inline-block bg-[#4a342b] text-[#e0c9a4] text-xs font-semibold px-2 py-1 rounded-full">
          {order.status}
        </span>
        <Link to={`/order/${order.id}`} className="block mt-2 text-sm text-[#4a342b] hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default UserProfilePage;
