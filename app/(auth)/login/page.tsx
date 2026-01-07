export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4 text-black text-center">
          Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-purple-600 text-black rounded px-3 py-2 hover:border-purple-600"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-purple-600 text-black rounded px-3 py-2 hover:border-purple-600"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
