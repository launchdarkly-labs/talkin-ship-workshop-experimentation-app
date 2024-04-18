import type { NextApiRequest, NextApiResponse } from "next";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { galaxymarketplace } from "@/schema/schema";
import React, { useState } from "react";

// @ts-ignore

type Data = {
  id: number;
  item: string;
  vendor: string;
  cost: number;
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {

  let storeInventory: Data = [
    {
      id: 1,
      vendor: "vrgalaxy",
      item: "VR Headset - Advanced Model",
      cost: 499.99,
    },
    {
      id: 2,
      vendor: "vrgalaxy",
      item: "Wireless VR Controllers (Pair)",
      cost: 119.99,
    },
    {
      id: 3,
      vendor: "vrgalaxy",
      item: "VR Treadmill for Immersive Movement",
      cost: 899.99,
    },
    { id: 4, vendor: "vrgalaxy", item: "Haptic Feedback Gloves", cost: 259.99 },
    {
      id: 5,
      vendor: "vrgalaxy",
      item: "Virtual Reality Game - Space Adventure",
      cost: 59.99,
    },
    { id: 6, vendor: "vrgalaxy", item: "VR Headset Cleaning Kit", cost: 29.99 },
    { id: 7, vendor: "vrgalaxy", item: "360° VR Camera", cost: 349.99 },
    {
      id: 8,
      vendor: "vrgalaxy",
      item: "Virtual Reality Development Software",
      cost: 199.99,
    },
    {
      id: 9,
      vendor: "vrgalaxy",
      item: "Adjustable VR Headset Stand",
      cost: 39.99,
    },
    {
      id: 10,
      vendor: "vrgalaxy",
      item: "Virtual Reality Experience Ticket - Underwater World",
      cost: 14.99,
    },
    {
      id: 11,
      vendor: "macrocenter",
      item: "High-Performance Graphics Card - 8GB",
      cost: 699.99,
    },
    {
      id: 12,
      vendor: "macrocenter",
      item: "Gaming Motherboard - RGB Lighting",
      cost: 259.99,
    },
    {
      id: 13,
      vendor: "macrocenter",
      item: "Solid State Drive (SSD) - 1TB",
      cost: 129.99,
    },
    {
      id: 14,
      vendor: "macrocenter",
      item: "DDR4 RAM - 16GB Kit (2x8GB)",
      cost: 89.99,
    },
    {
      id: 15,
      vendor: "macrocenter",
      item: "Modular Power Supply - 750W",
      cost: 119.99,
    },
    {
      id: 16,
      vendor: "macrocenter",
      item: "CPU Cooler - Liquid Cooling System",
      cost: 139.99,
    },
    {
      id: 17,
      vendor: "macrocenter",
      item: "Full-Tower PC Case - Tempered Glass",
      cost: 199.99,
    },
    {
      id: 18,
      vendor: "macrocenter",
      item: "Wireless Gaming Keyboard and Mouse Combo",
      cost: 99.99,
    },
    {
      id: 19,
      vendor: "macrocenter",
      item: "27-inch Gaming Monitor - 144Hz",
      cost: 329.99,
    },
    {
      id: 20,
      vendor: "macrocenter",
      item: "Internal Sound Card - 7.1 Surround",
      cost: 79.99,
    },
    {
      id: 21,
      vendor: "boominbox",
      item: "VR Headset - Advanced Model",
      cost: 499.99,
    },
    {
      id: 22,
      vendor: "boominbox",
      item: "Bluetooth Noise-Canceling Headphones",
      cost: 299.99,
    },
    {
      id: 23,
      vendor: "boominbox",
      item: "Wireless Earbuds - Waterproof Edition",
      cost: 159.99,
    },
    {
      id: 24,
      vendor: "boominbox",
      item: "High-Fidelity Turntable",
      cost: 349.99,
    },
    {
      id: 25,
      vendor: "boominbox",
      item: "Portable Bluetooth Speaker - Rugged Design",
      cost: 119.99,
    },
    {
      id: 26,
      vendor: "boominbox",
      item: "Studio Monitor Speakers (Pair)",
      cost: 499.99,
    },
    {
      id: 27,
      vendor: "boominbox",
      item: "Multi-Channel Home Theater System",
      cost: 999.99,
    },
    {
      id: 28,
      vendor: "boominbox",
      item: "Digital Audio Interface - Pro Series",
      cost: 229.99,
    },
    {
      id: 29,
      vendor: "boominbox",
      item: "Smart Home Sound System with Voice Control",
      cost: 399.99,
    },
    {
      id: 30,
      vendor: "boominbox",
      item: "Professional DJ Mixer",
      cost: 699.99,
    },
  ];

  const { storename } = req.query;
  if (typeof storename !== "string") {
    res.status(400).json({ error: "Invalid storename" });
    return;
  }

  if (storename === "all") {
    res.status(200).json(storeInventory);
  } else {
    storeInventory = storeInventory.filter((item) => item.vendor === storename);
  }
  res.status(200).json(storeInventory);
}
