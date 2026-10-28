import Image from "next/image";
import Link from "next/link";

// logo.png: 425x144 (transparente). Altura fixa, largura proporcional.
export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link href="#top" aria-label="regif" className={`inline-flex items-center ${className}`}>
      <Image src="/logo.png" alt="regif" width={425} height={144} priority className="h-10 w-auto" />
    </Link>
  );
}
