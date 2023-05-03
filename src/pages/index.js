import stacks from "../data/stacks.json";
import { Stacks } from "../components/Stacks";

export default function Home() {

   return (
    <div className="h-full flex justify-center items-center flex-col">
      <div>What do you want to learn?</div>
      <div className="flex">
        <Stacks stacks={stacks}/>
      </div>
    </div>
  )
}
