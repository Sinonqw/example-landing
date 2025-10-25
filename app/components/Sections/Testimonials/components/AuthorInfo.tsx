import Avatar from "@/app/components/ui/Avatar";
import AuthorDetails from "./AuthorDetails";
import { AuthorInfoProps } from "@/types/testimonials";

const AuthorInfo: React.FC<AuthorInfoProps> = ({ name, title }) => (
  <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
    <Avatar name={name} />
    <AuthorDetails name={name} title={title} />
  </div>
);
export default AuthorInfo;
