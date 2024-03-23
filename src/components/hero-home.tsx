import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Github, Mouse, Youtube } from 'lucide-react'

export const HeroHome = () => {
  return (
    <section className='relative flex flex-col justify-center items-center h-[40vh]'>
        <Badge className='p-2 font-semibold'>Akhmad Sugiannoor 🛠️</Badge>
        <h1 className='md:text-6xl text-3xl font-bold text-center my-3'>Front End Developer </h1>
        <p className='text-gray-400 font-semibold md:text-lg text-sm text-center xl:w-[50%] md:w-[90%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis totam, sed dicta commodi </p>
        <div className='flex gap-3 mt-3'>
            
            <Button>
                <Github className='h-[1.5rem] w-[1.5rem] mr-1'/>
                <div className='font-medium'>Github</div>
            </Button>
            <Button>
                <Youtube className='h-[1.5rem] w-[1.5rem] mr-1'/>
                <div className='font-medium'>Youtube</div>
            </Button>
        </div>
        <Mouse className='mt-6 cursor-pointer'/>
    </section>
  )
}
