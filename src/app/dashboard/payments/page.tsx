import { CheckCircle, AlertCircle } from "lucide-react";

const payments = [
  { name: "Rohit Sharma", amount: "₹1500", status: "Paid" },
  { name: "Amit Verma", amount: "₹1500", status: "Due" },
];

export default function PaymentsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Member</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-t">
                <td className="px-6 py-4">{p.name}</td>
                <td className="px-6 py-4">{p.amount}</td>
                <td className="px-6 py-4">
                  {p.status === "Paid" ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle size={16} /> Paid
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-600">
                      <AlertCircle size={16} /> Due
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
