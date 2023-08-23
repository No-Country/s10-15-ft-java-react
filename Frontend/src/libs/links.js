import { AiTwotoneSetting } from "react-icons/ai";
import { BiHelpCircle, BiSolidDashboard } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
//links file = array of links with their respective path-route, label and icon
export const links = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: BiSolidDashboard
  },
  {
    label: 'Inventario',
    route: '/inventario',
    icon: MdInventory
  },
  {
    label: 'Proveedores',
    route: '/proveedores',
    icon: BsFillPersonVcardFill
  },
  {
    label: 'Usuarios',
    route: '/usuarios',
    icon: HiUsers
  },
  {
    label: 'Configuracion',
    route: '/configuracion',
    icon: AiTwotoneSetting
  },
  {
    label: 'Ayuda',
    route: '/ayuda',
    icon: BiHelpCircle
  }
]