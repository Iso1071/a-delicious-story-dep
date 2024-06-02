const Layout = ({ children }) => {
  return (
    <>
      <a href="/">
        <h1>A Delicious Story</h1>
      </a>
      <main>{children}</main>
    </>
  );
};

export default Layout;
