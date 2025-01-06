import { BellDotIcon } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  type: "success" | "error" | "info" | "warning";
  timestamp: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    message: "New order placed by John Doe.",
    type: "success",
    timestamp: "5 mins ago",
  },
  {
    id: 2,
    message: "Tailor request pending approval.",
    type: "info",
    timestamp: "10 mins ago",
  },
  {
    id: 3,
    message: "Payment for Order #123 failed.",
    type: "error",
    timestamp: "30 mins ago",
  },
  {
    id: 4,
    message: "Outfit delivery delayed.",
    type: "warning",
    timestamp: "1 hour ago",
  },
];

export default function NotificationDropdown() {
  const typeClasses = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
  };
  return (
    <div className="max-h-[300px]  overflow-x-auto">
      <div className="relative">
        <div className="w-80 bg-light p-4 rounded-md z-50">
          <div className="p-2 flex justify-between items-center border-b">
            <h2 className="text-2xl font-Cormorant text-dark">Notifications</h2>
            <BellDotIcon className="h-5 text-dark" />
          </div>
          <div className="flex flex-col gap-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 border rounded-2xl text-sm flex justify-between items-start ${
                  typeClasses[notification.type]
                }`}
              >
                <div>
                  <p>{notification.message}</p>
                  <span className="text-xs text-gray-500">
                    {notification.timestamp}
                  </span>
                </div>
                <button className="text-xs text-red-500 hover:underline">
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
