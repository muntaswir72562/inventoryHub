const table = () => {
    return (  
        <div>

<div class="p-5 h-screen bg-gray-100">
        <div className="lg:flex lg:items-center lg:justify-between mx-20">
          <span class="font-bold">Recent</span>
          {/* dropdown */}
        </div>
      
        <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
          <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">INV001</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">INV002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">INV002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        </tbody>
      </table>
      </div>
        </div>
    );
}
 
export default table;