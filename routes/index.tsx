import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="flex flex-col w-full p-3 w-screen items-center">
      <div class=" flex flex-col w-full mt-10 lg:w-1/2 items-center">
        <img src="/wizi.jpg" class="rounded-full"/>
        <h1 class="text-black font-bold text-2xl mt-4 mb-10">ARegularWizard</h1>
          <Card/>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <a href="checklist" class="flex w-full h-32 border items-center border-gray-300 rounded-xl cursor-pointer transition-all duration-200 hover:text-white hover:bg-blue-500">
      <img src="/listCheck.svg" class="w-8 h-8 mx-10"/>
      <p class="text-2xl">Check List OBS Widget</p>
    </a>
  )
}