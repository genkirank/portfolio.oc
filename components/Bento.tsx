import { cn } from "@/lib/utils";
import{Projects} from "../const/const"
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";


export function Bento() {
  return (
    <BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
      {Projects.map((projects, index) => (
        <BentoGridItem
          key={index}
          title={projects.title}
          description={projects.description}
          header={projects.header}
          className={projects.className}
          icon={projects.icon}
          link={projects.link}
        />
      ))}
      <div className='flex justify-end w-full col-span-3'>
        <Link href='/projects'> Voir plus </Link>
      </div>
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export const projectssBento = [
  {
    title: 'Qwenta',
    description:
      "Création de spécifiaction techniques et gestions de projet pour le développement d'une application web pour Qwenta.",
    header: (
      <Image
        src='/Qwenta.png'
        alt='Qwenta'
        width={200}
        height={200}
        className='w-full'
      />
    ),
    className: 'md:col-span-2',
    link: 'https://www.qwenta.com/'
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />
  }
]