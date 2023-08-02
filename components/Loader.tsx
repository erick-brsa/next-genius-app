import Image from "next/image";

const Loader = () => {
	return (
		<div className="h-full p-20 flex flex-col items-center">
            <div className="relative h-10 w-10 animate-spin">
                <Image
                    src="/img/logo.png"
                    alt="Logo"
                    fill
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                Genius is thinking...
            </p>
		</div>
	);
};

export default Loader;
