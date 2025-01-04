export default function Ordertable() {
  const data = [
    {
      id: 1001,
      name: "John Doe",
      date: "2025-01-01",
      status: "Pending",
      deadline: "2025-01-05",
    },
    {
      id: 1002,
      name: "Jane Smith",
      date: "2025-01-02",
      status: "Shipped",
      deadline: "2025-01-06",
    },
    {
      id: 1003,
      name: "Bob Johnson",
      date: "2025-01-03",
      status: "Delivered",
      deadline: "2025-01-07",
    },
    {
      id: 1004,
      name: "Alice Williams",
      date: "2025-01-04",
      status: "Cancelled",
      deadline: "2025-01-08",
    },
    {
      id: 1005,
      name: "Charlie Brown",
      date: "2025-01-05",
      status: "Pending",
      deadline: "2025-01-09",
    },
    {
      id: 1006,
      name: "John Doe",
      date: "2025-01-01",
      status: "Pending",
      deadline: "2025-01-05",
    },
    {
      id: 1007,
      name: "Jane Smith",
      date: "2025-01-02",
      status: "Shipped",
      deadline: "2025-01-06",
    },
    {
      id: 1008,
      name: "Bob Johnson",
      date: "2025-01-03",
      status: "Delivered",
      deadline: "2025-01-07",
    },
    {
      id: 1009,
      name: "Alice Williams",
      date: "2025-01-04",
      status: "Cancelled",
      deadline: "2025-01-08",
    },
    {
      id: 1010,
      name: "Charlie Brown",
      date: "2025-01-05",
      status: "Pending",
      deadline: "2025-01-09",
    },
  ];

  return (
    <div className="w-full max-h-[350px] overflow-x-auto">
      <table className="w-full flex-1 table-auto border ">
        <thead className=" bg-[#0E0E25] text-white uppercase text-sm ">
          <tr>
            <th className="px-4 py-2 text-center">order id</th>
            <th className="px-4 py-2 text-center">customer name</th>
            <th className="px-4 py-2 text-center">order date</th>
            <th className="px-4 py-2 text-center">status</th>
            <th className="px-4 py-2 text-center">deadline</th>
            <th className="px-4 py-2 text-center">actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr
              key={order.id}
              className="text-black text-sm bg-[#F3FBFF] border-b border-gray-200 hover:bg-gray-100 font-Cormorant font-medium"
            >
              <td className="px-4 py-2 text-center ">{order.id}</td>
              <td className="px-4 py-2 text-center">{order.name}</td>
              <td className="px-4 py-2 text-center">{order.date}</td>
              <td
                className={`px-4 py-2 text-center ${
                  order.status === "Shipped"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Delivered"
                    ? "bg-blue-100 text-blue-600"
                    : order.status === "Cancelled"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </td>
              <td className="px-4 py-2 text-center">{order.deadline}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button className="text-white bg-[#0E0E25] border rounded-md py-1 px-2 text-center cursor-pointer">
                    Update
                  </button>
                  <button className="text-white bg-[#0E0E25] border rounded-md py-1 px-2 text-center cursor-pointer">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
