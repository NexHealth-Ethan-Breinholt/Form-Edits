import Panel from "./components/form-components/panel";
import Textfield from "./components/form-components/textfield";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col w-1/2 m-auto py-16">
        <Panel name="Panel">
          <div className="p-4 rounded-md bg-blue-100 text-blue-800 shadow-xs h-48">Location Logo</div>
          <Textfield label="This is my first question?" required={true} />
          <Textfield label="This is my second question?" required={false} />
          <div className="p-4 rounded-md bg-zinc-600 text-zinc-100 shadow-xs">Columns
            <div className="grid gap-4 mt-4 grid-cols-2">
              <div>
                <Textfield label="This is my third question?" required={true} />
              </div>
              <div>
                <Textfield label="This is my fourth question?" required={false} />
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md bg-green-100 text-green-800 shadow-xs">Textfield</div>
          <div className="p-4 rounded-md bg-lime-100 text-lime-800 shadow-xs required h-24">Textarea</div>
          <div className="p-4 rounded-md bg-yellow-100 text-yellow-800 shadow-xs">Content</div>
          <div className="p-4 rounded-md bg-zinc-600 text-zinc-100 shadow-xs">Columns
            <div className="grid gap-4 mt-4 grid-cols-[75%_1fr]">
              <div>
                <div className="p-4 rounded-md bg-orange-100 text-orange-800 shadow-xs required h-36">Signature</div>
              </div>
              <div>
                <div className="p-4 rounded-md bg-indigo-100 text-indigo-800 shadow-xs required">Date</div>
              </div>
            </div>
          </div>
        </Panel>
      </main>
    </div>
  );
}