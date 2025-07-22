import ContextMenu from "./components/context-menu";
import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";
import FormJsonInputField from "./components/form-json-input-field";

export default function Home() {
  return (
    <div>
      <FormContext>
        <ContextMenu />
        <main className="grid grid-cols-[1fr_25%] h-screen">
          <div className="p-16 overflow-scroll">
            <div className="max-w-3xl m-auto">
              {/* <FormDisplayer filePath="/form-examples/cc-authorization.json" /> */}
              <FormDisplayer filePath="/form-examples/med-history-conditions.json" />
            </div>
          </div>
          <div className="bg-white border-l border-zinc-300 p-8 text-black">
            <h1 className="font-bold text-lg">NexHealth Form Edits</h1>
            <FormJsonInputField />
            <div className="flex gap-2 justify-end">
              <button className="rounded-md px-4 py-1 bg-white border border-zinc-300 float-right font-bold shadow hover:border-sync-500 transition-colors">Copy</button>
              <button className="rounded-md px-4 py-1 bg-sync-500 float-right font-bold shadow hover:bg-sync-200 transition-colors">Apply</button>
            </div>
          </div>
        </main>
      </FormContext>
    </div>
  );
}