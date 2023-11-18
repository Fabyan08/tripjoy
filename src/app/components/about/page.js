import { Image } from "@nextui-org/react";
export default function AboutPage() {
  return (
    <div className="bg-[#142536] w-full h-fit pb-10 px-10">
      <h1 className="text-blue-500 text-2xl font-semibold">About Us</h1>
      <h1 className="text-white text-lg">The Adventure Trip by Tripjoy</h1>
      <div className="md:flex justify-between items-center space-y-5 md:space-y-0 md:space-x-60">
        <div className="text-white space-y-4 mt-4">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            necessitatibus tenetur incidunt doloremque! Vitae quae doloribus ex
            nemo expedita sequi praesentium aliquid quaerat error officiis quasi
            ullam debitis repellendus voluptate, voluptatibus nesciunt sapiente,
            minus id saepe numquam fuga, magni corporis alias. Facilis,
            molestias eligendi. Maiores labore quidem soluta ad quasi ipsa saepe
            ratione deleniti nam dolores eaque quisquam architecto tempore id
            sed quam commodi perferendis, dolor optio voluptatum adipisci
            voluptas. Atque, quisquam commodi! Rem ad aliquam obcaecati dolore
            distinctio ullam!
          </h1>
          <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt eveniet expedita velit minima? Velit consequatur cum quos dicta nesciunt, modi consequuntur, voluptate eum laborum labore architecto odit quam dolorem quia maiores distinctio debitis temporibus? Commodi esse vero inventore pariatur. Accusamus, amet voluptatem tempore fugit impedit voluptas commodi quia! Ab, unde consectetur hic odit in iure sit maiores tempora provident ipsum alias eum veritatis, dolor omnis id ex voluptate porro! Labore, totam doloremque nihil saepe unde quisquam assumenda provident repellat. Accusamus laudantium eius distinctio nulla, laborum commodi! Odio animi atque sapiente sunt veritatis optio quam enim mollitia facere minima, soluta pariatur ea natus impedit? Corporis vel minus totam fugiat. Quae, ut totam! Ea, in nihil magni beatae et molestiae quaerat.
          </h1>
        </div>
        <div>
        <Image src="/assets/img/abt.png" width={6000} height={6000} alt="about"></Image>
        </div>
      </div>
    </div>
  );
}
