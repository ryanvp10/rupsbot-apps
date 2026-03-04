export default function SettingPage() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Account Settings</h1>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Username</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Admin Rupsbot" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="w-full p-2 border rounded-md" placeholder="admin@rupsbot.com" />
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md">Simpan Perubahan</button>
    </div>
  );
}