import React from "react";
import dynamic from "next/dynamic";

const Mail = dynamic<{ className?: string }>(() => import("./icons/mail.svg"));
const Whatsapp = dynamic<{ className?: string }>(() => import("./icons/whatsapp.svg"));
const Telegram = dynamic<{ className?: string }>(() => import("./icons/telegram.svg"));
const Social1 = dynamic<{ className?: string }>(() => import("./icons/social1.svg"));
const Facebook = dynamic<{ className?: string }>(() => import("./icons/facebook.svg"));
const Social2 = dynamic<{ className?: string }>(() => import("./icons/social2.svg"));
const Copy = dynamic<{ className?: string }>(() => import("./icons/copy.svg"));
const Close = dynamic<{ className?: string }>(() => import("./icons/close.svg"));
const UserHandUp = dynamic<{ className?: string }>(() => import("./icons/userHandUp.svg"));
const HandMoney = dynamic<{ className?: string }>(() => import("./icons/handMoney.svg"));
const UserCheckRounded = dynamic<{ className?: string }>(() => import("./icons/userCheckRounded.svg"));
const HourGlass = dynamic<{ className?: string }>(() => import("./icons/hourGlass.svg"));
const Gift = dynamic<{ className?: string }>(() => import("./icons/gift.svg"));
const Global = dynamic<{ className?: string }>(() => import("./icons/global.svg"));
const Phone = dynamic<{ className?: string }>(() => import("./icons/phone.svg"));
const Info = dynamic<{ className?: string }>(() => import("./icons/info.svg"));
const Pen = dynamic<{ className?: string }>(() => import("./icons/pen.svg"));
const Bill = dynamic<{ className?: string }>(() => import("./icons/bill.svg"));
const User = dynamic<{ className?: string }>(() => import("./icons/user.svg"));
const ColorGift = dynamic<{ className?: string }>(() => import("./icons/color-gift.svg"));

export type IconType =
  | "Mail"
  | "Whatsapp"
  | "Telegram"
  | "Social1"
  | "Facebook"
  | "Social2"
  | "Copy"
  | "Close"
  | "UserHandUp"
  | "HandMoney"
  | "UserCheckRounded"
  | "HourGlass"
  | "Gift"
  | "Global"
  | "Phone"
  | "Info"
  | "Pen"
  | "Bill"
  | "User"
  | "ColorGift";

type IconProps = {
  name: IconType | undefined;

  className?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  if (!name) {
    return null;
  }

  const icons = {
    Mail,
    Whatsapp,
    Telegram,
    Social1,
    Facebook,
    Social2,
    Copy,
    Close,
    UserHandUp,
    HandMoney,
    UserCheckRounded,
    HourGlass,
    Gift,
    Global,
    Phone,
    Info,
    Pen,
    Bill,
    User,
    ColorGift,
  };

  const CurrentIcon = icons[name];

  return <CurrentIcon className={className} />;
};

export default Icon;
