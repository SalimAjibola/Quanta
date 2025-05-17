import React, { useState } from "react";
import {
  Home,
  Compass,
  Clock,
  Video,
  Download,
  History,
  Star,
  BadgeCheck,
  Cog,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0A0C10] font-sans text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-[#12141A] p-6 flex-col z-50 overflow-y-auto">
        <div>
          <h1 className="text-3xl font-bold mb-8 text-purple-500">QUANTA</h1>
          <nav className="space-y-4">
            <div className="text-sm text-gray-400 uppercase mb-2">Menu</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-purple-400 font-medium">
                <Home size={18} /> Home
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Compass size={18} /> Discover
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock size={18} /> Coming Soon
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Video size={18} /> Shorts
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Library</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Download size={18} /> Downloaded
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <History size={18} /> Recently Added
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Star size={18} /> Top Rated
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <BadgeCheck size={18} /> Subscription
                <span className="ml-auto text-xs bg-purple-600 px-2 py-0.5 rounded-full">NEW</span>
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Others</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Cog size={18} /> Settings
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <HelpCircle size={18} /> Help
              </li>
            </ul>
          </nav>
        </div>
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition mt-10">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Sidebar for mobile */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#12141A] p-6 flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1 className="text-3xl font-bold mb-8 text-purple-500">QUANTA</h1>
          <nav className="space-y-4">
            <div className="text-sm text-gray-400 uppercase mb-2">Menu</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-purple-400 font-medium">
                <Home size={18} /> Home
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Compass size={18} /> Discover
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock size={18} /> Coming Soon
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Video size={18} /> Shorts
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Library</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Download size={18} /> Downloaded
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <History size={18} /> Recently Added
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Star size={18} /> Top Rated
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <BadgeCheck size={18} /> Subscription
                <span className="ml-auto text-xs bg-purple-600 px-2 py-0.5 rounded-full">NEW</span>
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Others</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Cog size={18} /> Settings
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <HelpCircle size={18} /> Help
              </li>
            </ul>
          </nav>
        </div>
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 bg-[#0A0C10] overflow-y-auto md:ml-60 w-full">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:flex gap-4">
            <button className="text-purple-500 font-semibold">For You</button>
            <button className="text-gray-400">TV Shows</button>
            <button className="text-gray-400">Watched</button>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search music, artist, albums..."
              className="bg-[#1A1C22] text-white px-4 py-2 rounded-full focus:outline-none w-40 sm:w-64"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-full font-medium text-sm">Create</button>
          </div>
        </div>

        {/* Content continues... */}
        {/* Hero Banner */}
        <div className="relative mb-10">
          <img
            src="https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
            alt="Banner"
            className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-bold">Avengers Age of Ultron</h3>
            <p className="text-sm text-gray-300">Silver TV · 67k views · 9 hours ago</p>
          </div>
        </div>

        {/* Trending Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Trending Video</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "JoJo’s Bizarre Adventure",
                img: "https://media.themoviedb.org/t/p/w220_and_h330_face/nRfhgnDmmoJrTuUZBeDAo5OKUYU.jpg",
              },
              {
                title: "Rainmaker",
                img: "https://media.themoviedb.org/t/p/w220_and_h330_face/cDQVS47ZiA3TsoIU6iTWhgZikoc.jpg",
              },
              {
                title: "Locke & Key",
                img: "https://media.themoviedb.org/t/p/w220_and_h330_face/yAYTYRgPVPHfcPVe70y7xkPrK2i.jpg",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl object-cover h-44 w-full"
                />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <button className="text-sm bg-purple-600 px-2 py-1 rounded mt-1">Watch</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Watching */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Vikings",
                img: "https://www.themoviedb.org/tv/44217-vikings/images/postershttps://media.themoviedb.org/t/p/w220_and_h330_face/u3oInkxcnNV2pZQbkFY3ovHYExR.jpg",
              },
              {
                title: "Good Doctor",
                img: "https://media.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
              },
              {
                title: "Resident Evil",
                img: "https://media.themoviedb.org/t/p/w220_and_h330_face/bJXqRRb87ObiJZh8dKLFz6DO9TZ.jpg",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl object-cover h-44 w-full"
                />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">Season 1</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Right Panel (hidden on small screens) */}
      <aside className="hidden lg:block w-72 bg-[#12141A] p-6 border-l border-[#ffffff10]">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold">Dray Olakunle</h4>
            <span className="text-xs text-yellow-400">Premium — 💛</span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-2 mb-6">
          {["Action", "Music", "Comedy", "Nollywood", "Documentary", "Podcast"].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm ${
                i === 0 ? "bg-purple-600 text-white" : "bg-[#1A1C22] text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-sm text-gray-400 mb-3">Comments</h3>
          <div className="space-y-4 text-sm">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <img
                  src={`https://randomuser.me/api/portraits/lego/${i}.jpg`}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">@user{i}</p>
                  <p className="text-gray-400 text-xs mb-1">
                    This movie is very interesting. Silver TV nailed it.
                  </p>
                  <span className="text-xs text-gray-500">Reply · {i + 1} hour ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
