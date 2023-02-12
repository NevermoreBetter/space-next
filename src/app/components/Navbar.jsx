import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/destination">destination</Link>
      <Link href="/crew">crew</Link>
      <Link href="/technology">technology</Link>
    </>
  );
};

export default Navbar;
