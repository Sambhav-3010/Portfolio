import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { Button } from "./ui/button";
import {
  Home,
  BookOpenCheck,
  FolderGit,
  type LucideIcon,
  Menu,
  Building2,
  SunIcon,
  MoonIcon
} from "lucide-react";
import { Link } from "react-scroll";

const Navbar = ({mode, setMode} : {mode : string, setMode: React.Dispatch<React.SetStateAction<string>>}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  const navItems = [
    { title: "Home", href: "home", icon: Home },
    { title: "Experties", href: "experties", icon: BookOpenCheck },
    { title: "Experience", href: "experience", icon: Building2 },
    { title: "Profile", href: "profile", icon: FolderGit },
    { title: "Theme", href: "theme", icon: mode === "dark" ? SunIcon : MoonIcon, onClick: () => setMode(mode === "dark" ? "light" : "dark") },
  ];

  return (
    <motion.div
      className="fixed z-50"
      initial={{ top: 80, left: "50%", x: "-50%" }}
      animate={{
        top: 20,
        left: "50%",
        x: "-50%",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      }}
    >
      <div
        className={`bg-${
          mode === "dark" ? "black" : "white"
        } bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full flex items-center`}
      >
        <nav
          className={`container mx-auto flex justify-center items-center px-4 transition-all duration-300`}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          <div className={`hidden md:flex space-x-8 items-end pb-3`}>
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                mouseX={mouseX}
                {...item}
                mode={mode}
              />
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${mode === "dark" ? "text-white" : "text-gray-800"}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 h-full w-64 ${
              mode === "dark" ? "bg-gray-900" : "bg-white"
            } shadow-lg p-5 md:hidden z-50`}
          >
            <div className="flex justify-end mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className={`${mode === "dark" ? "text-white" : "text-gray-800"}`}
              >
                <Menu className="h-6 w-6 rotate-90" /> {/* Close icon, or just Menu rotated */}
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`block py-2 px-4 ${
                    mode === "dark"
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-800 hover:bg-gray-200"
                  } rounded-lg transition-all duration-300 cursor-pointer`}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    }
                    setIsOpen(false); // Close sidebar on item click
                  }}
                >
                  <span className="flex items-center">
                    <item.icon className="h-6 w-6" />
                    <span className="ml-3 text-lg font-medium">{item.title}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface NavItemProps {
  mouseX: MotionValue<number>;
  title: string;
  href: string;
  icon: LucideIcon;
  mode: string;
  onClick?: () => void;
}

const NavItem = ({ mouseX, title, href, icon: Icon, mode, onClick }: NavItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className={`bg-${
          mode === "dark" ? "neutral-800" : "white"
        } bg-opacity-10 backdrop-filter backdrop-blur-lg relative flex items-center justify-center rounded-full`}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
          initial={{ scale: 1.2 }}
          animate={{ scale: isHovered ? 1.5 : 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="absolute -left-24 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default Navbar;
