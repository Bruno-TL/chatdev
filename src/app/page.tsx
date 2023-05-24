import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
      <div className='flex-1 overflow-hidden'>
        <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2'>
          <form action="" className='stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'></form>
          <div className='px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3'>
          <span>
          "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts." 
          <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" className="underline"> ChatGPT May 12 Version</a>
          </span>
          </div>
        </div>
      </div>
    </main>
  )
}
