'use client';

import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
	return (
		<div className="">
			<Sheet>
				<SheetTrigger>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="p-0">
					<Sidebar />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileSidebar;
