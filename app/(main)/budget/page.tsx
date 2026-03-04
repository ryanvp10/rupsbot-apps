export default function BudgetPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Budget Tracker</h1>
      <p className="text-gray-600">Kelola anggaran Anda di sini.</p>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-left">Kategori</th>
            <th className="p-3 text-left">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border-t">01 Mar 2026</td>
            <td className="p-3 border-t">Server AWS</td>
            <td className="p-3 border-t text-red-500">-$50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}