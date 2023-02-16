import Header from "../components/header";
import Table from "../components/table";
const invoice = () => {
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Invoice", "Manage the store's invoice")}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          New Invoice
          {/* <a href="">New invoice</a> */}
        </button>
      </div>
      <Table/>
    </div>
  );
};

export default invoice;
