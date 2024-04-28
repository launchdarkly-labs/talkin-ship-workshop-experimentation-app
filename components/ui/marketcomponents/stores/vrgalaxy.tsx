import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Home, HomeIcon, Menu, Navigation, Sparkle } from "lucide-react";
import { useRouter } from "next/router";
import { CSCard } from "../../ldcscard";
import { animate, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { toast } from "../../use-toast";

interface InventoryItem {
  id: string | number;
  item: string;
  cost: number;
  image: string;
}

// @ts-nocheck
export function VRgalaxy({
  headerLabel,
  storeHeaders,
  addToCart,
  open,
  setOpen,
}: {
  headerLabel: string;
  storeHeaders: string;
  addToCart: any;
  open: boolean;
  setOpen: any;
}) {
  const LDClient = useLDClient();
  const router = useRouter();

  const [inventory, setInventory] = useState([]);

  const addingToCart = (item: InventoryItem) => {
    addToCart(item)

    toast({
      title: `${item.item} has been added to your cart!`,
      wrapperStyle: "bg-gradient-experimentation text-black text-2xl font-sohne"
    });
  }

  useEffect(() => {
    fetch("/api/storeInventory?storename=vrgalaxy")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  async function storeOpened() {
    LDClient?.track("store-accessed", LDClient.getContext(), 1);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => {
          storeOpened();
        }}
        asChild
      >
        <div className="relative flex items-center justify-center">
          {storeHeaders && (
            <motion.div
              initial={{ scale: 0, x: "-100%" }}
              animate={{ scale: 1.15, x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
              }}
              className="flex justify-center absolute top-[10px] right-[20px] z-10 bg-[#EBFF38] px-4 pt-2 pb-[2rem] h-auto marketplace-item-banner-cutout"
            >
              <p className="flex font-sohne uppercase text-xs text-black text-center flex-col justify-around mb-1.5 w-full">
                {headerLabel
                  .split("")
                  .map((char, index) =>
                    char === " " ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
                  )}
              </p>
            </motion.div>
          )}
          <img src="gaming.png" alt="VR Gaming" className="h-[300px] sm:h-[350px] z-0" />
        </div>
      </SheetTrigger>

      <SheetContent className="w-full lg:w-1/2 overflow-auto" side="right">
        <SheetHeader>
          <SheetTitle className="font-sohne text-2xl">Welcome to VR Galaxy</SheetTitle>


        </SheetHeader>
        <Table>
          <TableCaption>VR Galaxy Inventory</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item: InventoryItem) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={`${item.image}`} alt={item.item} />
                </TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.cost}</TableCell>
                <TableCell>
                  <div>
                    <Button
                      className="store rounded-none bg-blue-600 h-auto w-auto font-sohne"
                      onClick={() => addingToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
