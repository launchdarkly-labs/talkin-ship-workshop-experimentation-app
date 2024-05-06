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

import { Home, HomeIcon, Menu, Navigation } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CSCard } from "../../ldcscard";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../table";

interface InventoryItem {
  id: string | number;
  item: string;
  cost: number;
}

export function MacroCenter({
  addToCart,
  open,
  setOpen,
}: {
  addToCart: any;
  open: boolean;
  setOpen: any;
}) {
  const router = useRouter();

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const data = [
      {
      "id": 11,
      "vendor": "macrocenter",
      "item": "High-Performance Graphics Card - 8GB",
      "cost": "699.99"
      },
      {
      "id": 12,
      "vendor": "macrocenter",
      "item": "Gaming Motherboard - RGB Lighting",
      "cost": "259.99"
      },
      {
      "id": 13,
      "vendor": "macrocenter",
      "item": "Solid State Drive (SSD) - 1TB",
      "cost": "129.99"
      },
      {
      "id": 14,
      "vendor": "macrocenter",
      "item": "DDR4 RAM - 16GB Kit (2x8GB)",
      "cost": "89.99"
      },
      {
      "id": 15,
      "vendor": "macrocenter",
      "item": "Modular Power Supply - 750W",
      "cost": "119.99"
      },
      {
      "id": 16,
      "vendor": "macrocenter",
      "item": "CPU Cooler - Liquid Cooling System",
      "cost": "139.99"
      },
      {
      "id": 17,
      "vendor": "macrocenter",
      "item": "Full-Tower PC Case - Tempered Glass",
      "cost": "199.99"
      },
      {
      "id": 18,
      "vendor": "macrocenter",
      "item": "Wireless Gaming Keyboard and Mouse Combo",
      "cost": "99.99"
      },
      {
      "id": 19,
      "vendor": "macrocenter",
      "item": "27-inch Gaming Monitor - 144Hz",
      "cost": "329.99"
      },
      {
      "id": 20,
      "vendor": "macrocenter",
      "item": "Internal Sound Card - 7.1 Surround",
      "cost": "79.99"
      }
      ];
      setInventory(data);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>
          <img src="computers.png" alt="MacroCenter" className="h-[300px] sm:h-[350px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="w-3/4 lg:w-1/2" side="right">
        <SheetHeader>
          <SheetTitle className="font-sohne text-2xl">MacroCenter</SheetTitle>

          <SheetDescription className="font-sohne">
            Computer Parts and Consumer Electronics
          </SheetDescription>
        </SheetHeader>
        <Table>
          <TableCaption>MacroCenter Inventory</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item: InventoryItem) => (
              <TableRow key={item.id}>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.cost}</TableCell>
                <TableCell>
                  <div>
                    <Button
                      className="rounded-none bg-blue-600 font-sohne"
                      onClick={() => addToCart(item)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
