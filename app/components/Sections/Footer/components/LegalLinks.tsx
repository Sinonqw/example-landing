const LegalLinks: React.FC = () => (
  <div className="flex gap-6">
    <a
      href="/privacy"
      className="hover:text-blue-600 transition-colors duration-300"
    >
      Политика Конфиденциальности
    </a>
    <a href="/terms" className="hover:text-blue-600 transition-colors duration-300">
      Условия Использования
    </a>
  </div>
);
export default LegalLinks;