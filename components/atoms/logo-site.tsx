// DENTRO DE: components/atoms/logo-site.tsx

import Image from "next/image"
import Link from "next/link"

// Renomeamos a função para "LogoSite" para seguir a convenção
export function LogoSite() {
  return (
    <Link href="/" aria-label="Página Inicial do Ricca Ville Chalé">
      <Image
        src="/icone-site.svg"       // Adapte se o nome do seu arquivo de imagem for diferente
        alt="Logo do Ricca Ville Chalé"
        width={150}           
        height={40}
        priority              
      />
    </Link>
  )
}