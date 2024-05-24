import React from "react";
import dynamic from "next/dynamic";

const Mail = dynamic<{ className?: string }>(() => import("./Icons/mail.svg"));
const Whatsapp = dynamic<{ className?: string }>(() => import("./Icons/whatsapp.svg"));
const Telegram = dynamic<{ className?: string }>(() => import("./Icons/telegram.svg"));
const Social1 = dynamic<{ className?: string }>(() => import("./Icons/social1.svg"));
const Facebook = dynamic<{ className?: string }>(() => import("./Icons/facebook.svg"));
const Social2 = dynamic<{ className?: string }>(() => import("./Icons/social2.svg"));
const Copy = dynamic<{ className?: string }>(() => import("./Icons/copy.svg"));
const Close = dynamic<{ className?: string }>(() => import("./Icons/close.svg"));
const UserHandUp = dynamic<{ className?: string }>(() => import("./Icons/userHandUp.svg"));
const HandMoney = dynamic<{ className?: string }>(() => import("./Icons/handMoney.svg"));
const UserCheckRounded = dynamic<{ className?: string }>(() => import("./Icons/userCheckRounded.svg"));
const HourGlass = dynamic<{ className?: string }>(() => import("./Icons/hourGlass.svg"));
const Gift = dynamic<{ className?: string }>(() => import("./Icons/gift.svg"));
const Global = dynamic<{ className?: string }>(() => import("./Icons/global.svg"));
const Phone = dynamic<{ className?: string }>(() => import("./Icons/phone.svg"));
const Info = dynamic<{ className?: string }>(() => import("./Icons/info.svg"));
const Pen = dynamic<{ className?: string }>(() => import("./Icons/pen.svg"));
const Bill = dynamic<{ className?: string }>(() => import("./Icons/bill.svg"));
const User = dynamic<{ className?: string }>(() => import("./Icons/user.svg"));
const ColorGift = dynamic<{ className?: string }>(() => import("./Icons/color-gift.svg"));

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
