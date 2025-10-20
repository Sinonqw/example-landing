import { AuthorInfoProps } from "@/types/testimonials";

const AuthorDetails: React.FC<AuthorInfoProps> = ({ name, title }) => (
  <div className="flex-grow">
    <p className="font-bold text-gray-900 text-base">{name}</p>
    <p className="text-sm text-gray-600 leading-tight">{title}</p>
  </div>
);
export default AuthorDetails;
