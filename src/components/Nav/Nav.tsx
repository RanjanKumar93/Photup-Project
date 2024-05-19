import Link from "next/link";

import Container from "@/components/Container";
import UploadButton from "@/components/UploadButton";
// import Image from "next/image";
// import logo from "../../../public/logo.png";
import SidebarLinks from "../SidebarLinks";
import { Image, Sparkles } from "lucide-react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center h-16 border border-zinc-200">
      <Container className="flex gap-6 items-center flex-row">
        <p className="w-40 flex-grow-0 mb-0">
          <Link href="/" className="flex gap-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="lucide lucide-image-up"
              viewBox="0 0 24 24"
            >
              <path d="M10.3 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10l-3.1-3.1a2 2 0 00-2.814.014L6 21"></path>
              <path d="M14 19.5l3-3 3 3M17 22v-5.5"></path>
              <circle cx="9" cy="9" r="2"></circle>
            </svg>
            <span className="text-xl">Photup</span>
          </Link>
        </p>
        <div className="flex items-center justify-center">
          <SidebarLinks
            className="flex items-center justify-center"
            links={[
              {
                icon: <Image className="w-5 h-5" />,
                label: "Photos",
                path: "/",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                label: "Creations",
                path: "/creations",
              },
            ]}
          />
        </div>
        <ul className="flex flex-grow justify-end gap-6 m-0">
          <li>
            <UploadButton />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
