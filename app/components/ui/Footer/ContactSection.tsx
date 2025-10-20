'use client'
import {motion} from 'framer-motion'
import ContactItem from './ContactItem';
import { ANIMATION_VARIANTS } from './LogoSection';
import { Contactitem } from './ContactItem';
interface ContactSectionProps {
  contacts: Contactitem[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ contacts }) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
    <h4 className="font-bold text-gray-900 mb-5 text-lg">Связь</h4>
    <ul className="space-y-4">
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </ul>
  </motion.div>
);
export default ContactSection