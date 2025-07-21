"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Bitcoin,
    TrendingUp,
    Wallet,
    BarChart3,
    Settings,
    Menu,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BankIcon from "../icons/Bank";

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = usePathname();

    const navItems = [
        { href: "/", label: "Dashboard", icon: BarChart3 },
        { href: "/stake", label: "Stake", icon: TrendingUp },
        { href: "/confirm", label: "Confirm", icon: Wallet },
        { href: "/unstake", label: "Unstake", icon: Settings },
        { href: "/plan", label: "Plan", icon: Bitcoin },
    ];

    return (
        <nav className="border-b border-border bg-card/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 md:px-0">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex items-center gap-0.5">
                        <BankIcon className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                            CoreBank
                        </span>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = location === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                                            isActive
                                                ? "bg-primary/20 text-primary border border-primary/30"
                                                : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side - Wallet connect */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-2 bg-card rounded-lg px-3 py-2 border border-border">
                            <Bitcoin className="h-4 w-4 text-accent" />
                            <span className="text-sm text-foreground font-mono">
                                BEX030...210023
                            </span>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                                    )}
                                >
                                    <Icon className="h-5 w-5 mr-3" />
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-4 pb-2 px-3">
                            <div className="flex items-center space-x-2 bg-card rounded-lg px-3 py-2 border border-border">
                                <Bitcoin className="h-4 w-4 text-accent" />
                                <span className="text-sm text-foreground font-mono">
                                    BEX030...210023
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
