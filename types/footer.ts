export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ContactItem {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

export interface LogoSectionProps {
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavigationSectionProps {
  items: NavItem[];
  onNavClick: (href: string) => void;
}

export interface ContactSectionProps {
  contacts: ContactItem[];
}

export interface NewsletterSectionProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}
