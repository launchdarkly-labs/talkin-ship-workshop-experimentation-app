//@ts-nocheck
import * as React from "react";
import { useContext } from "react";
import { Search, PanelTopOpen } from "lucide-react";
import { Avatar, AvatarImage } from "./avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import LoginContext from "@/utils/contexts/login";
import { Button } from "./button";
import { StoreCart } from "./marketcomponents/stores/storecart";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from "./dropdown-menu";

import QRCodeImage from "./QRCodeImage";
import { PersonaContext } from "../personacontext";
import { QuickLoginDialog } from "../quicklogindialog";

interface NavBarProps {
  cart: InventoryItem[];
  personas: Persona[];
  setCart: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  variant: string;
}

interface Persona {
  id: string | number;
  personaname: string;
  personatype: string;
  personaimage: string;
  personaemail: string;
}

const NavBar = React.forwardRef<any, NavBarProps>(
  ({ cart, setCart, className, variant, handleLogout, ...props }, ref) => {
    const { isLoggedIn, user } = useContext(LoginContext);
    let navChild, navLogo, navLinkMobileDropdown, navLinksGroup;
    const navLinkStyling =
      "hidden sm:block pb-12 pt-1.5 bg-transparent mr-4 flex items-start text-sm font-sohnelight font-medium transition-colors bg-no-repeat bg-bottom";

    const { personas } = useContext(PersonaContext);

    navChild = (
      <>
        {!isLoggedIn ? null : (
          <>
            <div className="flex space-x-3 sm:space-x-6 ml-auto sm:mr-4 items-center">
              <StoreCart cart={cart} setCart={setCart} />
              <Search color={"white"} className="hidden sm:block cursor-pointer" />
              <div className="hidden sm:block cursor-pointer text-white">
                <QRCodeImage />
              </div>

              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src={
                        personas.find((persona) => persona.personaname === user)?.personaimage ||
                        "ToggleAvatar.png"
                      }
                      className=""
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] h-[440px]">
                  <>
                    <div className="mx-auto flex place-content-center w-full">
                      <img
                        src={
                          personas.find((persona) => persona.personaname === user)?.personaimage ||
                          "ToggleAvatar.png"
                        }
                        className="rounded-full h-48"
                      />
                    </div>
                    <div className="mx-auto text-center  align-center flex text-black font-sohnelight pt-4  text-xl items-center align-center">
                      <p className="pt-4">
                        Thank you{" "}
                        {personas.find((persona) => persona.personaname === user)?.personaname ||
                          user}{" "}
                        for shopping with us as{"  "}
                        <br></br>
                        <span className="text-2xl">Premium Member</span>!
                      </p>
                    </div>
                    <div className="mx-auto text-center">
                      <Button
                        onClick={handleLogout}
                        className=" bg-red-700 items-center font-audimat my-2 w-full bg-gradient-to-r from-marketblue text-black to-marketgreen text-xl rounded-none"
                      >
                        Logout
                      </Button>
                      <QuickLoginDialog personas={personas} variant={variant} />
                    </div>
                  </>
                </PopoverContent>
              </Popover>
            </div>
          </>
        )}
      </>
    );

    navLogo = (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="50" className="pr-0 sm:pr-2">
          <image href="/market.png" height="40" width="40" alt="Marketplace" />
        </svg>
        <p className="text-sm sm:text-base flex text-white font-sohnelight">
          <strong className="font-sohne">Galaxy </strong>&nbsp;Marketplace
        </p>
      </>
    );

    navLinkMobileDropdown = (
      <>
        {isLoggedIn ? (
          <>
            <DropdownMenuItem href="/marketplace">All</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Account</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Buy Again</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Today's Deals</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Sale</DropdownMenuItem>
          </>
        ) : null}

        <div className="flex justify-between">
          <DropdownMenuItem>
            <Search className="cursor-pointer" />
          </DropdownMenuItem>
          <div className="cursor-pointer">
            <QRCodeImage />
          </div>
        </div>
      </>
    );

    navLinksGroup = (
      <>
        <button
          href="/marketplace"
          className={`${navLinkStyling} ml-12 flex items-start text-white hover:text-white focus:text-airlinetext bg-gradient-to-r from-marketblue to-marketgreen bg-[length:100%_3px]`}
        >
          All
        </button>
        <button
          href="/marketplace"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-marketblue to-marketgreen bg-[length:100%_3px]`}
        >
          Account
        </button>
        <button
          href="/marketplace"
          className={`${navLinkStyling}  text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-marketblue to-marketgreen bg-[length:100%_3px]`}
        >
          Buy Again
        </button>
        <button
          href="/marketplace"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-marketblue to-marketgreen bg-[length:100%_3px]`}
        >
          Today's Deals
        </button>
        <button
          href="/marketplace"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-marketblue to-marketgreen bg-[length:100%_3px]`}
        >
          Sale
        </button>
      </>
    );

    return (
      <nav className="sticky w-full flex top-0 bg-black z-40 font-audimat transition-all duration-150 h-full sm:h-20 p-4 sm:p-6">
        <div className="ml-2 sm:ml-8 flex items-center">{navLogo}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 cursor-pointer block lg:hidden text-white">
              <PanelTopOpen size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>{navLinkMobileDropdown}</DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
        {isLoggedIn ? (
          <div className="hidden lg:flex sm:gap-x-2 lg:gap-x-6">{navLinksGroup}</div>
        ) : null}
        {navChild}
      </nav>
    );
  }
);

export default NavBar;