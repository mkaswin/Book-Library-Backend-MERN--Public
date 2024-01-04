
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Sign from './Sign';
import Register from './Register';
import Sidenav from './Sidenav';



import Clientreg from './CLIENT/Clientreg';
import Clienttable from './CLIENT/Clienttable';
import Updateclient from './CLIENT/Updateclient';
import Customerreg from './Customer/Customerreg';
import Customeratable from './Customer/Customeratable';
import Customerview from './Customer/Customerview';
import Customerupdate from './Customer/Customerupdate';
import Viewclient from './CLIENT/Viewclient';

import Reg from './BOOKDETAIL/Reg';
import Booktb from './BOOKDETAIL/Booktb';
import Views from './BOOKDETAIL/Views';
import Tab from './BOOKDETAIL/Tab';







function App() {
  return (
    <div>
     
    
      <BrowserRouter>
      
      <Mainpage/>
      
      <Routes>


      <Route path='/' element={''}></Route>
      
      <Route path='/Sign' element={<Sign/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/Sidenav' element={<Sidenav/>}></Route>
      
      

      </Routes>
      <Routes>
        <Route path='/bkreg' element={<Reg/>}></Route>
        <Route path='/tablebook' element={<Booktb/>}></Route>
        <Route path='/bkview/:id' element={<Views/>}></Route>
        <Route path='/update/:id' element={<Tab/>}></Route>
        
       
        
       
       
        <Route path='/clientreg' element={<Clientreg/>}></Route>
        <Route path='/clienttab' element={<Clienttable/>}></Route>
        <Route path='/clview/:id' element={<Viewclient/>}></Route>
        <Route path='/clientupdate/:id' element={<Updateclient/>}></Route>
        <Route path='/customreg' element={<Customerreg/>}></Route>
        <Route path='/customtable' element={<Customeratable/>}></Route>
       
        <Route path='/csview/:id' element={<Customerview/>}></Route>
        <Route path='/cusupdate/:id' element={<Customerupdate/>}></Route>
      </Routes>
      
      

      
      </BrowserRouter>
     

    </div>
  

  
  );
}

export default App;
