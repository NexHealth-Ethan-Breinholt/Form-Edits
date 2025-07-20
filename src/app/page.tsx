import ContextMenu from "./components/context-menu";
import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";

export default function Home() {
  return (
    <div>
      <FormContext>
        <ContextMenu />
        <main className="flex flex-col gap-8 w-1/2 min-w-2xl m-auto py-16">
          <div className="py-8 px-16">
            <div className="max-w-3xl m-auto">
              <FormDisplayer filePath="/form-examples/med-history-conditions.json" />
            </div>
          </div>
        </main>
      </FormContext>
    </div>
  );
}