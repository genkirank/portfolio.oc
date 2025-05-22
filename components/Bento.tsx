import{Projects} from "../const/const"
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import Image from "next/image";


export function Bento() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
    <BentoGrid className='max-w2xl pb-8 mx-auto  md:auto-rows-[16rem]'>
      {Projects.map((projects, index) => (
        <BentoGridItem
          key={index}
          title={projects.title}
          description={projects.description}
          header={<Image src={projects.image} alt={projects.title} width={120} height={120} className='w-full max-h-[157px] object-cover rounded-lg  border-neutral-300' />}
          className={`${projects.className} ${index === 1 ?  "" : "bg-bleu"}`}
          link={projects.link}
        />
      ))}
    
      </BentoGrid>
      </>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
