import { CheckCircle, AlertCircle, IndianRupee } from "lucide-react";

const payments = [
  { name: "Rohit Sharma", amount: 1500, status: "Paid" },
  { name: "Amit Verma", amount: 1500, status: "Due" },
  { name: "Neha Singh", amount: 2000, status: "Paid" },
];

export default function PaymentsPage() {
  const totalCollected = payments.filter(p => p.status === "Paid").reduce((a, b) => a + b.amount, 0);
  const totalDue = payments.filter(p => p.status === "Due").reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border rounded-xl p-6 flex items-center gap-4">
          <IndianRupee className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Collected</p>
            <p className="text-2xl font-bold">₹{totalCollected}</p>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-6 flex items-center gap-4">
          <AlertCircle className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Total Due</p>
            <p className="text-2xl font-bold">₹{totalDue}</p>
          </div>
        </div>
      </div>

      {/* Table */}
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
                <td className="px-6 py-4">₹{p.amount}</td>
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
