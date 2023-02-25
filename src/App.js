import { Routes, Route } from "react-router-dom";
import Invoice from "./pages/invoice";
import SideBar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import Dashboard from "./pages/dashboard/dashboard";
import Page from "./pages/page";
import Payment from "./pages/payment";
import Supplier from "./pages/supplier";
//import PurchaseOrder from "./pages/purchaseOrder";
//import User from "./pages/user";
import Product from "./pages/product";
//import SalesOrder from "./pages/salesOrder";

import NewSupplier from "./pages/new/newSupplier";
import NewPayment from "./pages/new/newPayment";

import UpdatePayment from "./pages/update/updatePayment";



function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="flex mt-3">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/page" element={<Page />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/supplier" element={<Supplier />} />
          {/* <Route path="/purchase" element={<PurchaseOrder />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
          <Route path="/product" element={<Product />} />
          {/* <Route path="/sales" element={<SalesOrder />} /> */}
          <Route path="/newSupplier" element={<NewSupplier />} />
          <Route path="/newPayment" element={<NewPayment />} />
          {/* <Route path="/updateSupplier" element={<UpdateSupplier />} /> */}
          <Route path="/updatePayment/:id" element={<UpdatePayment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
