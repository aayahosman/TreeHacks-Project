import React, { useState } from "react";
import { Search } from "lucide-react";

const Messages = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="flex h-screen w-screen bg-white">
  {/* Left Sidebar */}
      <aside className="w-[300px] border-r border-gray-200 bg-white">
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Message</h2>
          
          {/* Search */}
          <div className="mb-6 flex items-center rounded-full bg-purple-100 px-4 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>

          {/* Friends List */}
          <div className="space-y-2">
            {["Alice", "Bob", "Charlie"].map((friend) => (
              <div
                key={friend}
                onClick={() => handleProfileClick(friend)}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-purple-100"
              >
                <img
                  src="images/pfp.png"
                  alt={friend}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{friend}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    Hey, have you noticed how much...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="flex items-center border-b border-gray-200 p-4">
          <img
            src="images/cat1.png"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="font-medium">Alice</h3>
            <p className="text-sm text-gray-500">Online 7m ago</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          <div className="flex">
            <div className="max-w-[70%] rounded-2xl bg-purple-100 px-4 py-2">
            Hey, I just found an amazing mentorship program on ConnectHer!
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-2xl bg-gray-100 px-4 py-2">
            That’s awesome! What kind of mentorship are you looking for?
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[70%] rounded-2xl bg-purple-100 px-4 py-2">
            I’m interested in tech! Looking for someone who can guide me in software development.
            </div>
          </div>

          <div className="flex">
            <div className="max-w-[70%] rounded-2xl bg-purple-100 px-4 py-2">
            ConnectHer has a whole section on that! I saw a webinar on frontend development happening next week.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-2xl bg-gray-100 px-4 py-2">
            That sounds great! I’ll check it out. Thanks for the recommendation!
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-2xl bg-gray-100 px-4 py-2">
              🔊 Audio Message
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-gray-200 px-4 py-2 outline-none focus:border-purple-300"
            />
            <button className="rounded-full bg-purple-100 px-6 py-2 font-medium hover:bg-purple-200">
              Send
            </button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      {selectedProfile && (
        <aside className="w-[300px] border-l border-gray-200 bg-white p-4">
          <div className="flex flex-col items-center">
            <img
              src="images/pfp.png"
              alt={selectedProfile}
              className="mb-4 h-20 w-20 rounded-full"
            />
            <h3 className="mb-1 text-lg font-medium">{selectedProfile}</h3>
            
            <div className="mt-6 w-full space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{selectedProfile.toLowerCase()}@gmail.com</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Phone number</p>
                <p className="font-medium">(123) 456-7890</p>
              </div>

              <div className="space-y-2">
                {["Information", "Chat setting", "File, Attachments", "Link"].map((option) => (
                  <details key={option} className="cursor-pointer">
                    <summary className="py-1 font-medium">{option}</summary>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Messages;