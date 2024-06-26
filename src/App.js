import './App.css';
import Erreur404 from './Pages/Erreur404/Erreur404';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Users from './Pages/Users/Users';
import Acceuil from './Pages/Acceuil/Acceuil';
import AddUser from './Pages/Users/AddUser';
import EditUser from './Pages/Users/EditUser';
import ListPatients from './Components/Patient/ListPatients';
import Patients from './Pages/Patient/Patients';
import NewFiche from './Pages/Patient/NewFiche';
import ListFiches from './Pages/Patient/ListFiches';
import EditFiche from './Pages/Patient/EditFiche';
import AddRendezVous from './Pages/RendezVous/AddRendezVous';
import ListRendezVous from './Pages/RendezVous/ListRendezVous';
import EditRendezVous from './Pages/RendezVous/EditRendezVous';
import DetailsPatient from './Pages/Patient/DetailsPatient';
import EditDetails from './Pages/Patient/EditDetails';

// import { useState } from "react";
// import { createContext } from "react";
// import OTPInput from './Components/resetPassword/OTPInput';
// import Reset from './Components/resetPassword/Reset';
// import Recovered from './Components/resetPassword/Recovered';

// export const RecoveryContext = createContext();



function App() {

  // const [page, setPage] = useState("login");
  // const [email, setEmail] = useState();
  // const [otp, setOTP] = useState();

 

  return (


    //  <RecoveryContext.Provider value={{ page, setPage, otp, setOTP, setEmail, email }}>
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/acceuil" element={<Acceuil></Acceuil>}></Route>

          <Route path="*" element={<Erreur404></Erreur404>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/users/add" element={<AddUser></AddUser>}></Route>
          <Route path="/users/edit/:id" element={<EditUser></EditUser>}></Route>

          <Route path="/listPatientsMed" element={<Patients></Patients>}></Route>
          <Route path="/NewFicheSec" element={<NewFiche></NewFiche>}></Route>
          <Route path="/listFichesSec" element={<ListFiches></ListFiches>}></Route>
          <Route path="/fiches/edit/:id" element={<EditFiche></EditFiche>}></Route>
          <Route path="/addRendezVous" element={<AddRendezVous></AddRendezVous>}></Route>
          <Route path="/listRendezVous" element={<ListRendezVous></ListRendezVous>}></Route>
          <Route path="/rendezVous/edit" element={<EditRendezVous></EditRendezVous>}></Route>
          <Route path="/detailsPatientMed" element={<DetailsPatient></DetailsPatient>}></Route>
          <Route path="/editDetailsPatMed" element={<EditDetails></EditDetails>}></Route>





          

          {/* <Route path="/otp" element={<OTPInput/>} ></Route>
        <Route path="/reset" element={<Reset />} ></Route>
        <Route path="/recovered" element={<Recovered />}></Route> */}

        </Routes>
      </BrowserRouter>
      // <div className="flex justify-center items-center">



    // </RecoveryContext.Provider>
  );
}

export default App;
