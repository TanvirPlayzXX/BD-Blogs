const QuikLink = ['Home',"About","Blog","Archived","Author","Contact"]
const Catagory = ["Lifestyle","Technology","Travel","Business","Economy","Sports"] ;
import { NavLink } from "react-router-dom";
const Foot = () => {


  return (
    <div className=" w-full">
      <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828]">About</h3>
            <p className="mt-4 text-sm text-[#667085]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p className="mt-4 text-sm text-[#667085]">
              <strong>Email:</strong> info@jstemplate.net
            </p>
            <p className="text-sm text-[#667085]">
              <strong>Phone:</strong> 880 123 456 789
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828]">Quick Link</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#667085]">
      {              QuikLink.map((v,i)=> <li key={i}><NavLink >{v}</NavLink></li>)}
            </ul>
          </div>
          
          {/* Category Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828]">Category</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#667085]">
            {              Catagory.map((v,i)=> <li key={i}><NavLink >{v}</NavLink></li>)}
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div className="bg-white dark:bg-[#242535] text-center p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#101828] dark:text-white">Weekly Newsletter</h3>
            <p className="mt-4 text-sm text-[#667085]">
              Get blog articles and offers via email.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-[#D0D5DD] rounded-md text-sm text-[#667085] dark:bg-[#181A2A] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full mt-4 px-4 py-2 bg-[#004AD7] dark:bg-[#4B6BFB] text-white text-sm font-semibold rounded-md hover:bg-[#003bb2]">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Foot Bottom */}
        <div className="border-t border-[#E4E7EC] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/24x24" alt="MetaBlog Logo" className="w-6 h-6" />
            <span className="text-sm font-semibold text-[#101828]">MetaBlog</span>
            <span className="text-sm text-[#667085]">@ JS Template 2023. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a className="text-sm text-[#667085] hover:text-[#101828]">Terms of Use</a>
            <a className="text-sm text-[#667085] hover:text-[#101828]">Privacy Policy</a>
            <a className="text-sm text-[#667085] hover:text-[#101828]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;