import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";

export default function Home() {
  return (
    <div>
      <FormContext>
        {/* <main className="flex flex-col gap-8 w-1/2 min-w-2xl m-auto py-16"> */}
        <main className="grid grid-cols-[75%_1fr] h-screen overflow-hidden">
          <div className="py-8 px-16 overflow-y-scroll">
            <div className="max-w-3xl m-auto">
              <FormDisplayer filePath="/form-examples/med-history-conditions.json" />
            </div>
          </div>
          <div className="sticky right-0 top-0 bottom-0 bg-zinc-800 text-white p-8">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Element Label</h1>
              <h2 className="text-xs opacity-50 italic">Element Key | Element Type</h2>
              <hr className="text-zinc-950 mt-3 mb-2" />
              <div>
                <p className="mb-2">Split Into Columns</p>
                <div className="text-zinc-300 space-x-1 m-auto w-fit">
                  <button className="bg-zinc-950 w-8 h-8 hover:bg-zinc-900 hover:text-white rounded-l-md">1</button>
                  <button className="bg-zinc-950 w-8 h-8 hover:bg-zinc-900 hover:text-white">2</button>
                  <button className="bg-zinc-950 w-8 h-8 hover:bg-zinc-900 hover:text-white">3</button>
                  <button className="bg-zinc-950 w-8 h-8 hover:bg-zinc-900 hover:text-white">4</button>
                  <button className="bg-zinc-950 w-8 h-8 hover:bg-zinc-900 hover:text-white rounded-r-md">6</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FormContext>
    </div>
  );
}