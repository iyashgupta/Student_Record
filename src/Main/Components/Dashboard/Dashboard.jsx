import React from 'react';
import DashBoardTopHeader from './DashboardTopHeader/DashBoardTopHeader';
import DashBoardBody from './DashBoardMainBody/DashBoardBody';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div>
            <DashBoardTopHeader />
        <main className="py-6 bg-surface-secondary">
            <DashBoardBody />
        </main>
    </div>
  );
}

export default Dashboard;
