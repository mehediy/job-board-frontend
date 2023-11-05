const Footer = () => {
  return (
    <footer className="h-[400px] bg-dark">
      <div className="container mx-auto h-full padding flex flex-col justify-between ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 text-light">
          <div>Section 1</div>
          <div>Section 2</div>
          <div>Section 3</div>
          <div>Section 4</div>
        </div>
        <div className="flex justify-between text-light text-sm">
          <p>© 2023 Jobs. All Rights Reserved.</p>
          <div>Links</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
