import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

const RecentlyAdded = () => {
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
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
  QUANTA
</h1>
          <nav className="space-y-4">
            <div className="text-sm text-gray-400 uppercase mb-2">Menu</div>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Home size={18} /> Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/discover" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Compass size={18} /> Discover
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/coming-soon" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Clock size={18} /> Coming Soon
                  <span className="ml-auto text-xs bg-purple-600 px-2 py-0.5 rounded-full">4</span>
                </NavLink>
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Library</div>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/downloaded" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Download size={18} /> Downloaded
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/recently-added" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <History size={18} /> Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/playlist" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Star size={18} /> Playlist
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/subscription" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <BadgeCheck size={18} /> Subscription
                  <span className="ml-auto text-xs bg-purple-600 px-2 py-0.5 rounded-full">NEW</span>
                </NavLink>
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Others</div>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/settings" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                >
                  <Cog size={18} /> Settings
                </NavLink>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <HelpCircle size={18} /> Help
              </li>
            </ul>
          </nav>
        </div>
        <NavLink to="/">
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition mt-10">
          <LogOut size={18} /> Logout
        </button>
        </NavLink>
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
              <li>
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Home size={18} /> Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/discover" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Compass size={18} /> Discover
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/coming-soon" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Clock size={18} /> Coming Soon
                </NavLink>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Video size={18} /> Shorts
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Library</div>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/downloaded" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Download size={18} /> Downloaded
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/recently-added" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <History size={18} /> Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/playlist" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Star size={18} /> Playlist
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/subscription" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <BadgeCheck size={18} /> Subscription
                  <span className="ml-auto text-xs bg-purple-600 px-2 py-0.5 rounded-full">NEW</span>
                </NavLink>
              </li>
            </ul>

            <div className="text-sm text-gray-400 uppercase mt-6 mb-2">Others</div>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/settings" 
                  className={({ isActive }) => 
                    `flex items-center gap-3 ${isActive ? 'text-purple-400 font-medium' : 'text-gray-300'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <Cog size={18} /> Settings
                </NavLink>
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
            <button className="bg-gradient-to-r from-purple-600 to-sky-600 px-4 py-2 rounded-full font-medium text-sm">Create</button>
          </div>
        </div>

        {/* Hero Banner */}
        {/* <div className="relative mb-10">
          <img
            src="https://image.tmdb.org/t/p/original/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg"
            alt="Banner"
            className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-bold">Avengers Age of Ultron</h3>
            <p className="text-sm text-gray-300">Silver TV · 67k views · 9 hours ago</p>
           <button className="bg-gradient-to-r from-purple-600 to-sky-600 px-4 py-2 rounded-full font-medium text-sm text-white">
  Reminder
</button>
          </div>
        </div> */}

        {/* Trending Section */}
        <section className="mb-10">
  <h2 className="text-xl font-semibold mb-4">Recently Added</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {[
      {
        title: "Oppenheimer",
        genre: "Biography, Drama",
        img: "https://image.tmdb.org/t/p/original/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        duration: "3h 0m",
      },
      {
        title: "Spider-Man: No Way Home",
        genre: "Action, Adventure",
        img: "https://image.tmdb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        duration: "2h 28m",
      },
      {
        title: "Everything Everywhere All at Once",
        genre: "Sci-Fi, Comedy",
        img: "https://image.tmdb.org/t/p/original/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        duration: "2h 19m",
      },
      {
        title: "John Wick: Chapter 4",
        genre: "Action, Thriller",
        img: "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        duration: "2h 49m",
      },
      {
        title: "The Batman",
        genre: "Crime, Mystery",
        img: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        duration: "2h 56m",
      },
      {
        title: "Top Gun: Maverick",
        genre: "Action, Drama",
        img: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        duration: "2h 11m",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative group bg-gray-900 rounded-xl overflow-hidden"
      ><NavLink 
      to="/payment">
        <img
          src={item.img}
          alt={item.title}
          className="rounded-xl object-cover h-44 w-full"
        />
        <div className="absolute bottom-3 left-3 right-3 bg-black bg-opacity-70 p-3 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-gray-300">{item.genre}</p>
              <p className="text-xs text-gray-300">{item.duration}</p>
            </div>
            <button className="text-xs bg-gradient-to-r from-purple-600 to-sky-600 px-3 py-1 rounded">
              Subscribe 👑
            </button>
          </div>
        </div>
        </NavLink>
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
                i === 0 ? "bg-gradient-to-r from-purple-600 to-sky-600 text-white" : "bg-[#1A1C22] text-gray-300"
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

export default RecentlyAdded;