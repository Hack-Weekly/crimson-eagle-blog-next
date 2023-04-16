import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"


export const metadata = {
  title: 'PostView :: Crimson Blog',
  description: 'A blog application where you can write blogs.',
}

const Home: NextPage = () => (
    <main className="grow mx-8 lg:mx-10 xl:mx-12 mt-4 mb-6">
      
      <div>
        Apr-01-2023 Travel 4.5k Views
      </div>

      <div> Get to your dream now destinations</div>
<Image src="/images/lake.jpg" alt="" height={ 440 } width = {690} />
<div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Vulputate dignissim suspendisse in est ante in. Turpis cursus in hac habitasse platea dictumst. 
  Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Scelerisque eleifend donec pretium vulputate sapien nec. 
  Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. 
  Sem et tortor consequat id porta nibh venenatis cras sed. Ante in nibh mauris cursus mattis molestie a iaculis at. 
  Sagittis id consectetur purus ut faucibus pulvinar elementum. Nulla facilisi nullam vehicula ipsum a arcu cursus. 
  Risus at ultrices mi tempus imperdiet nulla malesuada. Erat pellentesque adipiscing
</div>
  
       
    </main>
)

export default Home
