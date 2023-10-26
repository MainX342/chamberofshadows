import races from "../assets/guide/races.webp";
import assa_talents from "../assets/guide/assassination.webp";
import stats from "../assets/guide/stats.webp";
import equipment from "../assets/guide/assa_sub_equip.webp";
import enchants from "../assets/guide/consumables.webp";
import assa_rotation from "../assets/guide/assa_rotation.webp";
import macro from "../assets/guide/macro.webp";
import out_talents from "../assets/guide/outlaw.webp";
import out_equip from "../assets/guide/outlaw_equip.webp";
import out_bones from "../assets/guide/outlaw_bones.webp";
import out_rotation from "../assets/guide/outlaw_rotation.webp";
import sub_talents from "../assets/guide/subtlety.webp";
import sub_rotation from "../assets/guide/sub_rotation.webp";

interface MenuItem {
  label: string;
  to: string;
  img: string;
}

const assaMenuItems: MenuItem[] = [
  { label: "Расы", to: "races", img: races.src },
  {
    label: "Таланты",
    to: "talents",
    img: assa_talents.src,
  },
  { label: "Характеристики", to: "attributes", img: stats.src },
  { label: "Экипировка", to: "equipment", img: equipment.src },
  { label: "Чары и расходники", to: "enchants", img: enchants.src },
  { label: "Ротация", to: "rotation", img: assa_rotation.src },
  { label: "Макросы", to: "macros", img: macro.src },
];

const outlawMenuItems: MenuItem[] = [
  { label: "Расы", to: "races", img: races.src },
  {
    label: "Таланты",
    to: "talents",
    img: out_talents.src,
  },
  { label: "Характеристики", to: "attributes", img: stats.src },
  { label: "Экипировка", to: "equipment", img: out_equip.src },
  { label: "Чары и расходники", to: "enchants", img: enchants.src },
  { label: "Кости", to: "bones", img: out_bones.src },
  { label: "Ротация", to: "rotation", img: out_rotation.src },
  { label: "Макросы", to: "macros", img: macro.src },
];

const subMenuItems: MenuItem[] = [
  { label: "Расы", to: "races", img: races.src },
  {
    label: "Таланты",
    to: "talents",
    img: sub_talents.src,
  },
  { label: "Характеристики", to: "attributes", img: stats.src },
  { label: "Экипировка", to: "equipment", img: equipment.src },
  { label: "Чары и расходники", to: "enchants", img: enchants.src },
  { label: "Ротация", to: "rotation", img: sub_rotation.src },
  { label: "Макросы", to: "macros", img: macro.src },
];

export { assaMenuItems, outlawMenuItems, subMenuItems };
