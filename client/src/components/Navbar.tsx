import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { HandPlatter, MenuIcon, Moon, MoonIcon, PackageCheck, Search, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import Locationbtn from './Locationbtn';


export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-darknav  p-1 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex justify-between md:flex space-x-2 items-center text-2xl font-bold">
            {darkMode ?<img className="h-14 w-14 rounded-full" src="https://scontent.fdel1-7.fna.fbcdn.net/v/t39.30808-1/461157205_122194979270016131_8003047251824772498_n.jpg?stp=c16.0.349.349a_dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=10b96e&_nc_ohc=2fQyJIisy-sQ7kNvgGo-PSz&_nc_ht=scontent.fdel1-7.fna&_nc_gid=AzDjtOoj87er6g5OjkrrOuI&oh=00_AYDvMIGr6TIgc9Rfb0Cn8DwzjAz6sfmjJj49HBJUKpdn5A&oe=66F83304" alt="Logo" /> : <img className="h-16 w-16 rounded-full" src="https://th.bing.com/th/id/OIP.VNOIad-uj6h--uSCSfdkGQHaHa?rs=1&pid=ImgDetMain" alt="Logo" />}
            </Link>

          <Locationbtn/>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-gray-600 ">Home</Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-gray-600 ">About</Link>
            <Link to="/order" className="text-gray-800 dark:text-white hover:text-gray-600 ">Order</Link>
          </div>

          {/* Right Side: Profile Dropdown, Dark Mode, and Login/Logout */}
          <div className="hidden md:flex items-center space-x-8 ">

          <div className="relative flex items-center gap-2">
              <Input
                type="text"
                value={searchText}
                placeholder="Search restaurant by name, city & country"
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 shadow-lg"
              />
              <Search className="text-gray-500 absolute inset-y-2 left-2" onClick={() => navigate(`/search/${searchText}`)} />
              {/* <Button onClick={() => navigate(`/search/${searchText}`)} className="bg-orange hover:bg-hoverOrange">Search</Button> */}
            </div>

            {/* Dark Mode Toggle */}
            <Button variant="outline" size="icon"
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white focus:outline-none border p-2 "
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </Button>

            {/* Login/Logout Button */}

            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingCart />
              {/* {cart.length > 0 && (
                <Button
                  size={"icon"}
                  className="absolute -inset-y-3 left-2 text-xs rounded-full w-4 h-4 bg-red-500 hover:bg-red-500"
                >
                  {cart.length}
                </Button>
              )} */}
            </Link>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center text-sm focus:outline-none">
                  <img
                    className="h-9 w-9 rounded-full"
                    src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                    alt="User Avatar"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                          onClick={() => alert('Logging out')}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Login/Logout Button */}
            <Button variant="outline" className="bg-orange text-white rounded-lg dark:bg-darknav">
              <Link to="/login" className='px-4 py-2 '>
                Login
              </Link>
            </Button>



          </div>
          <div className="md:hidden lg:hidden mt-3">
            {/* Mobile responsive  */}
            <Moblienav />
          </div>
        </div>
      </div>
    </nav>
  );
}

const Moblienav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');

  };
  return (<>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='dark:text-white'>
          <MenuIcon size={18} />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <Button variant="outline" size="icon" onClick={toggleDarkMode} >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <User />
            <span>Profile</span>
          </Link>
          <Link
            to="/order/status"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <HandPlatter />
            <span>Order</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <ShoppingCart />
            <span>Cart (0)</span>
          </Link>
          {(
            <>
              <Link
                to="/admin/menu"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <SquareMenu />
                <span>Menu</span>
              </Link>
              <Link
                to="/admin/restaurant"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <UtensilsCrossed />
                <span>Restaurant</span>
              </Link>
              <Link
                to="/admin/orders"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <PackageCheck />
                <span>Restaurant Orders</span>
              </Link>
            </>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </>)
}