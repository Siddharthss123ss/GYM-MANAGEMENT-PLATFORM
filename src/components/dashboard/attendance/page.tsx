export default function AttendancePage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Attendance</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">📅</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Attendance System
          </h2>
          <p className="text-gray-600 mb-6">
            Track member attendance with QR codes and check-ins.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}