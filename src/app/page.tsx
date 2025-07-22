import ContextMenu from "./components/context-menu";
import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";

export default function Home() {
  return (
    <div>
      <FormContext>
        <ContextMenu />
        <main className="grid grid-cols-[1fr_25%] h-screen">
          <div className="p-16 overflow-scroll">
            <div className="max-w-3xl m-auto">
              <FormDisplayer filePath="/form-examples/cc-authorization.json" />
            </div>
          </div>
          <div className="bg-white border-l border-zinc-300 p-8 text-black">
            <h1 className="font-bold text-lg">NexHealth Form Edits</h1>
            <textarea placeholder="Enter form page JSON here..." className="w-full shadow-inner rounded-md mt-8 p-2 px-3 h-32 outline-none border border-zinc-400 resize-none text-black placeholder:italic placeholder:text-zinc-400 focus-within:border-zinc-800 focus-within:ring-4 ring-sync-200" />
            <div className="flex gap-2 justify-end">
              <button className="rounded-md px-4 py-1 bg-white border border-zinc-300 float-right font-bold shadow">Copy</button>
              <button className="rounded-md px-4 py-1 bg-sync-200 float-right font-bold shadow">Apply</button>
            </div>
          </div>
        </main>
      </FormContext>
    </div>
  );
}