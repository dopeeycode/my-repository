import Image from 'next/image'
import Button from './ui/button'

export default function Header() {
  return (
    <header className="py-6 px-4 border-b border-b-neutrals-11">
      <div className="flex items-center justify-between max-w-[80rem] mx-auto">
        <Image src="/logoWithText.svg" alt="" width={100} height={100} />
        <ul className="flex rounded-[1.875rem] border border-neutrals-11 py-2 px-5 gap-5">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <Button>
          <Image src="/icons/messageSquare.svg" alt="" width={32} height={32} />
          Fale Comigo
        </Button>
      </div>
    </header>
  )
}
