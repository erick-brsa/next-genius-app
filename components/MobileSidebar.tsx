'use client';

import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

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
