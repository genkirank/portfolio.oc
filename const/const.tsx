import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { cn } from "@/lib/utils";
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const Projects = [
  {
    title: 'Qwenta',
    description:       "Création de spécifiaction techniques et gestions de projet pour le développement d'une application web pour Qwenta.",
    className:'md:col-span-2',
   image: "/Qwenta.png",
    link: 'https://www.qwenta.com/',
   header: (
      <Image
        src='/Qwenta.png'
        alt='Qwenta'
        width={200}
        height={200}
        className='w-full'
      />
    )
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    link: '#',
     icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />

  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with detailed forecasts and animations',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
]

