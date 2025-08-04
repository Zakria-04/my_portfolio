import { motion } from "framer-motion";
import Link from "next/link";

interface MobileNavProps {
  navData: { name: string; href: string }[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ navData, isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden"
    >
      <ul className="flex flex-col space-y-4 pb-4">
        {navData.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Link href={item.href}>
              <motion.a
                className="block py-2 text-slate-300 hover:text-white text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
