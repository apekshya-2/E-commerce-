import React from 'react'
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const { user } = useUser()

  return (
    <div className="bg-gradient-to-r from-[#1f0036] to-[#3f0d50] text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#2e1a47] p-8 rounded-xl shadow-xl w-full max-w-5xl grid md:grid-cols-2 gap-8">
        
        {/* Left: Contact Info */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold mb-6">Get in Touch with <span className="text-red-500">E-Shop</span></h2>
          <p className="mb-6 text-gray-300">Have a question or need support? We’re here to help.</p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Balkot, Bhaktapur, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>e.shop@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <span>9843520317</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <SignedOut>
            <p className="mb-4 text-red-400">Please sign in to send a message.</p>
            <SignInButton>
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Sign In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-gray-100 text-black"
                  defaultValue={user?.fullName || ''}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-gray-100 text-black"
                  defaultValue={user?.primaryEmailAddress?.emailAddress || ''}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message..."
                  className="w-full p-2 rounded bg-gray-100 text-black"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-2 rounded hover:opacity-90 transition">
                Send Message ✏️
              </button>
            </form>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Contact
