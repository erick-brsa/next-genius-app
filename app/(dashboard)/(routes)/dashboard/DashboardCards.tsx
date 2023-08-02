'use client';

import {
	MessageSquare,
	ArrowRight,
	Music,
	ImageIcon,
	Code,
	VideoIcon
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const tools = [
	{
		label: 'Conversation',
		icon: MessageSquare,
		color: 'text-violet-500',
		bgColor: 'bg-violet-500/10',
		href: '/conversation'
	},
	{
		label: 'Image Generation',
		icon: ImageIcon,
		color: 'text-pink-700',
		bgColor: 'bg-pink-700/10',
		href: '/image'
	},
	{
		label: 'Video Generation',
		icon: VideoIcon,
		color: 'text-orange-700',
		bgColor: 'bg-orange-700/10',
		href: '/video'
	},
	{
		label: 'Music Generation',
		icon: Music,
		color: 'text-emerald-500',
		bgColor: 'bg-emerald-500/10',
		href: '/music'
	},
	{
		label: 'Code Generation',
		icon: Code,
		color: 'text-green-700',
		bgColor: 'bg-green-700/10',
		href: '/code'
	}
];
const DashboardCards = () => {
	const router = useRouter();
	return (
		<>
			{tools.map(tool => (
				<Card
					onClick={() => router.push(tool.href)}
					key={tool.href}
					className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
				>
					<div className="flex items-center gap-x-4">
						<div
							className={cn('p-2 w-fit rounded-md', tool.bgColor)}
						>
							<tool.icon className={cn('w-8 h-8', tool.color)} />
						</div>
						<div className="font-semibold">{tool.label}</div>
					</div>
					<ArrowRight />
				</Card>
			))}
		</>
	);
};

export default DashboardCards;
