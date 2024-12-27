import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-50  border-t border-[2px] px-5 py-[6rem] lg:px-[10rem] text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-[1.4rem] mb-4">Contact</h3>
          <ul className="space-y-2 text-[1.2rem">
            <li>Webinars & Events</li>
            <li>Guides & Templates</li>
            <li>Articles</li>
            <li>Consultant Directory</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold  text-[1.4rem] mb-4">Information</h3>
          <ul className="space-y-2 text-[1.2rem]">
            <li>Terms & Conditions</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Media Spokesperson Section */}
        <div>
          <h3 className="font-bold  text-[1.4rem] mb-4">Media Spokesperson</h3>
          <ul className="space-y-2 text-[1.2rem]">
            <li>System Status</li>
            <li>Changelog</li>
            <li>Support Portal</li>
            <li>Refer a Friend</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold  text-[1.9rem] mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            {/* Replace text with actual icons or images */}
            <span className="text-2xl cursor-pointer">📘</span> {/* Facebook */}
            <span className="text-2xl cursor-pointer">📷</span>{" "}
            {/* Instagram */}
            <span className="text-2xl cursor-pointer">✖️</span>{" "}
            {/* X (Twitter) */}
          </div>
          <p className="text-sm text-gray-600">
            is the community-focused nonprofit donor management software built
            to deliver a better giving experience and help organizations thrive.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
