const Article = ({ title, children }) => {
  return (
    <div className="grid py-8 sm:grid-cols-4">
      <div className="mb-4 sm:mb-0">
        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-gray-800 hover:text-blue-1000"
            aria-label="Category"
          >
            Books
          </a>
          <p className="text-gray-600">5 Jan 2020</p>
        </div>
      </div>

      <div className="sm:col-span-3 lg:col-span-2">
        <div className="mb-3">
          <a
            href="/"
            aria-label="Article"
            className="inline-block text-gray-900 transition-colors duration-200 hover:text-blue-1000"
          >
            <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
              {title}
            </p>
          </a>
        </div>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
};

export default Article;
