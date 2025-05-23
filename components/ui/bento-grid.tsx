import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  link?: string
}) => {
  return (

    <div
      className={cn(
        'group/bento shadow-input row-span-1 p-4 flex flex-col justify-between space-y-4 rounded-xl border-2 border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}>
      <Link href={link || '#'} target="_blank" >
        {header}
        <div className='transition duration-200  group-hover/bento:translate-x-2'>
          <div className='mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200'>{title}</div>
          <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>{description}</div>
        </div>
      </Link>
    </div>

  )
}
