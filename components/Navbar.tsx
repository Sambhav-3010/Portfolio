import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  BookOpenCheck,
  FolderGit,
  type LucideIcon,
  Menu,
  Building2,
  SunIcon,
  MoonIcon,
  X
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
    <>
      <motion.div
        className="fixed z-50 w-full md:w-auto px-4 md:px-0"
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
          className={`${
            mode === "dark" 
              ? "bg-black/10 border-white/10" 
              : "bg-white/10 border-gray-200/20"
          } backdrop-blur-lg rounded-xl md:rounded-full border mx-auto w-full md:w-auto`}
        >
          <nav
            className="flex justify-between md:justify-center items-center px-4 md:px-6 py-3"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <NavItem
                  key={item.title}
                  mouseX={mouseX}
                  {...item}
                  mode={mode}
                />
              ))}
            </div>
            
            <div className="md:hidden flex items-center justify-between w-full">
              <span className={`text-lg font-semibold ${mode === "dark" ? "text-white" : "text-gray-800"}`}>
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`${mode === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-200/50"}`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </nav>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 left-0 h-full w-72 ${
                mode === "dark" ? "bg-gray-900" : "bg-white"
              } shadow-2xl z-50 md:hidden`}
            >
              <div className={`flex justify-between items-center p-6 border-b ${mode === "dark" ? "border-gray-800" : "border-gray-200"}`}>
                <span className={`text-xl font-bold ${mode === "dark" ? "text-white" : "text-gray-800"}`}>
                  Navigation
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className={`${mode === "dark" ? "text-white hover:bg-gray-800" : "text-gray-800 hover:bg-gray-100"}`}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={`flex items-center py-3 px-4 ${
                      mode === "dark"
                        ? "text-white hover:bg-gray-800"
                        : "text-gray-800 hover:bg-gray-100"
                    } rounded-xl transition-all duration-300 cursor-pointer group`}
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                      }
                      setIsOpen(false);
                    }}
                  >
                    <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="ml-3 text-base font-medium">{item.title}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className={`${
          mode === "dark" ? "bg-neutral-800/50" : "bg-white/50"
        } backdrop-blur-lg relative flex items-center justify-center rounded-full`}
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
              className={`absolute -left-24 top-1/2 transform -translate-y-1/2 px-3 py-1.5 ${
                mode === "dark" ? "bg-gray-900" : "bg-black"
              } text-white text-xs rounded-lg whitespace-nowrap shadow-lg`}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default Navbar
