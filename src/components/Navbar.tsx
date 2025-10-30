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
  Building2
} from "lucide-react";
import { Link } from "react-scroll";

const Navbar = (mode: { mode: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  const navItems = [
    { title: "Home", href: "home", icon: Home },
    { title: "Experties", href: "experties", icon: BookOpenCheck },
    { title: "Experience", href: "experience", icon: Building2},
    { title: "Profile", href: "profile", icon: FolderGit},
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
          mode.mode === "dark" ? "black" : "white"
        } bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full`}
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
                mode={mode.mode}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 px-4 pb-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <span className="flex items-center">
                    <item.icon className="h-6 w-6" />
                    <span className="ml-2">{item.title}</span>
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface NavItemProps {
  mouseX: MotionValue<number>;
  title: string;
  href: string;
  icon: LucideIcon;
  mode: string;
}

const NavItem = ({ mouseX, title, href, icon: Icon, mode }: NavItemProps) => {
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
          className="absolute inset-0 flex items-center justify-center text-white"
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
