"use client"
import Link from "next/link";
import { LinkType } from "@/types/links.type";
type NavbarProps = {
    links: LinkType[]
}
  
const Navbar = ({ links }: NavbarProps) => {

  return <>
    <nav className="flex mx-6	my-9 items-center justify-between bg-light-color px-8 py-2">
      <div>
        <ul className="flex gap-6 text-primary-color font-bold">
          {links && links.map((link, index) =>
            <li className="text-xl" key={`menu-link-${index}`}>
              <Link href={link.href} className="p-2 w-full flex" >{link.title}</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar
