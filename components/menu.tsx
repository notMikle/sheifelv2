// components/MenuComponent.tsx
"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MenuComponent: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetTrigger asChild>
                <button className="md:hidden">Menu</button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4">
                    {["Главная", "Услуги", "Прайс-лист", "Контакты"].map((item, index) => (
                        <Link key={index} href={`/${item.toLowerCase().replace(/-/g, '')}`} className="block py-2 text-lg" onClick={onClose}>
                            {item}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}