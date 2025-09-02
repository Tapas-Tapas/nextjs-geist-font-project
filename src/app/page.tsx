"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { KunmunLogo } from "@/components/KunmunLogo";

export default function Home() {
  const [lunchFilter, setLunchFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [dinnerFilter, setDinnerFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [monthlyFilter, setMonthlyFilter] = useState<"all" | "veg" | "non-veg">("all");

  const lunchItems = [
    {
      id: 1,
      name: "Veg Thali",
      price: "₹70.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Traditional+Indian+Vegetarian+Thali+with+rice+dal+vegetables",
      description: "Traditional Indian vegetarian platter with rice, dal, vegetables, and accompaniments"
    },
    {
      id: 2,
      name: "Mushroom Thali",
      price: "₹130.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Delicious+Mushroom+Curry+Thali+with+aromatic+spices",
      description: "Aromatic mushroom curry with fresh herbs and traditional spices"
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      price: "₹95.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Creamy+Paneer+Butter+Masala+with+naan+bread",
      description: "Rich and creamy paneer curry served with fresh naan bread"
    },
    {
      id: 4,
      name: "Dal Makhani",
      price: "₹85.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Slow+cooked+Dal+Makhani+with+butter+and+cream",
      description: "Slow-cooked black lentils in a rich, creamy tomato-based sauce"
    },
    {
      id: 5,
      name: "Chole Bhature",
      price: "₹75.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Spicy+Chole+with+fluffy+Bhature+bread",
      description: "Spicy chickpea curry served with fluffy, deep-fried bread"
    },
    {
      id: 6,
      name: "Aloo Gobi",
      price: "₹65.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Fresh+Aloo+Gobi+with+cauliflower+and+potatoes",
      description: "Traditional cauliflower and potato curry with aromatic spices"
    }
  ];

  const dinnerItems = [
    {
      id: 1,
      name: "Chowmin",
      price: "₹10.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Fresh+Vegetable+Chowmein+noodles+with+colorful+vegetables",
      description: "Stir-fried noodles with fresh vegetables and savory sauce"
    },
    {
      id: 2,
      name: "Roll",
      price: "₹8.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Crispy+Vegetable+Roll+with+fresh+filling+and+chutney",
      description: "Crispy roll filled with seasoned vegetables and tangy chutney"
    },
    {
      id: 3,
      name: "Paratha",
      price: "₹7.00",
      type: "veg",
      image: "https://placehold.co/300x200?text=Golden+Stuffed+Paratha+with+butter+and+pickle",
      description: "Flaky, buttered flatbread served with pickle and yogurt"
    },
    {
      id: 4,
      name: "Chowmin Special",
      price: "₹11.00",
      type: "non-veg",
      image: "https://placehold.co/300x200?text=Special+Chicken+Chowmein+with+tender+meat+and+vegetables",
      description: "Premium chowmein with tender chicken and exotic vegetables"
    }
  ];

  const weeklyMenu = [
    { day: "Monday", lunch: "Paneer Butter Masala with Naan", dinner: "Chicken Biryani with Raita" },
    { day: "Tuesday", lunch: "Veg Pulao & Mixed Veg Curry", dinner: "Fish Curry & Steamed Rice" },
    { day: "Wednesday", lunch: "Dal Makhani & Jeera Rice", dinner: "Mutton Rogan Josh & Paratha" },
    { day: "Thursday", lunch: "Chole Bhature", dinner: "Egg Curry & Rice" },
    { day: "Friday", lunch: "Veg Mushroom Thali - daily price: ₹12.00 & Manchurian", dinner: "Butter Chicken & Naan" },
    { day: "Saturday", lunch: "Masala Dosa & Coconut Chutney", dinner: "Paneer Tikka Masala & Rice" },
    { day: "Sunday", lunch: "Special Thali", dinner: "Chef's Special Dinner" }
  ];

  const filteredLunchItems = lunchItems.filter(item => 
    lunchFilter === "all" || item.type === lunchFilter
  );

  const filteredDinnerItems = dinnerItems.filter(item => 
    dinnerFilter === "all" || item.type === dinnerFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-4">
            <KunmunLogo size={60} className="drop-shadow-lg" />
            <h1 className="text-4xl font-playfair font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
              Kunmun Hotel
            </h1>
          </div>
          <p className="text-center text-stone-600 mt-2 text-sm">
            ⭐ Premium Dining Experience ⭐
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="lunch" className="w-full">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/60 backdrop-blur-sm border border-stone-200">
              <TabsTrigger value="lunch" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800">
                🍽️ Lunch
              </TabsTrigger>
              <TabsTrigger value="dinner" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800">
                🌙 Dinner
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800">
                📅 Monthly Menu
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Lunch Menu */}
          <TabsContent value="lunch" className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl">🍽️</span>
                <h2 className="text-3xl font-playfair font-bold text-stone-800">Lunch Menu</h2>
              </div>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                Savor the flavors of our chef's special lunch creations!
              </p>
              
              {/* Filter Buttons */}
              <div className="flex justify-center space-x-2">
                <Button
                  variant={lunchFilter === "all" ? "default" : "outline"}
                  onClick={() => setLunchFilter("all")}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                >
                  All Items
                </Button>
                <Button
                  variant={lunchFilter === "veg" ? "default" : "outline"}
                  onClick={() => setLunchFilter("veg")}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  🌱 Veg
                </Button>
                <Button
                  variant={lunchFilter === "non-veg" ? "default" : "outline"}
                  onClick={() => setLunchFilter("non-veg")}
                  className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                >
                  🍖 Non-Veg
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLunchItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-stone-800">{item.name}</CardTitle>
                      <Badge variant={item.type === "veg" ? "secondary" : "destructive"} className="ml-2">
                        {item.type === "veg" ? "🌱 Veg" : "🍖 Non-Veg"}
                      </Badge>
                    </div>
                    <CardDescription className="text-stone-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                View More Items
              </Button>
            </div>
          </TabsContent>

          {/* Dinner Menu */}
          <TabsContent value="dinner" className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl">🌙</span>
                <h2 className="text-3xl font-playfair font-bold text-stone-800">Dinner Menu</h2>
              </div>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                Indulge in a delightful dinner experience, every night.
              </p>
              
              {/* Filter Buttons */}
              <div className="flex justify-center space-x-2">
                <Button
                  variant={dinnerFilter === "all" ? "default" : "outline"}
                  onClick={() => setDinnerFilter("all")}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                >
                  All Items
                </Button>
                <Button
                  variant={dinnerFilter === "veg" ? "default" : "outline"}
                  onClick={() => setDinnerFilter("veg")}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  🌱 Veg
                </Button>
                <Button
                  variant={dinnerFilter === "non-veg" ? "default" : "outline"}
                  onClick={() => setDinnerFilter("non-veg")}
                  className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                >
                  🍖 Non-Veg
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDinnerItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-stone-800">{item.name}</CardTitle>
                      <Badge variant={item.type === "veg" ? "secondary" : "destructive"} className="text-xs">
                        {item.type === "veg" ? "🌱" : "🍖"}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-stone-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-orange-700">{item.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                        Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                View More Items
              </Button>
            </div>
          </TabsContent>

          {/* Monthly Menu */}
          <TabsContent value="monthly" className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl">📅</span>
                <h2 className="text-3xl font-playfair font-bold text-stone-800">Monthly Menu</h2>
              </div>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                Discover our exclusive monthly specials - crafted just for you!
              </p>
              
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-4 inline-block">
                <p className="text-emerald-800 font-semibold">
                  Monthly Special Price: <span className="text-2xl font-bold">₹3500</span>
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex justify-center space-x-2">
                <Button
                  variant={monthlyFilter === "all" ? "default" : "outline"}
                  onClick={() => setMonthlyFilter("all")}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                >
                  All Items
                </Button>
                <Button
                  variant={monthlyFilter === "veg" ? "default" : "outline"}
                  onClick={() => setMonthlyFilter("veg")}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  🌱 Veg
                </Button>
                <Button
                  variant={monthlyFilter === "non-veg" ? "default" : "outline"}
                  onClick={() => setMonthlyFilter("non-veg")}
                  className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                >
                  🍖 Non-Veg
                </Button>
              </div>
            </div>

            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-playfair text-stone-800">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-stone-200">
                        <TableHead className="font-semibold text-stone-700 w-24">Day</TableHead>
                        <TableHead className="font-semibold text-stone-700">Lunch Special</TableHead>
                        <TableHead className="font-semibold text-stone-700">Dinner Special</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {weeklyMenu.map((menu, index) => (
                        <TableRow key={index} className="border-stone-100 hover:bg-stone-50/50">
                          <TableCell className="font-medium text-stone-800">{menu.day}</TableCell>
                          <TableCell className="text-stone-600">{menu.lunch}</TableCell>
                          <TableCell className="text-stone-600">{menu.dinner}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3">
                Subscribe to Monthly Plan
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <KunmunLogo size={40} className="opacity-80" />
            <span className="text-xl font-playfair font-bold">Kunmun Hotel</span>
          </div>
          <p className="text-stone-400">© 2025 Kunmun Hotel. All rights reserved.</p>
          <p className="text-stone-500 text-sm mt-2">Experience the finest culinary journey with us.</p>
        </div>
      </footer>
    </div>
  );
}
