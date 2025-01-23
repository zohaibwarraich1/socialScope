export default function Admin() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="space-y-4">
          {/* Tabs List */}
          <div className="flex space-x-4 border-b pb-2">
            <button
              className="px-4 py-2 text-sm font-medium border-b-2 border-black"
              data-tab="users"
            >
              Users
            </button>
            <button
              className="px-4 py-2 text-sm font-medium"
              data-tab="settings"
            >
              Settings
            </button>
            <button
              className="px-4 py-2 text-sm font-medium"
              data-tab="notifications"
            >
              Notifications
            </button>
          </div>

          {/* Users Tab Content */}
          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-xl font-bold mb-2">User Management</h2>
              <p className="text-gray-600 mb-4">
                Manage your platform users here.
              </p>
              <div className="space-y-4">
                {/* Search Bar and Add Button */}
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
                  />
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                    Add User
                  </button>
                </div>

                {/* Table */}
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Role</th>
                        <th className="p-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((user) => (
                        <tr key={user} className="border-t">
                          <td className="p-2">User {user}</td>
                          <td className="p-2">user{user}@example.com</td>
                          <td className="p-2">Admin</td>
                          <td className="p-2 space-x-2">
                            <button className="text-blue-500 hover:underline">
                              Edit
                            </button>
                            <button className="text-red-500 hover:underline">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Tab Content */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-2">Platform Settings</h2>
            <p className="text-gray-600 mb-4">
              Manage your platform settings here.
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="site-name"
                  className="block text-sm font-medium"
                >
                  Site Name
                </label>
                <input
                  id="site-name"
                  type="text"
                  placeholder="SocialScope"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="support-email"
                  className="block text-sm font-medium"
                >
                  Support Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  placeholder="support@socialscope.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                Save Changes
              </button>
            </form>
          </div>

          {/* Notifications Tab Content */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-2">Notification Settings</h2>
            <p className="text-gray-600 mb-4">
              Manage your notification preferences.
            </p>
            <div className="space-y-4">
              {[
                "Email Notifications",
                "Push Notifications",
                "SMS Notifications",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span>{item}</span>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
