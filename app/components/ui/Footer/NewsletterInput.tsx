import { Send } from "lucide-react";

const NewsletterInput: React.FC<{
  email: string;
  onChange: (email: string) => void;
  onSubmit: () => void;
}> = ({ email, onChange, onSubmit }) => (
  <div className="relative">
    <input
      type="email"
      placeholder="Ваш Email"
      value={email}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSubmit();
        }
      }}
      className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
    />
    <button
      onClick={onSubmit}
      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
    >
      <Send className="w-4 h-4" />
    </button>
  </div>
);

export default NewsletterInput;
