import React from 'react';

const Layout: React.FC = ({ children }) => {

  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
};
export default Layout;