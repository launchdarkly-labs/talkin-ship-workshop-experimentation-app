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

export function TheBoominBox({
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
      "id": 21,
      "vendor": "boominbox",
      "item": "VR Headset - Advanced Model",
      "cost": "499.99"
      },
      {
      "id": 22,
      "vendor": "boominbox",
      "item": "Bluetooth Noise-Canceling Headphones",
      "cost": "299.99"
      },
      {
      "id": 23,
      "vendor": "boominbox",
      "item": "Wireless Earbuds - Waterproof Edition",
      "cost": "159.99"
      },
      {
      "id": 24,
      "vendor": "boominbox",
      "item": "High-Fidelity Turntable",
      "cost": "349.99"
      },
      {
      "id": 25,
      "vendor": "boominbox",
      "item": "Portable Bluetooth Speaker - Rugged Design",
      "cost": "119.99"
      },
      {
      "id": 26,
      "vendor": "boominbox",
      "item": "Studio Monitor Speakers (Pair)",
      "cost": "499.99"
      },
      {
      "id": 27,
      "vendor": "boominbox",
      "item": "Multi-Channel Home Theater System",
      "cost": "999.99"
      },
      {
      "id": 28,
      "vendor": "boominbox",
      "item": "Digital Audio Interface - Pro Series",
      "cost": "229.99"
      },
      {
      "id": 29,
      "vendor": "boominbox",
      "item": "Smart Home Sound System with Voice Control",
      "cost": "399.99"
      },
      {
      "id": 30,
      "vendor": "boominbox",
      "item": "Professional DJ Mixer",
      "cost": "699.99"
      }
      ]
      setInventory(data);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>
          <img
            src="electronics.png"
            alt="The Boomin' Box"
            className="h-[300px] sm:h-[350px]"
          />
        </div>
      </SheetTrigger>

      <SheetContent className="w-3/4 lg:w-1/2" side="right">
        <SheetHeader>
          <SheetTitle className="font-sohne text-2xl">
            The Boomin' Box
          </SheetTitle>

          <SheetDescription className="font-sohne">
            Beats for the audiophiles in the crowd!
          </SheetDescription>
        </SheetHeader>
        <Table>
          <TableCaption>The Boomin' Box Inventory</TableCaption>
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
