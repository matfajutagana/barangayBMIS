import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
//import Footer from './components/Footer'
import ProfileScreen from './screens/ProfileScreen'
import BlotterScreen from './screens/BlotterScreen'
import ViewProfileScreen from './screens/ViewProfileScreen'
import HomeScreen from './screens/HomeScreen'
import OfficialsScreen from './screens/OfficialsScreen'
import SKOfficialsScreen from './screens/SKOfficialsScreen'
import LoginScreen from './screens/LoginScreen'
import ResidentEditScreen from './screens/ResidentEditScreen'
import BlotterEditScreen from './screens/BlotterEditScreen'
import ImageEditScreen from './screens/ImageEditScreen'
import DashboardScreen from './screens/DashboardScreen'
import AdultResidents from './DashboardScreens/AdultResidents'
import CalamansiResidents from './DashboardScreens/CalamansiResidents'
import DeceasedResidents from './DashboardScreens/DeceasedResidents'
import FemaleResidents from './DashboardScreens/FemaleResidents'
import LanzonesResidents from './DashboardScreens/LanzonesResidents'
import MaleResidents from './DashboardScreens/MaleResidents'
import MansanasResidents from './DashboardScreens/MansanasResidents'
import NiyuganResidents from './DashboardScreens/NiyuganResidents'
import PalayanResidents from './DashboardScreens/PalayanResidents'
import RegisteredVoter from './DashboardScreens/RegisteredVoter'
import SampalocResidents from './DashboardScreens/SampalocResidents'
import SeniorResidents from './DashboardScreens/SeniorResidents'
import SinturisResidents from './DashboardScreens/SinturisResidents'
import Under18Residents from './DashboardScreens/Under18Residents'
import UnregisteredVoter from './DashboardScreens/UnregisteredVoter'
import TotalResidents from './DashboardScreens/TotalResidents'
import ClearanceScreen from './screens/ClearanceScreen'
import ViewClearanceScreen from './screens/ViewClearanceScreen'
import ClearanceDetailsScreen from './screens/ClearanceDetailsScreen'
import ResidencyScreen from './screens/ResidencyScreen'
import ViewResidencyScreen from './screens/ViewResidencyScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <main className="py-3">
          <Route path="/" component={LoginScreen} exact />
          <Route path="/profiling" component={ProfileScreen} exact />
          <Route path="/profile/:id" component={ViewProfileScreen} />
          <Route path="/home" component={HomeScreen} exact />
          <Route path="/SK" component={SKOfficialsScreen} exact />
          <Route path="/officials" component={OfficialsScreen} exact />
          <Route
            path="/admin/resident/:id/edit"
            component={ResidentEditScreen}
          />
          <Route path="/admin/blotter/:id/edit" component={BlotterEditScreen} />
          <Route path="/blotter" component={BlotterScreen} exact />
          <Route
            path="/admin/image/6024d751fdb580252cb09c81/edit"
            component={ImageEditScreen}
          />
          <Route path="/dashboard" component={DashboardScreen} exact />
          <Route path="/adult" component={AdultResidents} exact />
          <Route path="/calamansi" component={CalamansiResidents} exact />
          <Route path="/deceased" component={DeceasedResidents} exact />
          <Route path="/female" component={FemaleResidents} exact />
          <Route path="/lanzones" component={LanzonesResidents} exact />
          <Route path="/male" component={MaleResidents} exact />
          <Route path="/mansanas" component={MansanasResidents} exact />
          <Route path="/niyugan" component={NiyuganResidents} exact />
          <Route path="/palayan" component={PalayanResidents} exact />
          <Route path="/registered" component={RegisteredVoter} exact />
          <Route path="/sampaloc" component={SampalocResidents} exact />
          <Route path="/senior" component={SeniorResidents} exact />
          <Route path="/sinturis" component={SinturisResidents} exact />
          <Route path="/total" component={TotalResidents} exact />
          <Route path="/under" component={Under18Residents} exact />
          <Route path="/unregistered" component={UnregisteredVoter} exact />
          <Route path="/clearance" component={ClearanceScreen} exact />
          <Route path="/clearance/:id" component={ViewClearanceScreen} />
          <Route
            path="/clearanceScreen"
            component={ViewClearanceScreen}
            exact
          />
          <Route
            path="/clearanceDetails"
            component={ClearanceDetailsScreen}
            exact
          />

          <Route path="/residency" component={ResidencyScreen} exact />
          <Route path="/residency/:id" component={ViewResidencyScreen} />
          <Route
            path="/residencyScreen"
            component={ViewResidencyScreen}
            exact
          />
        </main>
        {
          //<Footer />
        }
      </Router>
    </div>
  )
}

export default App
