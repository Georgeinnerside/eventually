import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {} from "lucide-react";

// navlink gives an isActive an automatic boolean
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
  { name: "Book", path: "/book" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b-zinc-500">
      <div className="bg-white flex justify-between items-center p-3">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-800 via-purple-800 to-pink-950 text-transparent bg-clip-text">
          EvenTually
        </h1>
        {/* desktop view */}
        <ul className="hidden md:flex gap-6">
          {NavItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors py-2 px-4 rounded-lg decoration-0 ${
                    isActive
                      ? "text-xl bg-pink-950 text-gray-100 hover:bg-pink-900"
                      : "text-xl text-gray-700 hover:text-pink-950"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile view */}
        <div className="md:hidden gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              {open ? (
                <X className="h-6 w-6 text-pink-900" />
              ) : (
                <Menu className="h-6 w-6 text-pink-900" />
              )}
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-white p-6 slide-in-from-left-50"
            >
              <ul className="flex flex-col gap-4 mt-6">
                {NavItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block transition-colors py-2 px-4 rounded-lg ${
                          isActive
                            ? "bg-pink-950 text-gray-100 hover:bg-pink-900"
                            : "text-gray-700 hover:text-pink-950"
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
