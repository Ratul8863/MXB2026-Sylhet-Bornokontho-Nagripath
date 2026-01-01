import logo from '../../../assets/logo.jpeg';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        width="40"
        height="40"
        className="rounded-2xl border border-[#c2a24a]"
        alt="Nagripath Logo"
      />
      <p className="text-3xl font-serif font-extrabold text-[#c2a24a] tracking-wide">
        Nagripath
      </p>
    </div>
  );
};

export default Logo;
