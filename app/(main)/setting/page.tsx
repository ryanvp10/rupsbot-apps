export default function Setting() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p className="text-gray-600">Selamat datang di panel utama aplikasi Anda.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg border">Statistik 1</div>
        <div className="p-4 bg-white shadow rounded-lg border">Statistik 2</div>
        <div className="p-4 bg-white shadow rounded-lg border">Statistik 3</div>
      </div>
    </div>
  );
}