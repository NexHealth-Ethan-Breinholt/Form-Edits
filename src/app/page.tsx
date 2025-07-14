import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";

export default function Home() {
  return (
    <div>
      <FormContext>
        {/* <main className="flex flex-col gap-8 w-1/2 min-w-2xl m-auto py-16"> */}
        <main className="grid grid-cols-[1fr_50%_1fr] h-screen overflow-hidden">
          <div className="sticky left-0 top-0 bottom-0"></div>
          <div className="py-8 px-16 overflow-y-scroll">
            <FormDisplayer filePath="/form-examples/med-history-conditions.json" />
          </div>
          <div className="sticky right-0 top-0 bottom-0 bg-zinc-800"></div>
        </main>
      </FormContext>
    </div>
  );
}