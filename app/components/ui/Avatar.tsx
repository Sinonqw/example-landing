const Avatar: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
    {name.charAt(0)}
  </div>
);
export default Avatar;
