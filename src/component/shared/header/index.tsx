import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="bg-[#eff6ff] py-3 mb-5">
            <div className="container mx-auto px-4">
                <div className="flex">
                    <div className="basis-1/4">
                        <Link href="/">
                            <img src={`/logo.png`} className='img-fluid' width={120} height={50} alt='FindIfsc' />
                        </Link>
                    </div>
                    <div className="basis-3/4 flex justify-end">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/blog" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuIndicator />
                            <NavigationMenuViewport />
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
