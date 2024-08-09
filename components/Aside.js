import Link from "next/link";
import { useState,useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { MdOutlinePending, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function Aside() {
  const router = useRouter;
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };
  useEffect(() => {
    // update active link state when the page is reload
    setActiveLink(router.pathname)
  
  }, [router.pathname])
  
  return (
    <>
      <aside className="asideleft">
        <ul>
          <Link href="/">
            <li className={activeLink === "/" ? "navactive":""}
            onClick={()=>{handleLinkClick('/')}}>
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link href="/blogs">
          <li className={activeLink === "/blogs" ? "navactive":""}
            onClick={()=>{handleLinkClick('/blogs')}}>
              <BsPostcard />
              <span>Blogs</span>
            </li>
          </Link>
          <Link href="/blogs/addblog">
          <li className={activeLink === "/blogs/addblog" ? "navactive":""}
            onClick={()=>{handleLinkClick('/blogs/addblog')}}>
              <MdOutlineAddPhotoAlternate />
              <span>Add Blog</span>
            </li>
          </Link>
          <Link href="/draft">
          <li className={activeLink === "/draft" ? "navactive":""}
            onClick={()=>{handleLinkClick('/draft')}}>
              <MdOutlinePending />
              <span>Pending</span>
            </li>
          </Link>
          <Link href="/setting">
          <li className={activeLink === "/setting" ? "navactive":""}
            onClick={()=>{handleLinkClick('/setting')}}>
              <IoSettingsOutline />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}
