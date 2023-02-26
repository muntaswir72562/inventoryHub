const header = (title, subtitle) => {
  return (
    <div className="header__wrapper w-full mb-5 border-b-black border-b-2">
      <h2 className="text-2xl font-bold text-gray-500">{title}</h2>
      <div className="header__subtitle">
        <div className="text-sm font-extralight">{subtitle}</div>
      </div>
    </div>
  );
};

export default header;
