import { AuthorInfoProps } from "@/types/testimonials";

const AuthorDetails: React.FC<AuthorInfoProps> = ({ name, title }) => (
  <div className="flex-grow">
    <p className="font-bold text-gray-900 dark:text-white text-base transition-colors duration-300">{name}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight transition-colors duration-300">{title}</p>
  </div>
);
export default AuthorDetails;
