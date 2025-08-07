import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

library.add(fas);

const Dashboard = () => <h1>Dashboard Page</h1>;
const Sales = () => <h1>Sales Page</h1>;
const Costs = () => <h1>Costs Page</h1>;
const Payments = () => <h1>Payments Page</h1>;
const Finances = () => <h1>Finances Page</h1>;
const Messages = () => <h1>Messages Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Support = () => <h1>Support Page</h1>;

export default class App extends React.Component{
  render () {
      return (
        <div style={{ display: 'flex' }}>
          <Sidebar color="light" />
          <main style={{ paddingLeft: '110px', flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/costs" element={<Costs />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
        </div>
      )
  }
}
