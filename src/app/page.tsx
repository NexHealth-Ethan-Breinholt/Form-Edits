import ContextMenu from "./components/context-menu";
import CopyButton from "./components/copy-button";
import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";
import FormJsonInputField from "./components/form-json-input-field";
import SmallButton from "./components/small-button";

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
              <CopyButton />
            </div>
          </div>
        </main>
      </FormContext>
    </div>
  );
}