export interface NavItem {
  name: string;
  href: string;
}

export interface LogoProps {
  accentColor: string;
  onClick: () => void;
}

export interface DesktopNavProps {
  items: NavItem[];
  accentColor: string;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  accentColor: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  accentColor: string;
  onItemClick: () => void;
}

export interface NavLinkProps {
  item: NavItem;
  accentColor: string;
}

export interface CTAButtonProps {
  accentColor: string;
  onClick?: () => void;
}
