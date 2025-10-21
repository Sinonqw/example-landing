import type { ContactItem } from "@/types/footer";

const ContactItem: React.FC<{ contact: ContactItem }> = ({ contact }) => {
  const content = (
    <>
      {contact.icon}
      <span>{contact.text}</span>
    </>
  );

  if (contact.href) {
    return (
      <li>
        <a
          href={contact.href}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-start gap-3 group"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className="text-gray-600 flex items-start gap-3">{content}</li>;
};
export default ContactItem;
