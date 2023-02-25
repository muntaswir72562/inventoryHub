import useNewFetch from "../../hooks/useNewFetch";
const Dashboard = () => {
  const { data, pending } = useNewFetch("http://localhost/inventoryhubphp/");
  let total_sales = 0;
  let no_of_purchase = 0;
  let no_of_customers = 0;
  let no_of_suppliers = 0;
  let purchase_amount = 0;
  let revenue = 0;
  let cost = 0;
  let profit = 0;
  let revenueString = "";

  const calRevenue = (string) => {
    const arr = string.split("$");
    for (let i = 1; i < arr.length; i++) {
      revenue += parseInt(arr[i]);
    }
  };

  if (!pending) {
    data[0][0].forEach((sale_order) => {
      no_of_customers++;
      total_sales += sale_order.quantity;
      revenueString += sale_order.amount;
    });
    calRevenue(revenueString);

    data[1][0].forEach((payment) => {
      cost = payment.cost;
    });

    data[2][0].forEach((purchase) => {
      no_of_purchase += purchase.purchase_quantity;
      purchase_amount += purchase.purchase_amount;
    });
    profit = revenue - cost;

    no_of_suppliers = data[3][0].length;
  }

  return (
    <section className="container bg-gray-300 mt-7 p-3">
      <div className="container__wrapper">
        <div className="sales__overview bg-white rounded-md col-span-2 row-span-3">
          <p className="overview__title">Sales Overview</p>
          <div className="overview__container h-3/4 flex items-center justify-center">
            <div className="card total__sales">
              <div className="card__icon">
                <img src="../../icons/sale.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Total Sales</div>
                <div className="card__element">{total_sales}</div>
              </div>
            </div>
            <div className="card revenue">
              <div className="card__icon">
                <img src="../../icons/profit-up.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Revenue</div>
                <div className="card__element">{`$ ${revenue}`}</div>
              </div>
            </div>
            <div className="card cost">
              {" "}
              <div className="card__icon">
                <img src="../../icons/low-prices.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Cost</div>
                <div className="card__element">{`$ ${cost}`}</div>
              </div>
            </div>
            <div className="card profit">
              <div className="card__icon">
                <img src="../../icons/assets.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Profit</div>
                <div className="card__element">{`$ ${profit}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="purchase__overview bg-white rounded-md">
          <p className="overview__title">Purchase Overview</p>
          <div className="overview__container">
            <div className="card purchases">
              <div className="card__icon">
                <img src="../../icons/shopping-bag.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">No of Purchase</div>
                <div className="card__element">{no_of_purchase}</div>
              </div>
            </div>
            <div className="card revenue">
              <div className="card__icon">
                <img src="../../icons/assets.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Cost</div>
                <div className="card__element">{`$ ${purchase_amount}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory__overview bg-white rounded-md row-span-3">
          <p className="overview__title">Inventory Summary</p>
          <div className="overview__container__overwrite h-1/2 flex flex-col justify-around px-2">
            <div className="card inventory">
              <div className="card__icon">
                <img src="../../icons/logistics.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Quantity in Hand</div>
                <div className="card__element">{no_of_purchase}</div>
              </div>
            </div>
            <div className="card inventory__received">
              <div className="card__icon">
                <img src="../../icons/parachute.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Will be Received</div>
                <div className="card__element">{`53`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="users__overview bg-white rounded-md col-span-2">
          <p className="overview__title">No. of Users</p>
          <div className="overview__container">
            <div className="card users">
              <div className="card__icon">
                <img src="../../icons/logistics.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Total Customers</div>
                <div className="card__element">{no_of_customers}</div>
              </div>
            </div>
            <div className="card supplier">
              <div className="card__icon">
                <img src="../../icons/delivery-man.png" />
              </div>
              <div className="card__content">
                <div className="card__heading">Total Suppliers</div>
                <div className="card__element">{no_of_suppliers}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
