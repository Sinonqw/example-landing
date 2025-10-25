const LegalLinks: React.FC = () => (
  <div className="flex gap-6">
    <a
      href="/privacy"
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    >
      Політика Конфіденційності
    </a>
    <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
      Умови Використання
    </a>
  </div>
);
export default LegalLinks;
